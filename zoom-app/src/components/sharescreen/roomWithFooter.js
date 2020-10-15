import React, { useState, useEffect } from "react";
import '../footer/Footer.css';
import '../footer/Footer.css';
import {  faMicrophone,faMicrophoneSlash,faVideo,faShare,faRecordVinyl,faShieldAlt,faUserFriends,faCommentAlt,
faHeadphones, faPhotoVideo, faUserPlus, faMicrophoneAlt, faVideoSlash,faSortDown,faSave,faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button } from 'semantic-ui-react';
import {Link,useHistory} from 'react-router-dom';
import Popup from 'reactjs-popup';
import io from "socket.io-client";
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import RoomC from './RoomC'

// Globla Varibale definition for Chatting functionality
const ENDPOINT='localhost:8000'
let socket;

  

const Footer=(props)=>{
console.log();
//for video call and screen share


// Use state and use effect for chat functinality
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
   
    //Use below code to fetch user and room from URL
    // const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);
 



console.log(name);
     socket.emit('join', {name:name,room:room }, (error) => {
       if(error) {
         alert(error);  
       }
       
    });
  }, [ENDPOINT]);
  
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
}, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  //*************************************Chatting functionality ends */


 
    const [audioMuted, setAudioMuted] = useState(false)
    const [videoMuted, setVideoMuted] = useState(false)
    return(
     <div className="container">
         <RoomC/>

         
        <footer className="footer is-primary">
                <div className="column has-text-right">
                  <button className="btn btn-danger dropdown-toggle"  href="#active" onClick={()=>setAudioMuted(!audioMuted)}>
                  <FontAwesomeIcon icon={audioMuted ? faMicrophoneAlt : faMicrophoneSlash} size="2x" ></FontAwesomeIcon><br/>
                   {/*<DropdownButton alignRight title="Mute" >                    
                  <Dropdown.Item className="dropdown-item" eventKey="option-1">Headset Microphone</Dropdown.Item>
                  <Dropdown.Item className="dropdown-item" eventKey="option-2">Same as system</Dropdown.Item>
                  <Dropdown.Divider horizontal />
                  <Dropdown.Item className="dropdown-item" eventKey="option-3">Speakers</Dropdown.Item>
                  <Dropdown.Item className="dropdown-item" eventKey="option-5">Headset Earphone</Dropdown.Item>
                  <Dropdown.Item className="dropdown-item" eventKey="option-6">Same as sytem</Dropdown.Item>
                  <Dropdown.Divider horozontal/>              
                  <Dropdown.Item className="dropdown-item" eventKey="option-7">Test Speaker & Microphone</Dropdown.Item>
                  <Dropdown.Item className="dropdown-item" eventKey="option-8">Leave Computer Audio </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item" eventKey="option-9">Audio Settings... </Dropdown.Item> <br/><br/>
                  </DropdownButton>                   */}
                   </button>
                   

                   <button className="btn btn-danger dropdown-toggle" href="#active" onClick={()=>setVideoMuted(!videoMuted)}>
                   <FontAwesomeIcon icon={videoMuted ?faVideo : faVideoSlash} size="2x" ></FontAwesomeIcon><br/>
                   {/* <DropdownButton alignRight title="Start Video" > 
                   <Dropdown.Item className="dropdown-item" eventKey="option-1"></Dropdown.Item><br/><br/>
                   </DropdownButton> */}
                   </button>

                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    
                    
                    <button className="btn btn-danger dropdown-toggle" href="#active" >
                   <FontAwesomeIcon icon={faShieldAlt} size="2x" ></FontAwesomeIcon><br/>
                   <DropdownButton alignRight title="Security" id="dropdown-menu-align-right" >                    
                  <Dropdown.Item className="dropdown-item" eventKey="option-1">Lock Meeting</Dropdown.Item>
                  <Dropdown.Item className="dropdown-item" eventKey="option-2">Enable Waiting Room</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item className="dropdown-item" eventKey="option-3">Share Screen</Dropdown.Item>
                  <Dropdown.Item className="dropdown-item" eventKey="option-4">Chat</Dropdown.Item>
                  <Dropdown.Item className="dropdown-item" eventKey="option-5">Rename Themselves</Dropdown.Item>
                  <Dropdown.Item className="dropdown-item" eventKey="option-6">Unmute Themselves</Dropdown.Item>
                  <Dropdown.Item className="dropdown-item" eventKey="option-7">Remove Participants</Dropdown.Item>
                  <Dropdown.Item className="dropdown-item" eventKey="option-8">Report </Dropdown.Item>
                  <br/><br/>
                  </DropdownButton>
                  </button>

                  <Popup trigger={<button className="btn btn-danger dropdown-toggle" href="#active">
                    
                   <FontAwesomeIcon icon={faUserFriends} size="2x" ></FontAwesomeIcon><br/>                   
                   <DropdownButton alignRight title="Participants" > 
                   <Link to="/InviteOthers" className="text1" >
                    <Dropdown.Item className="dropdown-item" eventKey="option-3"  />Invite Others
                   </Link>
                    <br/><br/>
                   </DropdownButton>
                  
                   </button>} position="right center">
            <div> <div class="ui right fixed vertical menu" style={{ width: "8.2cm" }}>
              <div class="item">
                <FontAwesomeIcon icon={faSortDown} /><span style={{ textAlign: "center", marginLeft: "2.5cm" }}>Participants</span>
              </div>

              <div style={{ marginTop: '40em' }}>
                <button type="settings-1" class="btn btn-secondary" style={{ borderRadius: "5px", marginLeft: "0.5cm", marginRight: "0.4cm", width: "2cm", height: "1cm" }}>Invite</button>
                <button type="settings-1" class="btn btn-secondary" style={{ borderRadius: "5px", marginRight: "0.4cm", width: "2cm", height: "1cm" }}>MuteAll</button>

                <button style={{ borderRadius: "5px", width: "1cm", height: "1cm" }}>
                  <FontAwesomeIcon icon={faEllipsisH} ></FontAwesomeIcon>
                </button>


              </div>
            </div>
            </div>
          </Popup>



 {/* Chatting compponent Starts*/}

          <Popup trigger={
            <button className="btn btn-danger dropdown-toggle" href="#active">

              <FontAwesomeIcon icon={faCommentAlt} size="2x" ></FontAwesomeIcon><br />
              <DropdownButton alignRight title="Chat" >
                <Dropdown.Item className="dropdown-item" eventKey="option-1"></Dropdown.Item><br /><br />
              </DropdownButton>

            </button>} position="right center">
            <div class="ui right fixed vertical menu" style={{ width: "8.2cm" }}>
              <div class="item">
                <FontAwesomeIcon icon={faSortDown} /><span style={{ textAlign: "center", marginLeft: "2.5cm" }}>Chat</span>
              </div>

                <div className="outerContainer">
                  <div className="containerChat">
                    <Messages messages={messages} name={name} />
                    <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
                  </div>
                </div>

            </div>
          </Popup>
 {/* Chatting compponent  Ends */}



          <button className="btn btn-danger dropdown-toggle" href="#active">
            <Link to="ShareScreen" style={{ color: "white" }}>
              <FontAwesomeIcon icon={faShare} size="2x" ></FontAwesomeIcon><br />
              <DropdownButton alignRight title="Share screen" >
                <Dropdown.Item className="dropdown-item" eventKey="option-1">One participant can share at a time</Dropdown.Item>
                <Dropdown.Item className="dropdown-item" eventKey="option-2">Mutiple participants can share simultaneously</Dropdown.Item>
                <Link to="/AdvancedSharingOptions" className="text1" >Advanced sharing options
                    <Dropdown.Item className="dropdown-item" eventKey="option-3" title="Advanced sharing options" />
                </Link> <br /><br />
              </DropdownButton>
            </Link>
          </button>


          <button className="btn btn-danger dropdown-toggle">
            <FontAwesomeIcon icon={faRecordVinyl} size="2x"></FontAwesomeIcon>
            <DropdownButton alignRight title="Record">
              <Dropdown.Item className="dropdown-item" eventKey="option-1">Start</Dropdown.Item>
              <Dropdown.Item className="dropdown-item" eventKey="option-2">Stop</Dropdown.Item>
              <Dropdown.Item className="dropdown-item" eventKey="option-3">Pause</Dropdown.Item><br /><br />
            </DropdownButton>
          </button>

                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                   <Button className="btn-end" title="End" >
            &nbsp;&nbsp; End &nbsp;&nbsp;
                   </Button>

        </div>
      </footer>
    </div>

  )
}

export default Footer