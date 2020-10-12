import React, { Component } from 'react'
import { Input, Menu, Checkbox } from 'semantic-ui-react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faClock, faCommentAlt, faCog, faUserCircle} from '@fortawesome/free-solid-svg-icons';
import '../../App.css';
import { Grid,  Image } from 'semantic-ui-react'
import { faVideo, faArrowAltCircleUp, faCalendar, faPlusSquare, } from '@fortawesome/free-solid-svg-icons'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import {Link} from 'react-router-dom';

export default class MenuExampleSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() 
  {
    const { activeItem } = this.state
       return (       

        <div className="div-settings">                 

      <Menu className="nav-bar">        
        
        <Menu.Item name='Home' active={activeItem === 'home'} onClick={this.handleItemClick}> 
              <div>
              <FontAwesomeIcon icon={faHome} />&nbsp;
              <span>Home</span>
              </div>
        </Menu.Item>

        <Menu.Item name='Chat' active={activeItem === 'chat'} onClick={this.handleItemClick}> 
              <div>
              <Link to="Chat" style={{textDecoration:"none"}}>
              <FontAwesomeIcon icon={faCommentAlt} />&nbsp;
              <span>Chat</span>
              </Link>
              </div>
        </Menu.Item>        

        <Menu.Item name='Meetings' active={activeItem === 'messages'} onClick={this.handleItemClick}>
               <div>
                 <Link to="Footer" style={{textDecoration:"none"}}>
              <FontAwesomeIcon icon={faClock} />&nbsp;
              <span>Meetings</span>
              </Link>
              </div>
        </Menu.Item>

        <Menu.Item name='Contacts' active={activeItem === 'contacts'} onClick={this.handleItemClick}>
               <div>
              <FontAwesomeIcon icon={faUserCircle} />&nbsp;
              <span>Contacts</span>
              </div>
        </Menu.Item>
        
        <Menu.Menu position='right'>
          <Menu.Item>
               <Input  placeholder='Search.....' ></Input>          
          </Menu.Item>
          <Menu.Item  name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} >
          <DropdownButton className="logout-btn" title="Logout" > <br/>                   
              <Dropdown.Item className="dropdown-item">

                <Link to="Settings" className="list">
                 <FontAwesomeIcon icon={faCog} />  Settings  
                 </Link>
                 
              </Dropdown.Item>                
              <Dropdown.Item className="dropdown-item" eventKey="option-2">Available</Dropdown.Item>
              <Dropdown.Item className="dropdown-item" eventKey="option-3">Away</Dropdown.Item>
              <Dropdown.Item className="dropdown-item" eventKey="option-4">Do not Disturb</Dropdown.Item>
              <Dropdown.Item className="dropdown-item" eventKey="option-4">My Profile</Dropdown.Item>
              <Dropdown.Item className="dropdown-item" eventKey="option-4">Try Top Features</Dropdown.Item>
              <Dropdown.Item className="dropdown-item" eventKey="option-4">Help</Dropdown.Item>
              <Dropdown.Item className="dropdown-item" eventKey="option-4">Check for Updates </Dropdown.Item>
              <Dropdown.Item className="dropdown-item" eventKey="option-4">Switch tp Portrait view </Dropdown.Item>
              <Link to="/SignUp" className="dropdown-item">Log Out
              <Dropdown.Item title="Log Out"> </Dropdown.Item>
              </Link>
          </DropdownButton>
          </Menu.Item>
        </Menu.Menu>      
      </Menu>

      <div className="btn-settings">
          <a href="Settings">
          <FontAwesomeIcon icon={faCog} size="1x" title="settings" />
          </a>
      </div>


    <div className="grid">
    <Grid centered columns={3}>
    <div>        

    <Image.Group className="group1">
                    <button className="primary">
                    <a classname="icon" href="PersonalMeetingID">
                    <FontAwesomeIcon icon={faVideo} size="4x" ></FontAwesomeIcon></a><br/><br/>
                    <DropdownButton alignRight title="New Meeting" >                    
                   <Dropdown.Item className="dropdown-item" eventKey="option-1">
                   <Checkbox className="checkbox" alignRight label='Start with Video'></Checkbox>
                   </Dropdown.Item>
                   <Dropdown.Item className="dropdown-item" eventKey="option-2">&nbsp;&nbsp;&nbsp;&nbsp;
                   <Link to="/PersonalMeeting" style={{color:"white", textDecoration:"none", backgroundColor:"blue"}}>PMI settings</Link></Dropdown.Item><br/><br/>
                  </DropdownButton>                                 
                    </button>

                    <button className="primary">
                   <a classname="icon" href="joinMeeting">
                   <FontAwesomeIcon icon={faPlusSquare} size="4x" ></FontAwesomeIcon>                   
                    </a><br/><br/> <span>Join</span>                                   
                    </button>
    </ Image.Group >
    
    <Image.Group className="group2"> 
                    <button className="primary">
                    <a classname="icon" href="ScheduleMeeting">
                   <FontAwesomeIcon icon={faCalendar} size="4x" ></FontAwesomeIcon><br/>                   
                    </a><br/> <span>Schedule</span>                 
                    </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                   <button className="primary">
                   <a classname="icon" href="ShareScreen">
                   <FontAwesomeIcon icon={faArrowAltCircleUp} size="4x" ></FontAwesomeIcon><br/>                   
                    </a><br/> <span>Share screen</span>                 
                    </button>
    </Image.Group>     
    </div>
    </Grid>
    </div>

    
    </div>

    )

  }
}
