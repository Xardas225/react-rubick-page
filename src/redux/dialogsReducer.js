let SEND_MESSAGE = 'SEND-MESSAGE'
let UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
    dialogs: [
        { id: 1, name: "Sasha" },
        { id: 2, name: "Sveta" },
        { id: 3, name: "Olga" },
        { id: 4, name: "German" },
    ],
    messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Yo" },
    ],
    newMessageText: '',
}


const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage
            return state    
        default: 
            return state
    }
}


export const sendMessageCreator = () => ({type: SEND_MESSAGE,})
export const updateNewMessageTextCreator = (text) => {
  return {
      type: UPDATE_NEW_MESSAGE_TEXT,
      newMessage: text,
  }
}


export default dialogsReducer;