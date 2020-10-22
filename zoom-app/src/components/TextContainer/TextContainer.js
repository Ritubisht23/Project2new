import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer1">
    <p></p>
   <h3><center>People currently Online:</center></h3>
    {
      users
        ? (
          <div>
          
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                  <img alt="Online Icon" src={onlineIcon}/>
                    {name}
                  
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;