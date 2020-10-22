import React from 'react';
import {Link } from 'react-router-dom';
import './icons.css';

class Icons extends React.Component{
    render(){
        return(

            <div className="columns">                  
                   <button className="icon1" >
                     <Link to="joinAudio">
                     <i class="red huge headphones icon"></i></Link><br/><br/>
                   <span>Join Audio</span>
                   </button>

                   <button className="icon1">
                     <Link to="ShareScreen">
                     <i class=" red huge window restore outline icon"></i></Link><br/><br/>
                   <span>Share screen</span>
                   </button>

                   <button className="icon1" >
                   <a  href="InviteOthers">
                   <i class=" red huge user plus icon"></i></a><br/><br/>
                   <span>Invite others</span>
                   </button> 
                  
                   <button className="icon1" >
                   <i class="red huge video icon"></i><br/><br/>
                   <span>Start</span>
                   </button> 

          </div>
        );
    }
}

export default Icons;