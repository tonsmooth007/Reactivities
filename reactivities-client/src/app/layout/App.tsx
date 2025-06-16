import {useEffect, useState} from "react";
import {Box, Container, CssBaseline, Toolbar} from "@mui/material";
import axios from "axios";
import NavBar from "./NavBar.tsx";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard.tsx";

function App() {

    const [activities, setActivities] = useState<Activity[]>([]);
    const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        axios.get<Activity[]>('https://localhost:5001/api/v1/activities')
            .then(response => setActivities(response.data));
    }, []);

    const handleSelectActivity = (id: string) => {
        setSelectedActivity(activities.find(x => x.id === id));
    }

    const handleCancelSelectActivity = () => {
        setSelectedActivity(undefined);
    }

    const handleOpenForm = (id?: string) => {
        if (id) handleSelectActivity(id);
        else handleCancelSelectActivity();
        setEditMode(true);
    }

    const handleFormClose = () => {
        setEditMode(false);
    }

    const handleSubmitForm = (activity: Activity)=> {
        if (activity.id) {
            setActivities(activities.map(x => x.id === activity.id ? activity : x));
        }else {
            const newActivity = {...activity, id: activities.length.toString()}
            setSelectedActivity(newActivity);
            setActivities([...activities, newActivity]);
        }
        setEditMode(false);
    }

    const handleDelete = (id: string) => {
        setActivities(activities.filter(x => x.id !== id));
    }

    return (
        <Box sx={{bgcolor: '#eeeeee'}}>
            <CssBaseline/>
            <NavBar openForm={handleOpenForm}/>
            <Toolbar/>
            <Container maxWidth="xl" sx={{mt: 3}}>
                <ActivityDashboard
                    selectActivity={handleSelectActivity}
                    cancelSelectActivity={handleCancelSelectActivity}
                    selectedActivity={selectedActivity}
                    activities={activities}
                    editMode={editMode}
                    openForm={handleOpenForm}
                    closeForm={handleFormClose}
                    submitForm={handleSubmitForm}
                    deleteActivity={handleDelete}
                />
            </Container>
        </Box>
    );
}

export default App
