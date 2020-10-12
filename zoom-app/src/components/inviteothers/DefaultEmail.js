import React from 'react';

const DefaultEmail=()=>{

    return(
        <form class="ui form" style={{marginTop:'5em', width:'60%'}}>
        <div class="field">
    
    <input type="text" name="invite email" placeholder="Enter Email address to send invite"/>
  </div>
  
  <button class="ui button right floated" >Send Invite</button>
</form>

    );

}

export default DefaultEmail;