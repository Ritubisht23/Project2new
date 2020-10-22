import React from 'react';
import '../../App.css';
import Footer from '../footer/Footer';

const ShareScreen =()=>{
    return(
        <>
            <h1><b>Share Screen</b></h1>

            <div>
               <input type="text" name="Sharing Details" placeholder="Enter Sharing Key or Meeting ID" style={{borderColor:"black", borderRadius:"5px",width:"300px", height:"30px" }} />
              </div><br/><br/>

                <button class="ui grey basic button right floated" style={{borderColor:"black", marginLeft:"3cm", borderRadius:"5px", width:"2cm", height:"1cm"}} >ddddd</button>
           
                <button class="ui button right floated" style={{borderColor:"black", marginLeft:"1cm", borderRadius:"5px", width:"2cm", height:"1cm"}} >Cancel</button>

                <Footer />

        
</>
    );
}

export default ShareScreen;