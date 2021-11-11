import React, { useEffect, useState } from 'react';
import "./SidebarChat.css";
import { Avatar } from '@material-ui/core';
import db from './firebase';
import {Link} from 'react-router-dom';


function SidebarChat({ id, name , addNewChat }) {
 const [seed, setSeed] =  useState('');
 



    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])
    
   
const CreateChat = () => {
    const roomName = prompt("Please enter the room name");

    if (roomName) {
        db.collection('rooms').add({
            name: roomName
        });
    }
};

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>

<div className="sidebarChat">
            <Avatar className="avt" src={`https://avatars.dicebear.com/api/male/${seed}.svg`}/>

            <div className="sidebarChat__info">
                <h2>{name}</h2>
                <p> {name} Message Room</p>

            </div>
        </div>


        </Link>

        
    ):

    (
            <div onClick={CreateChat}
            className= "sidebarChat">

              <h2 >Crete New Chat Room </h2>
            </div>

    );




}

export default SidebarChat
