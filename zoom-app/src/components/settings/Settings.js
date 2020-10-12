import React from 'react'
import { Divider, Table } from 'semantic-ui-react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog,faVideo, faHeadphones, faUser, faShareSquare, faKeyboard, faUserAlt, faChartBar, faRecordVinyl, faFilter, faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import './Settings.js';

const Settings = () => (
  <>
  <p>Settings</p>
    <Divider horizontal className="horizontal"><br/>
    </Divider>
    <Table definition>
        <Table.Body>
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
              </Table.Body>
              </Table>
    <Divider vertical className="vertical-new">     
    </Divider>

    
  </>
)

export default Settings