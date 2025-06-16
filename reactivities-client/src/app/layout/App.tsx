import {useState} from "react";
import {Box, Container, CssBaseline, Toolbar, Typography} from "@mui/material";
import NavBar from "./NavBar.tsx";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard.tsx";
import {useActivities} from "../../lib/hooks/useActivities.ts";


function App() {
    const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
    const [editMode, setEditMode] = useState(false);
    const {activities, isPending} = useActivities();

    const handleSelectActivity = (id: string) => {
        setSelectedActivity(activities!.find(x => x.id === id));
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

    return (
        <Box sx={{bgcolor: '#eeeeee', minHeight: '100vh'}}>
            <CssBaseline/>
            <NavBar openForm={handleOpenForm}/>
            <Toolbar/>
            <Container maxWidth="xl" sx={{mt: 3}}>
                {!activities || isPending ? (
                    <Typography>Loading...</Typography>
                ) : (
                    <ActivityDashboard
                        selectActivity={handleSelectActivity}
                        cancelSelectActivity={handleCancelSelectActivity}
                        selectedActivity={selectedActivity}
                        activities={activities}
                        editMode={editMode}
                        openForm={handleOpenForm}
                        closeForm={handleFormClose}
                    />
                )}
            </Container>
        </Box>
    );
}

export default App
