import React from "react";
import { Divider,Link,Typography } from "@mui/material";
import { useTheme } from '@mui/material';
import { StyledBreadcrumbs } from "../Theme/Styled";

export const Home=()=>{

    const theme = useTheme(); 

    return(
        <div >
           <StyledBreadcrumbs 
            aria-label="breadcrumb">
           <Link 
            color={theme.palette.primary.light}
            underline="always" 
            href="/">
            Home
            </Link>
            <Link
            underline="always"
            color={theme.palette.primary.light}
            href=""
            >
            Form
           </Link>
           <Typography color="text.primary">
            Validations
            </Typography>
           </StyledBreadcrumbs >
         <Divider/>
        </div>
    )
}