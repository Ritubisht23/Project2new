import React,{useState} from 'react';
import { Divider, Button } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';

class ScheduleMeeting extends React.Component{
    state = {
      email : '',
      topic:'',
      date:'',
      time:'',
      duration:''
    };
  


    onChangeInput = (e)=>{
        this.setState({email: e.target.value})
    }

    onChangeTopic= (e)=>{
      this.setState({topic: e.target.value})
  }

  onChangeTime= (e)=>{
    this.setState({time: e.target.value})
}

onChangeDate= (e)=>{
  this.setState({date: e.target.value})
}

onChangeDuration= (e)=>{
  this.setState({duration: e.target.value})
}
 
    OnFormSubmit = (e)=>{
        e.preventDefault();
        const obj={
            email:this.state.email,
            topic:this.state.topic,
            date:this.state.date,
            time:this.state.time,
            duration:this.state.duration
        };
        console.log('pawan',obj.email)
        axios.post("http://127.0.0.1:5000/users/sendemail", obj)
        .then((res) => console.log(res.data));
    }
    render(){


 
    return(
        <form class="ui form" style={{marginTop:'1em'}}   onSubmit={this.OnFormSubmit}>
            <h1><b>Schedule Meeting</b></h1>
        <div class="field">
          <label><b>Topic</b></label><br/><br/>
          <input type="text" name="topic" placeholder="Your Meeting Topic" style={{width:"6cm", height:"0.6cm", borderRadius:"4px"}} onChange={this.onChangeTopic} />
          <input type="text" name="Invite Link" placeholder="add participants" style={{width:"6cm", height:"0.6cm", borderRadius:"4px", marginLeft:"2cm"}} onChange={this.onChangeInput} />
        </div>
        <br/>
        
        <div class="inline fields" style={{display:"flex"}}>
    
    <div class="nine wide field">
    <label><b>Start:</b></label>
    <div class="field">   
    <input id="date" type="date" name="appt-date" onChange={this.onChangeDate} ></input>
        
    </div>
    </div>
      <div className="two wide field" style={{marginLeft:'5cm', marginTop:'0.5cm'}}> 
        <input id="time" type="time" name="appt-time" onChange={this.onChangeTime}></input></div>
      
</div><br/>


<div class="inline fields" style={{display:"flex"}} onChange={this.onChangeDuration}>
    <div class="four wide field">
    <label><b>Duration:</b></label>
      <select class="ui fluid dropdown" style={{marginLeft:"3cm", width:"4cm", height:"0.6cm",borderRadius:"4px"}} >
        <option value="">0 hour</option>
    <option value="AL">1 hour</option>
    <option value="AK">2 hours</option>
    <option value="DE">3 hours</option>
    <option value="DC">4 hours</option>
    
      </select>
    </div>

    <div class="four wide field">
    <select class="ui fluid dropdown" style={{marginLeft:"3cm", width:"3cm", height:"0.6cm",borderRadius:"4px"}}>
    <option value="AL">10 minutes</option>
    <option value="AK">15 minutes</option>
    <option value="DE">20 minutes</option>
    <option value="DC">30 minutes</option>
    </select>
    </div>
</div>


<div class="inline fields" style={{display:"flex"}} >
  
  
    <div class="ui checkbox">    
      <input type="checkbox" />
      <label>Recurring Meeting&nbsp;&nbsp;</label>
    </div>
  
  <div class="four wide field" style={{marginLeft:"2cm", marginTop:"0.8cm"}}>
      <label>Time_Zone : &nbsp;&nbsp;</label>
        <select class="ui fluid dropdown" style={{width:"6cm", height:"0.6cm"}}>
            <option value="AL">India</option>
            <option value="AK">USA</option>
            <option value="DE">London</option>
            <option value="DC">Canada</option>
        </select>
    </div>

  </div><br/>

  <Divider horizontal className="horizontal" style={{borderColor:"whiteSmoke"}}><br/>
    </Divider>
    
  <label><b>Meeting ID</b></label>
  <div class="inline fields" style={{display:"flex"}}>
    
    <div class="field">
      <div class="ui radio checkbox">
        <input type="radio" tabindex="0" name="generate_automatically" />
        <label>Generate Automatically</label>
      </div>
    </div>
    <div class="field">
      <div class="ui radio checkbox" style={{marginLeft:"3cm"}}>
        <input type="radio" tabindex="0" name="pmid"/>
        <label>Personal Meeting ID</label>
      </div>
    </div></div><br/>

    <Divider horizontal className="horizontal" style={{borderColor:"whiteSmoke"}}><br/>
    </Divider>


    <label><b>Password</b></label><br/>
    <div class="fields" style={{display:"flex", marginRight:'50em'}}>
     <input type="checkbox" tabindex="0"/>
      <label>&nbsp;Require Meeting Password</label> 
        <input type="text" style={{width:"4cm", marginLeft:"3cm"}} />
        <button data-toggle="tooltip" data-placement="top" title="Please enter the meeting ID password" style={{marginLeft:"0.3cm"}}>
          <FontAwesomeIcon icon={faQuestionCircle} />
          </button>      
     </div><br/> 

  <Divider horizontal className="horizontal" style={{borderColor:"whiteSmoke"}}><br/>
    </Divider>

  <label><b>Video</b></label>
  <div class="inline fields"  style={{display:"flex"}} >
    
    <div class="field">
    <label style={{marginLeft:"0.5cm"}}><b>Host : </b></label>      
        <input type="radio" tabindex="0" name="on"  />
        <label style={{marginLeft:"0.5cm"}}>On</label>    
        <input type="radio" tabindex="0" name="off"/>
        <label style={{marginLeft:"0.5cm"}}>Off</label>
    </div>

    <div class="field">
    <label style={{marginLeft:"1cm"}}><b>Partcipants : </b></label>      
        <input type="radio" ></input>
        <label style={{marginLeft:"0.5cm"}}>On</label>     
        <input type="radio" tabindex="0" />
        <label>Off</label>   
    </div>
  </div>

  <Divider horizontal className="horizontal" style={{borderColor:"whiteSmoke"}}><br/>
    </Divider>

    <label><b>Calendar</b></label>
  <div class="inline fields" style={{display:"flex"}}>   
    
     
        <input type="radio" tabindex="0" name="Outlook" style={{marginLeft:"0.5cm"}}/>
        <label >Outlook</label>
      
        <input type="radio" tabindex="0" name="google_calendar" style={{marginLeft:"1cm"}}/>
        <label >Google Calendar</label>
      
        <input type="radio" style={{marginLeft:"1cm"}}/>
        <label >Other Calendars</label>
     
   
    </div>

<Divider horizontal className="horizontal" style={{borderColor:"whiteSmoke"}}><br/>
    </Divider>

    <label><b>Advanced Options</b></label><br/>
    <div class="grouped fields" >    
     
        <input type="radio" name="fruit" tabindex="0" />
        <label >Enable Waiting Room</label><br/>    
        <input type="radio" name="fruit" tabindex="0" />
        <label style={{marginRight:'20em'}}>Enable join before host</label><br/>    
        <input type="radio" name="fruit" tabindex="0" />
        <label style={{marginRight:'20em'}}>Mute participants upon entry</label><br/>   
        <input type="radio" name="fruit" tabindex="0" class="hidden"/>
        <label style={{marginRight:'20em'}}>Automatically record meeting on the local computer</label>
     
  </div><br/>

    <Button  style={{borderRadius:"4px", marginLeft:"8cm", width:"3cm", height:"0.8cm", backgroundColor:"blue" }} >Schedule</Button>
    <Button  style={{borderRadius:"4px",marginLeft:"1cm",width:"3cm", height:"0.8cm",  backgroundColor:"grey"}}>Cancel</Button>
        </form>
    );
} }


export default ScheduleMeeting;