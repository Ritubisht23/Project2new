import React from 'react'
import { Divider,  Checkbox, Grid } from 'semantic-ui-react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog,faVideo, faHeadphones, faUser, faShareSquare, faKeyboard, faUserAlt, faChartBar, faRecordVinyl, faFilter, faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import './Settings.css';

const SettingsGeneral = () => (
  <>
  <p><h4>Settings</h4></p>
    <Divider horizontal className="horizontal"><br/>
    </Divider>
    <Grid.Column>
    <form className="checkbox-one-one">
            <a href="SettingsGeneral">
              <FontAwesomeIcon icon={faCog} />&nbsp;
              <span>General</span></a><br/><br/>

              <FontAwesomeIcon icon={faVideo} />&nbsp;
              <span>Video</span><br/><br/>

              <FontAwesomeIcon icon={faHeadphones} />&nbsp;
              <span>Audio</span><br/><br/>

              <FontAwesomeIcon icon={faShareSquare} />&nbsp;
              <span>Share Screen</span><br/><br/>

              <FontAwesomeIcon icon={faCommentAlt} />&nbsp;
              <span>Chat</span><br/><br/>

              <FontAwesomeIcon icon={faFilter} />&nbsp;
              <span>Background & Filters</span><br/><br/>

              <FontAwesomeIcon icon={faRecordVinyl} />&nbsp;
              <span>Recording   </span><br/><br/>

              <FontAwesomeIcon icon={faUser} />&nbsp;
              <span>Profile   </span><br/><br/>

              <FontAwesomeIcon icon={faChartBar} />&nbsp;
              <span>Statistics   </span><br/><br/>

              <FontAwesomeIcon icon={faKeyboard} />&nbsp;
              <span>Keyboard Shortcuts   </span><br/><br/>

              <FontAwesomeIcon icon={faUserAlt} />&nbsp;
              <span>Accessibility  </span><br/><br/>
              </form>
      </Grid.Column>
    
    <Grid.Column>
    <form className="checkbox-new">
      <Checkbox className="checkbox" label='Start Zoom when I start Windows' ></Checkbox>
      <Checkbox className="checkbox" label='When closed, minimize window to the notification are instead of the task bar' ></Checkbox>
      <Checkbox className="checkbox" label='Use dual monitors' ></Checkbox>
      <Checkbox className="checkbox" label='Enter full screen automatically when starting or joining a meeting' ></Checkbox>
      <Checkbox className="checkbox" label='Automatically copy invite linnk once the meeting starts' ></Checkbox>
      <Checkbox className="checkbox" label='Always show meeting controls' ></Checkbox>
      <Checkbox className="checkbox" label='Always show meeting controls' ></Checkbox>
      <Checkbox className="checkbox" label='Ask me to confirm when I leave a meeting'></Checkbox>
      <Checkbox className="checkbox" label='Show my connected time'></Checkbox>
      <Checkbox className="checkbox" label='Remind me 5 minutes before my upcoming meetings'></Checkbox>
      <Checkbox className="checkbox" label='Stop my video when my display is off or screen saver begins'></Checkbox>
      <Checkbox className="checkbox" label='integrate Zoom with outlook'></Checkbox>

    </form>
    </Grid.Column>
    <Divider vertical className="vertical-new">     
    </Divider>
  </>
)

export default SettingsGeneral