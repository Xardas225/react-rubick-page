import { rerenderEntireTree } from './../render'


let state = {
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
      { id: 1, message: "How are you?" },
      { id: 1, message: "Yo" },
    ],
  },
  navBar: {
    friends: [
      { id: 1, name: "Axe"},
      { id: 2, name: "Razor"},
      { id: 3, name: "WindRandger"},
      { id: 4, name: "Bounty Hunter"}
    ]
  },
}


// Функция добавления нового поста. Данные добавляются при клике кнопки в Myposts в конец массива ,
//  рендерится заново все дерево
export let addPost = () => {

  let newPost = {
    id: 3, 
    message: state.profilePage.newPostText,
    likesCount: 0,
  }

  state.profilePage.posts.push(newPost)
  rerenderEntireTree(state)
}

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText  = newText
  rerenderEntireTree(state)
}


export default state;


