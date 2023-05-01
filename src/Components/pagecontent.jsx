import React from "react";
import { Cardtab } from "../Cards/Cardtab";
import { Container,Box } from "@mui/material";
import { Validationcustomcard } from "../Cards/Validationcustomcard";
import { Validationdefault } from "../Cards/Validationdefault";
// import { Container } from "@mui/material";
import { useTheme } from '@mui/material/styles';
export const Pagecontent=()=>{

    const theme = useTheme();

    return(
        <div >
            <Box sx={{bgcolor:theme.palette.grey[300]}}>
            <Container  sx={{padding:4+'vh'}}>
                 <Cardtab/>
                 <Validationcustomcard/>
                 <Validationdefault/>
                 </Container>
                 </Box>
        </div>
    )
}