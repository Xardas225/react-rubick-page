import React from "react";
import { sendMessageCreator, updateNewMessageTextCreator } from "../../redux/dialogsReducer";
import DialogItem from "./DialogItem/DialogItem";
import s from './Dialogs.module.css';
import Message from "./Message/Message";



const Dialogs = (props) => {

    let dialogs = props.state.dialogs.map(el => <DialogItem id={el.id} name={el.name} />)
    let messages = props.state.messages.map(el => <Message message={el.message} />)

    let newMessage = React.createRef()

    let addMessage = () => {
        props.dispatch(sendMessageCreator())
        newMessage.current.value = ''
    }


    let onMessageChange = (event) => {
        let text = event.target.value
        props.dispatch( updateNewMessageTextCreator(text) )
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogs}
            </div>
            <div className={s.messages}>
                {messages}
                <textarea onChange={onMessageChange} ref={newMessage} value={props.newMessageText} />
                <button onClick={addMessage}> Add message </button>
            </div>
        </div>
    )
}


export default Dialogs;