import React from 'react';
import {faHeadphones,faPhotoVideo, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';


const Screen5=()=>{
    return(
        <footer>

            <button type="button" class="btn btn-secondary" >Talking :username</button>
            <div className="main__controls">
               <p><b>Meeting Topic:</b> status meeting</p>
               <p><b>Host: </b>abc</p>
               <p><b>Password:</b> 54gfg56</p>
               <p><b>Numeric Password:</b> 676767</p>

               <div className="linkbutton">
              <Link to="/joinAudio"><FontAwesomeIcon icon={faHeadphones} size="8x" color="#f3665f" ></FontAwesomeIcon></Link> 
              <Link to="/sharescreen"><FontAwesomeIcon  style={{marginLeft:'0.7em'}} icon={faPhotoVideo} size="8x" color="#f3665f" ></FontAwesomeIcon></Link> 
              <Link to="/inviteOthers"><FontAwesomeIcon style={{marginLeft:'0.7em'}} icon={faUserPlus} size="8x" color="#f3665f"></FontAwesomeIcon></Link> 
               </div>

            </div>

            <div className="main__controls__block" style={{marginTop:'15em'}}>
                <button className="main__controls__button">
                    <i class="microphone icon"></i>
                    <span>Mute</span>
                </button>

                <button className="main__controls__button">
                        <i class="video icon"></i>
                        <span>Stop Video</span>
                </button>


                <button className="main__controls__button" style={{marginLeft:'10em', width:'3.4em'}}>
                    <i class="shield alternate icon"></i>
                    <span>Security</span>
            </button>
          
                <DropdownButton id="dropdown-basic-button" variant="black" style={{ backgroundColor:'black'}}>
                
                                <Dropdown.Item className="dropdown-item" eventKey="option-1">Lock Meeting</Dropdown.Item>
                                <Dropdown.Item className="dropdown-item" eventKey="option-2">Enable Waiting Room</Dropdown.Item>
                                <Dropdown.Item className="dropdown-item disabled" eventKey="option-3">Allow Participants To:</Dropdown.Item>
                                <div class="dropdown-divider"></div>
                                <Dropdown.Item className="dropdown-item" eventKey="option-4">Share screen</Dropdown.Item>
                                <Dropdown.Item className="dropdown-item" eventKey="option-5">Chat</Dropdown.Item>
                                <Dropdown.Item className="dropdown-item" eventKey="option-5">Rename Themselves</Dropdown.Item>
                </DropdownButton>



                <Link to="/Participants"><button className="main__controls__button">
                        <i class="users icon"></i>
                        <span>Participants</span>
                </button></Link>

                <Link to="/chat"><button className="main__controls__button">
                        <i class="chat icon"></i>
                        <span>Chat</span>
                </button></Link>

                <button className="main__controls__button" style={{color:'green'}}>
                        <i class="share square icon"></i>
                        <span>Share Screen</span>
                </button>

                <button className="main__controls__button">
                        <i class="bullseye icon"></i>
                        <span>Record</span>
                </button>

                <button type="end" className="main__controls__button" style={{fontSize:'15px', color:'whitesmoke',backgroundColor:'red', width:'4em', height:'2.2em', marginLeft:'3em'}}>
                        End
                </button>

            </div>
               
        </footer>
    );
}



export default Screen5;