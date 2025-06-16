import {Group} from "@mui/icons-material";
import {AppBar, Box, Container, MenuItem, Toolbar, Typography} from "@mui/material";
import {NavLink} from "react-router";
import MenuItemLink from "../shared/components/MenuItemLink.tsx";

export default function NavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{
                backgroundImage: 'linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)'
            }}>
                <Container maxWidth='xl'>
                    <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <Box>
                            <MenuItem to="/" component={NavLink} sx={{display: 'flex', gap: 2}}>
                                <Group fontSize="large"/>
                                <Typography variant="h4" fontWeight='bold'>
                                    Reactivities
                                </Typography>
                            </MenuItem>
                        </Box>
                        <Box sx={{display: 'flex', mr: 'auto'}}>
                            <MenuItemLink to="/activities">
                                Activities
                            </MenuItemLink>
                            <MenuItemLink to="/create-activity">
                                Create Activity
                            </MenuItemLink>
                        </Box>
                        <Box sx={{display: "flex", justifyContent: "end"}}>
                            <MenuItem>
                                User menu
                            </MenuItem>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}
