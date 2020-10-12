import React from 'react';



const joinAudio=()=> {
  return (
    <form>
        <div>
            <button type="button" class="btn btn-primary">Join Audio by Computer</button><br/>
            <a href ="/computeraudio" style={{fontSize:'15px'}}>
              Test Computer Audio</a>
        </div>

        <div className="form-group form-check" style={{marginTop:'5em', fontSize:'15px'}}>
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label>Automatically join audio by Computer when joining a meeting </label>
  </div>
  
    </form>
 
  );
}

export default joinAudio;