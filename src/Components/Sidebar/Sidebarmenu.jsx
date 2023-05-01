import React from "react";
import { List,ListItemText,ListItemIcon,ListItemButton,Button,Box } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import { useTheme } from '@mui/material';
import { Styledicon,Styledtypo,Styledlist} from "../../Theme/Styled";

export const Sidebarmenu=()=>{

  const myimage =require(".././../image/title.png")
  const theme = useTheme(); 
 

    return(
        <div style={{textAlign:"left"}}>
          <Styledlist>
          <Box component='img' src={myimage} alt='' height={12+'vh'} width={35+'vh'}/>
          </Styledlist>
           <List >
             <ListItemButton>
             < Styledicon >
             <SpeedOutlinedIcon  />
             </ Styledicon>
             <ListItemText primary="Dashboard" />
             <Button variant="contained" size="small"
             >New</Button>
             </ListItemButton>
            </List>
            <List>
             <Styledtypo variant="subtitle1">
                THEME
             </Styledtypo>
             <ListItemButton>
             < Styledicon>
             <  WaterDropOutlinedIcon  /> 
             </ Styledicon>
             <ListItemText primary="Colors" />
             </ListItemButton>
             <ListItemButton>
             < Styledicon>
             < EditOutlinedIcon/>
             </ Styledicon>
             <ListItemText primary="Typography" />
             </ListItemButton>
            </List>
            <List>
             <Styledtypo variant="subtitle1">
                Components
             </Styledtypo>
             <ListItemButton>
             < Styledicon>
             < ExtensionOutlinedIcon />
             </ Styledicon>
             <ListItemText primary="Base" />
             <ExpandMoreIcon />
             </ListItemButton>
             <ListItemButton>
             < Styledicon>
             <  NearMeOutlinedIcon /> 
             </ Styledicon>
             <ListItemText primary="Buttons" />
             <ExpandMoreIcon />
             </ListItemButton>
            </List>

            <Styledlist >
             <ListItemButton>
             < Styledicon>
             <TextSnippetOutlinedIcon /> 
             </ Styledicon>
             <ListItemText primary="Form" />
             <ExpandLessOutlinedIcon />
             </ListItemButton>
             <ListItemButton>
                <ListItemIcon>
                </ListItemIcon>
            <ListItemText primary="Form  Control" />
             </ListItemButton>
             <ListItemButton>
                <ListItemIcon>
                </ListItemIcon>
            <ListItemText primary="Select" />
             </ListItemButton>
             <ListItemButton>
                <ListItemIcon>
                </ListItemIcon>
            <ListItemText primary=" Checks & Radio" />
             </ListItemButton>
             <ListItemButton>
                <ListItemIcon>
                </ListItemIcon>
            <ListItemText primary="Range" />
             </ListItemButton>
             <ListItemButton>
                <ListItemIcon>
                </ListItemIcon>
            <ListItemText primary="Input Group" />
             </ListItemButton>
             <ListItemButton>
                <ListItemIcon>
                </ListItemIcon>
            <ListItemText primary="Floating Labels" />
             </ListItemButton>
             <ListItemButton>
                <ListItemIcon>
                </ListItemIcon>
            <ListItemText primary="Layout" />
             </ListItemButton>
             <ListItemButton>
                <ListItemIcon>
                </ListItemIcon>
            <ListItemText primary="Validation" />
             </ListItemButton>
             <ListItemButton>
                < Styledicon>
                    <PieChartOutlineOutlinedIcon/>
                </ Styledicon>
            <ListItemText primary="  Charts" />
             </ListItemButton>
            </Styledlist>
          
        </div>
    )
}