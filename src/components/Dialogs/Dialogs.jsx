import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from './Dialogs.module.css';
import Message from "./Message/Message";



const Dialogs = (props) => {  


    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} /> ); 
    
    let messagesElements = props.state.messages.map(m => <Message message={m.message} /> );  

    let newMessage = React.createRef()

    let addMessage = () => {
        let oneMessage = newMessage.current.value
        alert(oneMessage)
    }

    return (
        <div className={s.dialogs}>
                {dialogsElements}
            <div className={s.messages}>
                {messagesElements}
                <div className={s.newMessage}>
                    <textarea ref={newMessage} name="newMassage"  cols="50" rows="5"></textarea>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    )
}


export default Dialogs;