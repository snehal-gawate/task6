import React from "react";
import { Box,Drawer } from "@mui/material";
import {Sidebarmenu} from "./Sidebarmenu";
import { useTheme } from '@mui/material';

const drawerWidth = '17vw';

export const Sidebar=()=>{
    const theme = useTheme();
    return(
        <div>
            <Box sx={{ paddingRight: '3rem' }}>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        background: theme.palette.grey[800],
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        color: theme.palette.background.paper,
                        height: '97%',
                        margin: '1rem',
                        borderRadius: '8px',
                    }
                }}
                variant="permanent"
                anchor="left"
            >
               
               
                <Sidebarmenu />
               
            </Drawer>
        </Box>
        </div>
    )
}