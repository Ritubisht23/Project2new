import React from 'react';
import { Divider, Button } from 'semantic-ui-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const PersonalMeeting =()=>{
    return(
        <form class="ui form" style={{marginTop:'4em'}}>

        <h1>Personal Meeting ID Settings</h1>

  <div class="field">
    <label>Personal Meeting ID</label><br/><br/>
    <div style={{display:"flex"}}>
        <input type="text"  style={{borderRadius:"5px", width:'6cm', height:"1cm"}}/>
      <button class="ui linkedin button"  style={{borderRadius:"7px",marginLeft:"1cm", width:'8cm',height:"1cm", backgroundColor:"blue", color:"white", fontSize:"16px"}}>  Upgrade to Pro to Change </button>
      </div>
  </div>
  
  <Divider horizontal className="horizontal" style={{borderColor:"whiteSmoke"}}><br/>
    </Divider>

  <label><b>Password</b></label><br/><br/>
    <div class="fields" style={{display:"flex", marginRight:'50em'}}>
     <input type="checkbox" tabindex="0"/>
      <label>&nbsp;Require Meeting Password</label> 
        <input type="text" style={{width:"4cm", marginLeft:"3cm"}} />
        <button data-toggle="tooltip" data-placement="top" title="Please enter the meeting ID password" style={{marginLeft:"0.3cm"}}>
          <FontAwesomeIcon icon={faQuestionCircle} />
          </button>      
     </div><br/> 

  <Divider horizontal className="horizontal" style={{borderColor:"whiteSmoke"}}><br/>
    </Divider>

  <label><b>Video</b></label><br/><br/>
  <div class="inline fields"  style={{display:"flex"}} >
    
    <div class="field">
    <label style={{marginLeft:"0.5cm"}}><b>Host : </b></label>      
        <input type="radio" tabindex="0" name="on"  />
        <label>On</label>    
        <input type="radio" tabindex="0" name="off"  style={{marginLeft:"0.5cm"}}/>
        <label >Off</label>
    </div>

    <div class="field">
    <label style={{marginLeft:"1cm"}}><b>Partcipants : </b></label>      
        <input type="radio" ></input>
        <label >On</label>     
        <input type="radio" tabindex="0" style={{marginLeft:"0.5cm"}}/>
        <label>Off</label>   
    </div>
  </div><br/>

  <Divider horizontal className="horizontal" style={{borderColor:"whiteSmoke"}}><br/>
    </Divider>

    <label><b>Advanced Options</b></label><br/>
    <div class="grouped fields" >    
     
        <input type="radio" name="fruit" tabindex="0" />
        <label >Enable Waiting Room</label><br/>    
        <input type="radio" name="fruit" tabindex="0" />
        <label style={{marginRight:'20em'}}>Enable join before host</label><br/>    
        <input type="radio" name="fruit" tabindex="0" />
        <label style={{marginRight:'20em'}}>Mute participants upon entry</label><br/>   
        <input type="radio" name="fruit" tabindex="0" class="hidden"/>
        <label style={{marginRight:'20em'}}>Automatically record meeting on the local computer</label>
     
  </div><br/>

    <Button  style={{borderRadius:"5px", marginLeft:"10cm", width:"3cm", height:"0.8cm", backgroundColor:"blue", color:"white" }} >Save</Button>
        
 
</form>
        
    );
}

export default PersonalMeeting;