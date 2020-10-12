import React from 'react';

import '../signin/SignInNew.css';
import Axios from 'axios'
import {Divider} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
 
const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}
 
class SignUpNew extends React.Component {
state={
  mail:'',
  password:'',
  login: false,
  token: null,
  response: '',
  errors: {     
    mail:'',
    password: '',   
   
    }
}
handleChange = (event) => {
  event.preventDefault();
  const { name, value } = event.target;
  let errors = this.state.errors;
 
  switch (name) {
 
    case 'mail':
      errors.mail =
        validEmailRegex.test(value)
          ? ''
          : 'Email is not valid!';
      break;
    case 'password':
      errors.password =
        value.length < 8
          ? 'Password must be 8 characters long!'
          : '';
      break;
     
 
    default:
      break;
  }
 
  this.setState({errors, [name]: value});
}
submitHandler = (event) => {
  event.preventDefault();

  if(validateForm(this.state.errors)){
  const login = {
    mail: this.state.mail,
    password: this.state.password,
   
  }
  if(this.state.mail ==='' ){
this.setState({
  response:"Please enter user name"
 
})
  }else if(this.state.password ===''){
    this.setState({
      response:"Please enter Password"
    })
    
  }else{
  
   Axios.post('http://localhost:5000/users/register', login)
      .then(res =>{
        this.setState({
          token: res.data.token,
          response:res.data.Status
         })
         localStorage.setItem('token', res.data.token);
      }).catch(err =>{
         console.log(err)
     })
     console.log(this.state.response);
        this.setState({
          mail: '',
           password: '',
       })
       
      }
  // Axios.post('http://localhost:5000/users/login', login)
  // .then(res =>{
  //   res.json().then(result =>{
  //     console.log("result token--->",result.token)
  //     localStorage.setItem('login',JSON.stringify({
  //       login: true,
  //       token: result.token
  //     }))
  //   })
   
  // }).catch(err =>{
    
  // })
 
  //   this.setState({
  //     mail: '',
  //     password: '',
  //   })
 
 
 
      }
 
}
  render(){
    const {errors} = this.state; 
    const leftstyle={
      width: '49%',
      float: 'left'
    }
    const rightstyle={
      width: '49%',
      float: 'right'
    }
    
  return (
        <form onSubmit={this.submitHandler}> 
    <div className="App" >
      <div style={leftstyle}>
     
      <h2>Sign Up</h2>
  <h4>{this.state.response}</h4>
      <div><input className="App-text" type='text'  name='mail' value={this.state.mail}  placeholder='Enter your email address' onChange={this.handleChange}/>
      {errors.mail.length > 0 &&
                <span className='error'>{errors.mail}</span>} 
      </div>
      <div><label><input className="App-text" type='password' name='password' value={this.state.password} placeholder='Enter your password' onChange={this.handleChange}/>
      <i className="far fa-eye" id="togglePassword"></i>
      {errors.password.length > 0 &&
                <span className='error'>{errors.password}</span>}
                </label>
      </div>
      <div><Link to="SignInNew">
            <input type='submit' value='Sign Up' className='App-button'/>   
            </Link>  
      </div>
     
      </div>
      
    
      <Divider vertical varticalAlign="middle" style={{borderColor:"whiteSmoke"}}><br/>
    </Divider>
      
     
      
     
    </div>
    </form>
  );
}
}
export default SignUpNew;