import React, { Component } from 'react'
import {  Grid, Image } from 'semantic-ui-react'
 
class Gridnew extends Component { 
 
  render() {
    return(
       
      
      <Grid columns={2} centered padded style={{paddingTop:"150px", paddingLeft:"550px"}}>   
   
        <Image.Group>
         
        <div class="column-one" >
    <a class="item" href="ScheduleMeeting" style={{textDecoration:'none'}}>
  <i class="orange huge video icon"></i><br/>
    New meeting
  </a>
  </div>
 
 
  <div class="column-one" style={{padding:"30px"}}>
    <a class="item" href="ScheduleMeeting" style={{textDecoration:'none'}}>
  <i class="blue huge calendar icon" ></i><br/>
   &nbsp; Schedule
  </a>
  </div>
 
        </ Image.Group >
       
        <Image.Group>
       
    
  <div class="column-one">
    <a class="item" href="joinMeeting" style={{textDecoration:'none'}}>
  <i class="blue huge plus square icon"></i><br/>
    join 
  </a>
  </div>
 
  <div class="column-one" style={{padding:"30px"}}>
    <a class="item" href="sharescreen" style={{textDecoration:'none'}}>
  <i class="blue huge share square icon"></i><br/>
    Share screen
  </a>
  </div>
        </Image.Group>     
        </Grid>   
       
        
   
    );
    
  }
}
 
export default Gridnew;