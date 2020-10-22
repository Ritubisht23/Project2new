import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import {Link} from 'react-router-dom';
import Popup from 'reactjs-popup';



class shareScreenNew extends React.Component{
    render(){
        return(
        <>
        <Popup trigger={<button className="btn btn-danger dropdown-toggle" href="#active">
            <Link to="ShareScreen" style={{ color: "white" }}>
             <i class="big share square icon"></i><br />
              <DropdownButton alignRight title="Share screen" >
                <Dropdown.Item className="dropdown-item" eventKey="option-1">One participant can share at a time</Dropdown.Item>
                <Dropdown.Item className="dropdown-item" eventKey="option-2">Mutiple participants can share simultaneously</Dropdown.Item>
                <Link to="/AdvancedSharingOptions" className="text1" >Advanced sharing options
                    <Dropdown.Item className="dropdown-item" eventKey="option-3" title="Advanced sharing options" />
                </Link> <br /><br />
              </DropdownButton>
            </Link>
          </button>} position="center">
            <div> <div class="ui right fixed vertical menu" style={{ width: "120em" }}>
              <div class="item">
          <span style={{ textAlign: "center", marginLeft: "2.5cm" }}>Participants</span>
              </div>
                </div>
            
            </div>
          </Popup>
        </>
        )
    }
}

export default shareScreenNew;
