import React from 'react';
import Popup from 'reactjs-popup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';


class Chat extends React.Component{
    render(){
        return(
            <>
            <Popup trigger={
            <button className="btn btn-danger dropdown-toggle" href="#active">

                <i class="big chat icon"></i><br />
              <DropdownButton alignRight title="Chat" >
                <Dropdown.Item className="dropdown-item" eventKey="option-1"></Dropdown.Item><br /><br />
              </DropdownButton>

            </button>} position="right center">
            <div class="ui right fixed vertical menu" style={{ width: "8.2cm" }}>
              <div class="item">
              <i class="big sort down icon"></i><span>Chat</span>
              </div>

            </div>
          </Popup>
          </>
        )
    }
}


export default Chat;