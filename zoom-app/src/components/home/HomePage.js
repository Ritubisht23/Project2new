import React, { Component } from 'react'

import Settings from './Settings';
import Gridnew from './Gridnew';

export default class MenuExampleSecondary extends Component {
 
  render() 
  {
   
       return (
        <div>
        <div class="ui large menu">
  <a class="active item">
    <i class="video icon"></i>
    Home
  </a>
  <a href="/joinmeeting" class="item">
  <i class="comment icon"></i>
    Chat
  </a>
  <a class="item">
  <i class="clock icon"></i>
    Meetings
  </a>
  <a class="item">
  <i class="user icon"></i>
    Contacts
  </a>
  <div class="right menu">
   
     <div class="ui transparent item" >
      <input type="text" className="text" placeholder="Search ..." style={{height:"22px"}}/>
     
  </div>
    <a href="/SignInNew" class="item">
      Logout
    </a>
 </div>
</div>
<Settings />
<Gridnew />
</div>
    
       );

  }
}