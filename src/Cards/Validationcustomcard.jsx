import { Card, CardHeader, Container, Typography,Divider, CardContent,
    InputAdornment,IconButton,Paper,OutlinedInput,Avatar, Button, InputLabel,FormHelperText, 
    Grid,FormControlLabel , Stack ,Checkbox} from "@mui/material";
import React from "react";
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import CheckIcon from '@mui/icons-material/Check';
import { useTheme } from '@mui/material/styles';

export const Validationcustomcard=()=>{
   
    const theme = useTheme();
    return(
        <div>
          
           <Card sx={{textAlign:"left",marginTop:3+'vh'}}>
            <Stack direction="row" sx={{padding:2+'vh'}} bgcolor={theme.palette.grey[100]}
            spacing={1} >
            < Typography variant="h6" color={theme.palette.grey[900]} >
                Validation 
                </Typography>
                <Typography variant="subtitle1">
            custom styles
            </Typography>
            </Stack>
            <Divider/>
           <Typography variant="subtitle1" color={theme.palette.grey[600]} sx={{paddingLeft:2+'vh',paddingTop:2+'vh'}}>
            For custom CoreUi form validation messages,you will 
              need to add the <Typography sx={{display:"inline"}} color={theme.palette.secondary.dark}>noValidate</Typography> boolean property to 
              your <Typography sx={{display:"inline"}} color={theme.palette.secondary.dark}>Cform</Typography>  ,this disables
              the browser defaultfeebacks toltips.but still provides access to the
              form validation Api's in javascript.Try to submit the form below,our
              javascript will intercept the submit button and relay feedback to you.
              when attempting to submit,you'll see the <Typography sx={{display:"inline"}} color={theme.palette.secondary.dark}>: invalid </Typography> and
              <Typography sx={{display:"inline"}} color={theme.palette.secondary.dark}>:valid styles</Typography> 
               applied to your form  controls.</Typography>
               
               <CardHeader
               subheader="custom feedback styles apply custom colors,borders,styles,and
               background icons to better comunicate feedback."/>
               <CardContent>
                <Button variant="outlined" 
                sx={{color:"#616161",borderColor:"#616161"}}
                startIcon={<PlayArrowOutlinedIcon/>}
                >Preview</Button>
                <Button variant="text"
                 startIcon={< CodeOffIcon/>}
                >Code</Button>

            <Divider/>
                <Paper elevation={0} sx={{bgcolor:"#f5f5f5",padding:2+'vh'}}>

                   <Grid container spacing={1}>
             
                    <Grid item xs={4} >
                    <InputLabel >
                    Email
                    </InputLabel>
                    <OutlinedInput
                    placeholder="mark"
                    size="small"
                    fullWidth
                    color="success"
                     endAdornment={
                        <InputAdornment position="end">
                          <IconButton>
                            <CheckIcon color="success" />
                          </IconButton>
                          </InputAdornment>
                              }/>
                    <FormHelperText >
                    <Typography variant="subtitle1" color={theme.palette.success.light}>
                     Looks good !
                     </Typography>
                    </FormHelperText>
                    </Grid>
                    <Grid item xs={4}>
                    <InputLabel>
                    Email
                    </InputLabel>
                    <OutlinedInput
                    placeholder="otto"
                    color="success"
                    always
                    fullWidth
                    size="small"
                     endAdornment={
                        <InputAdornment position="end">
                          <IconButton>
                            <CheckIcon color="success" />
                          </IconButton>
                          </InputAdornment>
                              }/>
                    <FormHelperText >
                    <Typography variant="subtitle1" color={theme.palette.success.light}>
                     Looks good !
                     </Typography>
                    </FormHelperText>
                    </Grid>
                    <Grid item xs={4}>
                    <InputLabel fullWidth>
                    Username
                    </InputLabel>
                    <Stack direction='row'>
                    <Avatar variant="square">
                       @
                    </Avatar>
                    <OutlinedInput
                    color="error"
                    fullWidth
                    size="small"
                     endAdornment={
                        <InputAdornment position="end">
                          <IconButton>
                            <AnnouncementOutlinedIcon color="error" />
                          </IconButton>
                          </InputAdornment>
                              }/>
                              </Stack>
                    <FormHelperText >
                    <Typography variant="subtitle1" color={theme.palette.error.light}>
                     Please choose a username
                     </Typography>
                    </FormHelperText>
                     </Grid>
                  
                 <Grid item xs={6}>
                    <InputLabel fullWidth>
                    City
                    </InputLabel>
                    <OutlinedInput
                    color="error"
                    fullWidth
                    size="small"
                     endAdornment={
                        <InputAdornment position="end">
                          <IconButton>
                            <AnnouncementOutlinedIcon color="error" />
                          </IconButton>
                          </InputAdornment>
                              }/>
                    <FormHelperText >
                    <Typography variant="subtitle1" color={theme.palette.error.light}>
                     Please Provide a valid zip
                     </Typography>
                    </FormHelperText>
                    </Grid>
                    <Grid item xs={3}>
                    <InputLabel>
                    City
                    </InputLabel>
                    <OutlinedInput
                    fullWidth
                    size="small"
                    fullWidth
                    color="success"
                    
                     endAdornment={
                        <InputAdornment position="end">
                          <IconButton>
                            <CheckIcon color="success" />
                          </IconButton>
                          </InputAdornment>
                              }/>
                    </Grid>
                    <Grid item xs={3}>
                    <InputLabel>
                    City
                    </InputLabel>
                    <OutlinedInput
                    color="error"
                    fullWidth
                    size="small"
                     endAdornment={
                        <InputAdornment position="end">
                          <IconButton>
                            <AnnouncementOutlinedIcon color="error" />
                          </IconButton>
                          </InputAdornment>
                              }/>
                    <FormHelperText >
                    <Typography variant="subtitle1" color={theme.palette.error.light}>
                     Please Provide a valid zip
                     </Typography>
                    </FormHelperText>
                    </Grid>
                 {/* </Stack> */}
                 </Grid>
                 <FormControlLabel  sx={{color:theme.palette.error.light}} control={<
                  Checkbox sx={{color:theme.palette.error.light}}> 
                  
                 </Checkbox>}
                 
                  label="Agree to Term and conditions" />
                  <br/>
                 <Button variant="contained" >Submit form</Button>
                </Paper>
               </CardContent>
            </Card> 
        </div>
    )
}