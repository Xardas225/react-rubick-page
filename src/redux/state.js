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
        { id: 1, name: "Axe"},
        { id: 2, name: "Razor"},
        { id: 3, name: "WindRandger"},
        { id: 4, name: "Bounty Hunter"}
      ]
    },
  },
  addMessage() {
    let newMessage = {
      id: 4,
      message: this._state.dialogsPage.newMessageText
    }
  
    this._state.dialogsPage.messages.push(newMessage)
    this._callSubscriber(this._state)
  },
  updateNewMessageText(newMessage) {
    this._state.dialogsPage.newMessageText = newMessage
    this._callSubscriber(this._state)
  },
  addPost() {

    let newPost = {
      id: 3, 
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    }
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = ''
      this._callSubscriber(this._state)
  },
  updateNewPostText(newText) {
    store._state.profilePage.newPostText  = newText
    this._callSubscriber(this._state)
  },
  subscribe(observer) {
    this._callSubscriber = observer
  }
}


window.store = store

export default store;


