import React from 'react';

const Yahoomail=()=>{

    return(
        <form class="ui form" style={{marginTop:'5em', width:'60%'}}>
        <div class="field">
    
    <input type="text" name="invite email" placeholder="example123@yahoo.com"/>
  </div>
  
  <button class="ui button right floated" >Send Invite</button>
</form>

    );

}

export default Yahoomail;