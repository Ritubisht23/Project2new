import React from 'react';
import '../../App.css';

const ShareScreen =()=>{
    return(
        <form class="ui form" style={{marginTop:'5em', width:'40%', marginLeft:'25em'}}>
            <h1><b>Share Screen</b></h1>

            <div>
               <input type="text" name="Sharing Details" placeholder="Enter Sharing Key or Meeting ID" style={{borderColor:"black", borderRadius:"5px",width:"300px", height:"30px" }} />
              </div><br/><br/>

                <button class="ui grey basic button right floated" style={{borderColor:"black", marginLeft:"3cm", borderRadius:"5px", width:"2cm", height:"1cm"}} >Share</button>
                <button class="ui button right floated" style={{borderColor:"black", marginLeft:"1cm", borderRadius:"5px", width:"2cm", height:"1cm"}} >Cancel</button>
        </form>

    );
}

export default ShareScreen;