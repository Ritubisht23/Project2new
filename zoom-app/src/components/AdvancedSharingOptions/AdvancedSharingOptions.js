import React from 'react';
import {Divider} from 'semantic-ui-react';
import './AdvancedSharingOptions.css'
import {faVideo} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const AdvancedSharingOptions=()=>(
  
     
        <div>
            <form className="form-new">
                <div>
                    <FontAwesomeIcon icon={faVideo}></FontAwesomeIcon>&nbsp;&nbsp;
<label>Advanced Sharing Options...</label>
                </div><br/>

<label><b>How mny participants can share at the same time?</b></label><br/>
<input type="radio"></input><label>One participant can share at a time</label><br/>
<input type="radio"></input><label>Multiple participants can share simultaneously(dual monitors recommended)</label><br/><br/>
<Divider className="divider" horizontal></Divider><br/>

<label><b>Who can Share?</b></label><br/>
<input type="radio"></input><label>Only Host</label>&nbsp;&nbsp;
<input type="radio"></input><label>All Participants</label><br/><br/>
<Divider className="divider" horizontal></Divider><br/>

<label><b>Who can start sharing when someone else is sharing?</b></label><br/>
<input type="radio"></input><label>Only Host</label>&nbsp;&nbsp;
<input type="radio"></input><label>All Participants</label><br/>
</form>
 </div>
   
)
export default AdvancedSharingOptions