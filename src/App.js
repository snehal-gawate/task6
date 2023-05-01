import logo from './logo.svg';
import './App.css';
import { Sidebar } from './Components/Sidebar/Sidebar';
import { Appbar } from './Components/Appbar';
import {Box} from "@mui/material";
import { Home } from './Components/Home';
import { Pagecontent } from './Components/pagecontent';


function App() {
  return (
    <div className="App">
    
      <Sidebar/>
      <Box sx={{marginLeft:38+'vh'}}>
      <Appbar />
     <Home/>
     <Pagecontent/>
     </Box>
      
    </div>
  );
}

export default App;
