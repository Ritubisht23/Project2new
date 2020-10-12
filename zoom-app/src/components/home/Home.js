import React from 'react';
import {Link} from 'react-router-dom';



const Home=()=> {
  return (
    <form>
        <div>
            <Link to="/joinmeeting"><button type="button" class="btn btn-primary"style={{borderRadius:"4px", width:'15em',height:"1cm", marginTop:'19em',marginLeft:'52em'}}>Join a Meeting</button><br/></Link><br/>
            <Link to="/SignInNew"><button type="button" class="btn btn-secondary" style={{borderRadius:"4px",width:'15em',height:"1cm", marginLeft:'52em', backgroundColor:'grey'}}>Sign In</button></Link>
        </div>
  
    </form>
 
  );
}

export default Home;