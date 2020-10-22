import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//import PersonalMeetingID from './components/personalmeetingID1/PersonalMeetingID';
//import Footer from './components/footer/Footer';
//import HomePage from './components/home1/HomePage';
//import Settings from './components/settings/Settings';
//import SettingsGeneral from './components/settings/SettingsGeneral';
import AdvancedSharingOptions from './components/AdvancedSharingOptions/AdvancedSharingOptions';
import joinMeeting from './components/joinmeeting/joinMeeting';
import DefaultEmail from './components/inviteothers/DefaultEmail';
import Gmail from './components/inviteothers/Gmail';
import ScheduleMeeting from './components/schedulemeeting/ScheduleMeeting';
import joinAudio from'./components/joinmeeting/joinAudio';
import InviteOthers from './components/inviteothers/InviteOthers';
import Yahoomail from './components/inviteothers/Yahoomail';
import PersonalMeeting from './components/personalmeeting/PersonalMeeting';
import Home from './components/home1/Home';
import ShareScreen from './components/sharescreen/ShareScreen';
import roomWithFooter from './components/sharescreen/roomWithFooter';
import RoomC from './components/sharescreen/RoomC';
import SignInNew from './components/signin/SignInNew';
import SignUpNew from './components/signup/SignUpNew';

import meetingDetails from './components/footer/meetingDetails';
import Footer from './components/footer/Footer';
import Icons from './components/footer/Icons';
import Participants from './components/footer/Participants';
import shareScreenNew from './components/footer/shareScreenNew';
import Chat from './components/footer/Chat';
import HomePage from './components/home/HomePage';
import Gridnew from './components/home/Gridnew';
import Settings from './components/home/Settings';
import SettingsGeneral from './components/home/SettingsGeneral';
import PersonalMeetingID from './components/PersonalMeetingID/PersonalMeetingID';


const App=()=>{
    return(
    <BrowserRouter>
    <div className="container">
        <Switch>   
            <Route exact path="/" component={Home} />         
            <Route exact path="/PersonalMeetingID" component={PersonalMeetingID}/>
            <Route exact path="/Footer" component={Footer}/>            
            {/*<Route exact path="/HomePage" component={HomePage}/>  
            <Route exact path="/Settings" component={Settings} /> 
    <Route exact path="/SettingsGeneral" component={SettingsGeneral}  />  */}
            <Route exact path="/AdvancedSharingOptions" component={AdvancedSharingOptions} />
            <Route exact path="/Footer" component={Footer}  />
            <Route exact path="/meetingDetails" component={meetingDetails}  />
            <Route exact path="/Icons" component={Icons}/>
            <Route exact path="/participants" component={Participants}/>
            <Route exact path="/shareScreenNew" component={shareScreenNew}/>
            <Route exact path="/chat" component={Chat}/>

            
            
            <Route exact path="/joinMeeting" component={joinMeeting} />
            <Route exact path="/Defaultmail" component={DefaultEmail} />
            <Route exact path="/Gmail" component={Gmail} />
            <Route exact path="/ScheduleMeeting" component={ScheduleMeeting} />
            <Route exact path="/joinAudio" component={joinAudio} />
            <Route exact path="/InviteOthers" component={InviteOthers} />
            <Route exact path="/Yahoomail" component={Yahoomail} />
            <Route exact path="/PersonalMeeting" component={PersonalMeeting} />

            <Route exact path="/ShareScreen1" component={ShareScreen} />
            <Route exact path="/ShareScreen" component={RoomC} />
            <Route exact path="/test" component={roomWithFooter} />
            <Route path="/room/:roomID" component={RoomC} />
             <Route exact path="/SignInNew" component={SignInNew} />
             <Route exact path="/SignUpNew" component={SignUpNew} />
             <Route exact path="/HomePage" component={HomePage}/>  
            <Route exact path="/Settings" component={Settings} /> 
            <Route exact path="/SettingsGeneral" component={SettingsGeneral}  /> 
            <Route exact path="/gridnew" component={Gridnew}  /> 
        </Switch>
    </div>
    
    
    </BrowserRouter>
    );
}

export default App


