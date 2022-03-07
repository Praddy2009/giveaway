import { useEffect } from "react";
import CustomizedTables from "./Table";
import { useState } from "react";
import { CircularProgress } from "@mui/material";

const Sheets = () => {
    
    const [data, setData]= useState(null);

    useEffect(()=>{
        fetch("")    
        .then(res=>{            
            return res.json()
        })
        .then(data=>{
           setData(data)
           //console.log(data)
        })
        .catch(err=>{        
            console.log(err)
        })
    },[]);
    
    return ( 
        <div>
            {!data && <CircularProgress />}
            {data && <CustomizedTables sheetdata={data}/>}
        </div>
     );
}

export default Sheets;