import { Alert, Typography } from "@mui/material";
import SimpleAccordion from "./accordion";

const Welcomehome = () => {
    return(
        <div className="home">            
            <Typography variant="h5" component="div" gutterBottom>
            <Typography component={'span'} variant={'body2'} role="img" aria-label="sheep">👋</Typography>Hi folks,
            </Typography>
            <br/>
            <Typography variant="body1" component="div" gutterBottom>
                I am giving away my old academic books for <strong>free</strong>. 
                So if you are someone who can't afford it this is the opportunity for you. 
                Books will be from class <strong>9th to 12th</strong>. 
            </Typography>
            <Typography variant="body1" component="div" gutterBottom>
            Kindly don't raise any requests for books as I'm just giving away what I have.
            <br/>
            <br/>
            <Alert severity="warning">If you are interested in giving away your books then do connect with me via mail.</Alert>            
            </Typography>   
            <br/>
            <Typography variant="h6" component="div" gutterBottom>
            <Typography component={'span'} variant={'body2'} role="img" aria-label="curious">🧐</Typography>Steps to redeem
            </Typography>            
            1) Visit Books tab and search for your book(Max two).
            <br/>
            2) Note down the S.R. number.
            <br/>
            3) Visit Form tab and fill the form.
            <br/> <br/>                     
            <Typography variant="h6" component="div" gutterBottom>
            <Typography component={'span'} variant={'body2'} role="img" aria-label="FAQ">🧏‍♀️</Typography>FAQ
            </Typography>
            <SimpleAccordion/>
        </div>
    );
}

export default Welcomehome;