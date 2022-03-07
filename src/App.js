import './App.css';
import Appbar from './Components/Appbar';
import { Paper } from '@mui/material';
import { Alert } from '@mui/material';
import BasicTabs from './Components/tabs';
import Footer from './Components/Footer';

require('dotenv').config()

function App() {
  return (
    <div className="App">
      <div className="Appbar">
        <Appbar/>
      </div>
      <div className="Content">
        <br/>
        <Alert severity="info">Only two books could be redeemed per user!</Alert>
        <br/>
        <Paper elevation={3} >
          <BasicTabs/>
        </Paper>
      </div>
      <div className="Appfooter">
        <br/>
        <Footer/>        
      </div>      
    </div>
  );
}

export default App;
