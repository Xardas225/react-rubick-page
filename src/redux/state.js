import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"

let store = {
  _callSubscriber() {
    console.log('state changed')
  },
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 7 },
        { id: 2, message: "Its nice", likesCount: 5 },
      ],
      newPostText: '',
    },
    dialogsPage: {
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
    },
    navBar: {
      friends: [
        { id: 1, name: "Axe" },
        { id: 2, name: "Razor" },
        { id: 3, name: "WindRandger" },
        { id: 4, name: "Bounty Hunter" }
      ]
    },
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  getState() { return this._state },
  dispatch(action) {

    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.profilePage = profileReducer(this._state.profilePage, action)

    this._callSubscriber(this._state)

    },
}

let ADD_POST = 'ADD-POST'

export const addPostCreator = () => ({type: ADD_POST,})


let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT' 

export const updateNewPostTextCreator = (text) => {
  return {
      type: UPDATE_NEW_POST_TEXT,
      newText: text,
  }
}

let SEND_MESSAGE = 'SEND-MESSAGE' 

export const sendMessageCreator = () => ({type: SEND_MESSAGE,})


let UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

export const updateNewMessageTextCreator = (text) => {
  return {
      type: UPDATE_NEW_MESSAGE_TEXT,
      newMessage: text,
  }
}


window.store = store

export default store;


