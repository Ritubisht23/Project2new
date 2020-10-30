import React from 'react';
import {Link } from 'react-router-dom';
import './icons.css';

class Icons extends React.Component{
    render(){
      console.log('this is pawan',this.props.name)
        return(

            <div className="columns">                  
                   <button className="icon1" >
                     <Link to="joinAudio">
                     <i class="red huge headphones icon"></i></Link><br/><br/>
                   <span>Join Audio</span>
                   </button>

                   <button className="icon1">
                     <Link to="Video">
                     <i class=" red huge window restore outline icon"></i></Link><br/><br/>
                   <span>Share screen</span>
                   </button>

                   <button className="icon1" >
                   <a  href="InviteOthers">
                   <i class=" red huge user plus icon"></i></a><br/><br/>
                   <span>Invite others</span>
                   </button> 
                  
                   <button className="icon1" >
                     <Link to={{
                       pathname:'/Video',
                       videoProps :{
                          name: this.props.name,
                          meetingID:this.props.meetingID
                       }
                     }}>
                   <i class="red huge video icon"></i> </Link><br/><br/>
                   <span>Start</span>
                   </button> 

          </div>
        );
    }
}

export default Icons;