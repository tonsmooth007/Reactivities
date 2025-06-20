import {Box, Container, CssBaseline, Toolbar} from "@mui/material";
import NavBar from "./NavBar.tsx";
import {Outlet} from "react-router";


function App() {
    return (
        <Box sx={{bgcolor: '#eeeeee', minHeight: '100vh'}}>
            <CssBaseline/>
            <NavBar/>
            <Toolbar/>
            <Container maxWidth="xl" sx={{mt: 3}}>
                <Outlet/>
            </Container>
        </Box>
    );
}

export default App
