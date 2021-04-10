import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from './Dialogs.module.css';
import Message from "./Message/Message";



const Dialogs = (props) => {

    let dialogs = props.state.dialogs.map(el => <DialogItem id={el.id} name={el.name} />)
    let messages = props.state.messages.map( el => <Message message={el.message} /> ) 

    let newMessage = React.createRef()

    let addMessage = () => {
        let text = newMessage.current.value
        alert( text )
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogs}
            </div>
            <div className={s.messages}>
                {messages}
                <textarea ref={ newMessage }></textarea>
                <button onClick={ addMessage }> Add message </button>
            </div>
        </div>
    )
}


export default Dialogs;