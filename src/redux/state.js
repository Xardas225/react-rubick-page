import {rerenderEntireTree} from '../render';



let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi? how are u?", likesCount: `likes: 11` },
      { id: 2, message: "My first post! It's nice", likesCount: `likes: 12` },
      { id: 3, message: "Today I'm learn method map", likesCount: `likes: 8` }
    ]
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: "Kunkka" },
      { id: 2, name: "Luna" },
      { id: 3, name: "Bounty Hunter" },
      { id: 4, name: "Axe" },
      { id: 5, name: "Dazzle" }
    ],
    messages: [
      { message: "Hi" },
      { message: "How are you?" },
      { message: "It's cool" }
    ]
  }, 
  navbarPage: {
    friends: [
      {name: "Axe", },
      {name: "Razor"},
      {name: "Zeus"}
    ]
  }
}



export let addPost = (postMessage) => {
  let newPost = {
  id: 5, 
  message: postMessage,
  likesCount: 0
  }

  state.profilePage.posts.push(newPost)
  rerenderEntireTree(state)
}


export default state;