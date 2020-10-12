import React from 'react';
import {Link} from 'react-router-dom';

const InviteOthers =()=>{
     
    return(
    <div>
        <div class="ui two item menu">
  <a class="item">Contacts</a>
  <a class="item active">Email</a>

</div>

<h5 style={{textAlign:'center', marginTop:'8em'}}>Choose your email Service to send notification</h5>

<Link to="/defaultemail"><button class="ui circular facebook icon button" style={{width:'8em', height:'8em', marginRight:'12em', marginTop:'5em'}}>
  <i class="huge envelope open outline icon"></i>
 <h6 style={{marginLeft:'0.4em'}}>Default Email</h6>
  
</button></Link>



<Link to="/gmail"><button class="ui circular facebook icon button" style={{width:'8em', height:'8em', marginRight:'12em'}}>
  <i class="red huge envelope open outline icon"></i>
  <h6 style={{marginLeft:'1.9em'}}>Gmail</h6>
</button></Link>

<Link to="/yahoomail"><button class="ui circular facebook icon button" style={{width:'8em', height:'8em'}}>
  <i class="huge yahoo icon"></i>
  <h6 style={{marginLeft:'0.7em'}}>Yahoo mail</h6>
</button></Link>
</div>
    );

}

export default InviteOthers;