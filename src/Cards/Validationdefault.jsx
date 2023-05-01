import React from "react";
import { Card,Stack,Typography,CardHeader } from "@mui/material";
import { useTheme } from '@mui/material/styles';

export const Validationdefault =()=>{
    const theme = useTheme();
    return(
        <div>
            <Card sx={{textAlign:"left",marginTop:3+'vh'}}>
            <Stack direction="row" sx={{padding:2+'vh'}} bgcolor={theme.palette.grey[100]} 
            spacing={1} >
            <Typography  variant="h6" >
                Validation 
                </Typography>
                <Typography variant="subtitle1">
               Browser defaults
            </Typography>
            </Stack>
            <CardHeader
            subheader="Not interested in custom validation feedback messages or
             writing javascript change from behaviours? All good you can use the browser
              default .Try submitting the form below.Depending on your browser and os
              ,you will see a slightly different style of feedback."/>
              
            </Card>
        </div>
    )
}