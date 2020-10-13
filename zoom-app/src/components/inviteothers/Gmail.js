import React from 'react';


import axios from 'axios';


class Gmail extends React.Component{

state = {email : ''};

    
onChangeInput= (e)=>{​​​​​
this.setState({​​​​​email: e.target.value}​​​​​);
    }​​​​​



    OnFormSubmit=(e)=>{
    e.preventDefault();
    
    const obj={
        email:this.state.email
    };

    console.log(this.state.email);


    axios.post("http://10.34.190.242:5000/users/sendemail", obj)
    .then((res) => console.log(res.data));

    this.setState({
        email:"",
    });

}


render(){

    return(
        <form class="ui form" style={{marginTop:'5em', width:'40%', marginLeft:'38em'  }} onSubmit={this.OnFormSubmit}>
            <h1><b>Gmail Invite</b></h1>

            <div>
               <input type="text" name="Sharing Details" placeholder="Enter your Gmail ID" style={{borderColor:"black", borderRadius:"5px",width:"300px", height:"30px" }} onChange={this.onChangeInput} />

               
              </div><br/><br/>

                
              <button class="ui grey basic button right floated" 
              style={{borderColor:"black", marginLeft:"3cm", borderRadius:"5px", width:"2cm", height:"1cm"}} >Send
              
              </button>
        </form>
    );

}
}

export default Gmail;