import React from "react";
import { Toolbar,Box, Avatar, Divider } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import { useTheme } from '@mui/material';
import {StyledBox,StyledTypo1} from '../Theme/Styled';


export const Appbar=()=>{

  const theme = useTheme(); 

  return(
    <div>
     <Box color={theme.palette.grey[400]}>
      <Toolbar  >
        
        <MenuIcon/>
     <StyledTypo1 variant="subtitle1">
        Dashboard
     </StyledTypo1>
     <StyledTypo1>
        User
     </StyledTypo1>
     <StyledTypo1>
        Settings
     </StyledTypo1>
     <StyledBox>
        <NotificationsOutlinedIcon />
        <FormatListBulletedOutlinedIcon sx={{marginLeft:2+'vh'}}/>
        <DraftsOutlinedIcon sx={{marginLeft:2+'vh'}}/>
     </StyledBox>
     <Avatar sx={{marginLeft:4+'vh'}}
     src="https://th.bing.com/th/id/OIP.0OXtPVIMzGEoWn64S6x3FQHaFj?pid=ImgDet&rs=1"/>
     
      </Toolbar>
      </Box>
      <Divider/>
    </div>
  )
}