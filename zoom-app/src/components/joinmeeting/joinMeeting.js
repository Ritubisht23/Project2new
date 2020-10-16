import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import {Link} from 'react-router-dom'

class joinMeeting extends Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);

    this.baseState = this.state;
  };
  componentDidMount(){
    console.log(localStorage.getItem('token'))
      if(localStorage.getItem('token')==='undefined' || localStorage.getItem('token') === null){
        console.log('hi pawan')
       this.props.history.push({
         pathname: '/signInNew'
      }) ;
    }
  }
  handleChange(e) {
    var fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }
  submitForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
        var fields = {};
        fields["meetingID"] = "";
        fields["username"] = "";
        this.setState({fields:fields});
        
        this.props.history.push({
          pathname: '/Footer',
          state: { detail: this.state.fields }
        });
    }
  }
  validateForm() {
    var fields = this.state.fields;
    var errors = {};
    var formIsValid = true;
    if (!fields["meetingID"]) {
      formIsValid = false;
      errors["meetingID"] = "invalid";
    }    
    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "Please enter your username";
    }
    this.setState({
      errors: errors
    });
    return formIsValid;

  }

  resetForm = () => {
    this.setState(this.baseState);
  }

  render() {
    
      return ( 
       
       <Router>
         
         <div style={{paddingLeft:"5cm", paddingTop:"2cm"}}>
         <h1 style={{color:'blue',textAlign:'left'}}> Join Meeting</h1><br />
         <form name="myform" method="post" onSubmit={this.submitForm} >
         {/* <div className="ui input"> */}
         <input type="text" name="meetingID" value={this.state.fields.meetingID} onChange={this.handleChange} size="50" style={{width:"10cm", height:"0.7cm", borderRadius:"6px"}} placeholder="Enter meeting ID or Personal Link name" required></input><br /><br />
         <div className="errorMsg">{this.state.errors.meetingID}</div>
         {/* </div> */}

         {/* <div className="ui input"> */}
         <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} size="50" style={{width:"10cm", height:"0.7cm", borderRadius:"6px"}} placeholder="Enter your name" required></input><br /><br />
         <div className="errorMsg">{this.state.errors.username}</div>
         {/* </div> */}

         <div className="ui checkbox">
         <input type="checkbox" />
         <label>Remember my name for future meetings</label><br /><br />
         <input type="checkbox" />
         <label>Do not connect to audio</label><br /><br />
         <input type="checkbox" />
         <label>Turn off my video</label><br />
         </div><br />

{/* <Link to="Footer"> */}
        <button className="ui button" style={{marginLeft:"5cm",width:"2.5cm",height:"0.7cm",backgroundColor:"blue",color:"white"}}>
        Join
        </button>
  {/* </Link> */}
       
        <button className="ui button" onClick={this.resetForm} style={{marginLeft:"0.5cm",width:"2.5cm",height:"0.7cm",color:"Black"}}>
         Cancel
        </button>
        </form>
        </div>
       </Router>

      );
  }
}

export default joinMeeting;