import React from 'react'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
import './PersonalMeetingID.css'
import {  faRedo,faPlusSquare, faCopy, faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PersonalMeetingID = () => (
  <Segment placeholder>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
        <Form>
          
                   <a href="#active">
                   <FontAwesomeIcon icon={faRedo} size="2x" ></FontAwesomeIcon>
                    </a>&nbsp;&nbsp;&nbsp;&nbsp;                   

                    <Button className="btn-btn" content='Upcoming' ></Button>
                    <Button className="btn-btn" content='Recorded'></Button>&nbsp;&nbsp;&nbsp;&nbsp;

                   <a href="#active">
                   <FontAwesomeIcon icon={faPlusSquare} size="2x" ></FontAwesomeIcon>
                   </a> <br/> <br/> <br/> 
                
                   <div className="btn-one" verticalAlign='middle'>2307572459<br/>
                    My Personal Meeting ID(PMI) 
                    </div>

        </Form>
      </Grid.Column>

      <Grid.Column className="vl" verticalAlign='middle'>
        <form className="form-new-new">
      <label> <h1>My Personal Meeting ID(PMI)</h1></label><br/>
                   <label>2307572459</label> <br/><br/>

                   <button>Start</button>&nbsp;&nbsp;&nbsp;
                   <button><FontAwesomeIcon icon={faCopy} size="1x"></FontAwesomeIcon>&nbsp;Copy Invitation</button>&nbsp;&nbsp;&nbsp;
                   <button><FontAwesomeIcon icon={faEdit} size="1x"></FontAwesomeIcon>&nbsp;Edit</button><br/><br/>

                   <a href="#active">
                       Hide Meeting Invitation
                   </a>

                   <p>
                       Person A is inviting you to a scheduled Zoom meeting.<br/><br/>

                       Topic: Person A's Personal Meeting Room<br/><br/>

                       Join Meeting Room<br/>
                       http://us04web.zoom.us/j/2307572459<br/><br/>

                       Meeting ID:2307572459<br/><br/>
                       Passcode:8ML4eV

                   </p> 
                   </form>
      </Grid.Column>
    </Grid>

    <Divider vertical></Divider>

     
    
  </Segment>
)

export default PersonalMeetingID