import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import {Button} from "@mui/material";

import "./index.css"

function Appbar() {
    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar className={"app-bar"} position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Music Lovers
                    </Typography>
                    <Button color="inherit">Chat</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Appbar
