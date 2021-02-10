import React from "react";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import s from './Dialogs.module.css';
import Message from "./Message/Message";






const Dialogs = (props) => {


    let DialogsData = [
        {id:1, name: "Kunkka"},
        {id:2, name: "Luna"},
        {id:3, name: "Bounty Hunter"},
        {id:4, name: "Axe"},
        {id:5, name: "Dazzle"}
    ]


    let MessagesData = [
        {id:1 , message: "Hi"},
        {id:2 , message: "How are you?"},
        {id:3 , message: "It's cool"}
    ]

    let dialogsElements = DialogsData.map(d => <DialogItem name={d.name} id={d.id} />); 
    let messagesElements = MessagesData.map(m => <Message message={m.message} />);
    
    return (
        <div className={s.dialogs}>
                {dialogsElements}
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}


export default Dialogs;