import { styled } from '@mui/material/styles';
import {  List, ListItemIcon, Typography ,Box,Breadcrumbs} from '@mui/material';
import { blueGrey } from '@mui/material/colors';



export const Styledicon = styled(ListItemIcon)({
  color: 'white',
 
  '&:hover': {
    backgroundColor: 'darkblue',
  },
});

export  const Styledtypo= styled(Typography)({
 marginLeft:2+'vh'

});

export const Styledlist =styled(List)({
  backgroundColor:blueGrey[900],

});

export const StyledBox = styled (Box)({
  marginLeft:110+'vh',
  
});

export const StyledTypo1 = styled(Typography)({
  marginLeft:3+'vh'
 });

 export const StyledBreadcrumbs = styled(Breadcrumbs)({
  marginLeft:2+'vh',
  padding:2+'vh',

})