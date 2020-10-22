import React from 'react'
import { Divider,  Checkbox } from 'semantic-ui-react'
import './Settings.css';

const SettingsGeneral = () => (
  <>
  <p><h4>Settings</h4></p>
    <Divider horizontal className="horizontal"><br/>
    </Divider>
    
    <div>
            <a href="SettingsGeneral" style={{textDecoration:"none"}}>
              <i class="cog icon" ></i>&nbsp;
              <span>General</span></a><br/><br/>

              <i class="video icon" ></i>&nbsp;
              <span>Video</span><br/><br/>

              <i class="headphones icon" ></i>&nbsp;
              <span>Audio</span><br/><br/>

              <i class="share sqaure icon" ></i>&nbsp;
              <span>Share Screen</span><br/><br/>

              <i class="comment icon" ></i>&nbsp;
              <span>Chat</span><br/><br/>

              <i class="filter icon" ></i>&nbsp;
              <span>Background & Filters</span><br/><br/>

              <i class="record icon" ></i>&nbsp;
              <span>Recording   </span><br/><br/>

              <i class="user icon" ></i>&nbsp;
              <span>Profile   </span><br/><br/>

              <i class="chart bar outline icon" ></i>&nbsp;
              <span>Statistics   </span><br/><br/>

              <i class="keyboard icon" ></i>&nbsp;
              <span>Keyboard Shortcuts   </span><br/><br/>

              <i class="user alt icon" ></i>&nbsp;
              <span>Accessibility  </span><br/><br/>
    </div>  
   
    <div className="checkbox-new">
      <Checkbox className="checkbox" label='Start Zoom when I start Windows' ></Checkbox>
      <Checkbox label='WhenÂ closed,Â minimizeÂ windowÂ toÂ theÂ notificationÂ areÂ insteadÂ ofÂ theÂ taskÂ bar' ></Checkbox>
      <Checkbox label='UseÂ dualÂ monitors' ></Checkbox>
      <Checkbox label='EnterÂ fullÂ screenÂ automaticallyÂ whenÂ startingÂ orÂ joiningÂ aÂ meeting' ></Checkbox>
      <Checkbox label='AutomaticallyÂ copyÂ inviteÂ linnkÂ onceÂ theÂ meetingÂ starts' ></Checkbox>
      <Checkbox label='AlwaysÂ showÂ meetingÂ controls' ></Checkbox>
Â Â Â Â Â  <Checkbox label='AlwaysÂ showÂ meetingÂ controls' ></Checkbox>
Â Â Â Â Â Â <Checkbox label='AskÂ meÂ toÂ confirmÂ whenÂ IÂ leaveÂ aÂ meeting'></Checkbox>
Â Â Â Â Â Â <Checkbox label='ShowÂ myÂ connectedÂ time'></Checkbox>
Â Â Â Â Â Â <Checkbox label='RemindÂ meÂ 5Â minutesÂ beforeÂ myÂ upcomingÂ meetings'></Checkbox>
Â Â Â Â Â Â <Checkbox label='StopÂ myÂ videoÂ whenÂ myÂ displayÂ isÂ offÂ orÂ screenÂ saverÂ begins'></Checkbox>
Â Â Â Â Â Â <Checkbox label='integrateÂ ZoomÂ withÂ outlook'></Checkbox>

    </div>
   
  </>
)

export default SettingsGeneral