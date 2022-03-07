import { GitHub, Mail } from "@mui/icons-material";
import { Tooltip } from "@mui/material";


const Appbar = ()=>{
    return(
        <div className="appbar-wrapper">
            <div className="Heading">Books</div>
            <div className="social-handles">
                <span className="margin">
                    <Tooltip title="praddy2009">                
                        <a target="_blank" rel="noreferrer" href="https://github.com/Praddy2009" ><GitHub/></a>
                    </Tooltip>                    
                </span>
                <Tooltip title="praddy2009@gmail.com">                
                    <a href="mailto:praddy2009@gmail.com"><Mail/></a>                
                </Tooltip>                    
            </div>            
        </div>        
    );
}

export default Appbar;