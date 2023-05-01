import React from "react";
import { Box,Tabs, Typography,Link,Card } from "@mui/material";
import styled from "@emotion/styled";
import { useTheme } from '@mui/material';

const StyledTypo = styled(Typography)({
 fontSize:15,
});

export const Cardtab=()=>{
   
  const theme =useTheme();

    return(
        
            <Card >
              <Box sx={{ flexGrow: 1, display: 'flex' }}>
      <Tabs
        orientation="vertical"
        sx={{ borderRight: 3, borderColor: '#2196f3' }}
      >
    </Tabs>

      <Box sx={{ flexGrow: 1 ,marginLeft:2+'vh',marginTop:2+'vh',marginBottom:2+'vh'}}>
       <Box sx={{textAlign:"left"}}>
            <StyledTypo variant="subtitle2">
            A React Validation component has been created
             as a native react.js version of Bootstrap validation.
             validation is delivered with some new features,variants,
             and <br/>unique designs that matches core ui Design system requirments.
             <br/> 
             <StyledTypo variant="subtitle2" sx={{marginTop:3+'vh'}}>
             For more information please visit our official

             <Link sx={{marginLeft:1+'vh'}}
             color={theme.palette.primary.dark}
             >documentation of CoreUi 
             Components Library for Raact.js</Link>
             </StyledTypo>
             </StyledTypo>
             </Box>
            
      </Box>
    </Box>
    </Card>
 
        
    )
}