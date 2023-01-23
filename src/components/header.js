import React from 'react';

const header=(props)=>{
    console.log({props});
    return(
            <div class="main" style={{textAlign:"center",border:"2px solid cyan",borderRadius:"5px",padding:"5px"}}>
               <h1 style={{}}>Contact Manager</h1>
            </div>
            
    )
};

export default header;