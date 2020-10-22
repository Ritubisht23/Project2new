import React, { useState, useEffect } from "react";
import '../footer/Footer.css';
import '../footer/Footer.css';
import {  faMicrophone,faMicrophoneSlash,faVideo,faShare,faRecordVinyl,faShieldAlt,faUserFriends,faCommentAlt,
faHeadphones, faPhotoVideo, faUserPlus, faMicrophoneAlt, faVideoSlash,faSortDown,faSave,faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button } from 'semantic-ui-react';
import {Link,useHistory} from 'react-router-dom';
import Popup from 'reactjs-popup';
import io from "socket.io-client";
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import RoomC from './RoomC'

// Globla Varibale definition for Chatting functionality
const ENDPOINT='localhost:8000'
let socket;

  

const Footer=(props)=>{
console.log();
//for video call and screen share


// Use state and use effect for chat functinality
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
   
    //Use below code to fetch user and room from URL
    // const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);
 



console.log(name);
     socket.emit('join', {name:name,room:room }, (error) => {
       if(error) {
         alert(error);  
       }
       
    });
  }, [ENDPOINT]);
  
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
}, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  //*************************************Chatting functionality ends */


 
    const [audioMuted, setAudioMuted] = useState(false)
    const [videoMuted, setVideoMuted] = useState(false)
    return(
     <>
         <RoomC/>


         
         
   </>

  )
}

export default Footer