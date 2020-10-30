import React from 'react';
import Icons from './Icons';
import Footer from './Footer';


const meetingDetails=(props)=>{
    
        return(
        <>    
         <div className="row">
         <label className="label"> meeting topic   </label>
        <label className="label-new"> : {props.location.state.detail.meetingID}</label><br/>
            
            <label className="label"> Host </label>
            <label className="label-new-new">: {props.location.state.detail.username}</label><br/>

            <label className="label"> Password  </label>
            <label className="label-label"> : 2w5sg</label><br/>
            
            <label className="label"> Numeric Password  </label>
            <label className="label-label-new"> : 143213</label><br/>
            <label className="label">(Telephone/Room Systems)</label>
             <br/>
            
            <label className="label"> Invite Link </label>
            <label className="new-label">: http:skdfkj.com</label><br/>
            <a className="label-1" href="#copy url">copy url</a>
            
         </div>
    
        <Icons name={props.location.state.detail.username} meetingID={props.location.state.detail.meetingID}/>
        <Footer name={props.location.state.detail.username} meetingID={props.location.state.detail.meetingID}  />
    </>
        );
        
    }


export default meetingDetails;

