import React, { Component } from 'react'

export default class Settings extends Component {
 
  render() 
  {
       return (  
        <div class="ui-new" style={{display:"flex", float:"right"}}>
        <div class="right menu">
        <a class="item" href="Settings" style={{textDecoration:"none"}}>
          <i class="black cog icon"></i>
        </a>      
      </div>
      </div>  
    )
  }
}