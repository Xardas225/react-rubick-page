import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';





let dialogData = [
    { id: 1, name: "Sasha" },
    { id: 2, name: "Sveta" },
    { id: 3, name: "Olga" },
    { id: 4, name: "German" },
]


const DialogItem = (props) => {

    let path = "/dialogs/" + props.id

    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}> {props.name} </NavLink>
        </div>
    )
}


let dialogElements = dialogData.map(el => <DialogItem id={el.id} name={el.name} />)


// let dialogElements = [
//     <DialogItem id={dialogData[0].id} name={dialogData[0].name}/>,
//     <DialogItem id={dialogData[1].id} name={dialogData[1].name}/>,
//     <DialogItem id={dialogData[2].id} name={dialogData[2].name}/>,
// ]



let messagesData = [
    {id:1 , message: "Hi"},
    {id:1 , message: "How are you?"},
    {id:1 , message: "Yo"},
]


const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}


let messages = messagesData.map( el => <Message message={el.message} /> ) 


// let messages = [
//     <Message message={messagesData[0].message} />,
//     <Message message={messagesData[1].message} />,
//     <Message message={messagesData[2].message} />,
// ]


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messages}
            </div>
        </div>
    )
}


export default Dialogs;