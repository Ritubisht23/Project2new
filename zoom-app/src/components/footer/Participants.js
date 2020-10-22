import React from 'react';
import Popup from 'reactjs-popup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

import {Link} from 'react-router-dom';

class Participants extends React.Component{
    render(){
        return(
            <>
            <Popup trigger={<button className="btn btn-danger dropdown-toggle" href="#active">
                    
                 <i class=" big users icon"></i><br/>                   
                   <DropdownButton alignRight title="Participants" > 
                   <Link to="/InviteOthers" className="text1" >
                    <Dropdown.Item className="dropdown-item" eventKey="option-3"  />Invite Others
                   </Link>
                    <br/><br/>
                   </DropdownButton>
                  
                   </button>} position="right center">
            <div> <div class="ui right fixed vertical menu" style={{ width: "8.2cm" }}>
              <div class="item">
              <i class="big sort down icon"></i><span style={{ textAlign: "center", marginLeft: "2.5cm" }}>Participants</span>
              </div>
                </div>
            
            </div>
          </Popup>
          </>
        )
    }
}


export default Participants;