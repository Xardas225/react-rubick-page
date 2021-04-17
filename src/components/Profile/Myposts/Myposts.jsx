import React from 'react';
import Post from '../Post/Post';
import s from './Myposts.module.css';


const Myposts = (props) => {


    // Мапим массив данных с постами и создаём новый массив, который отображается как отдельные компоненты
    // ( создается столько раз, сколько элементов в родительском массиве ). Лежит в props.
    let posts = props.posts.map( el => <Post message={el.message} likesCount={el.likesCount} /> )
    
    // Создаём реф 
    let newPostElement = React.createRef() 


    // Функция кнопки onClick
    let addPost = () => {
        // Функция добавления поста на стену ( лежит в state ) 
        props.addPost()
    }   
    
    // Зануление textarea  
    // newPostElement.current.value = ''


    // Функция textarea к onChange( по завершении изменения элементов )
    // FLUX-концепция( круговорот элементов, при  изменении каждый элемент приходит из state )
    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }


    
    return (
        <div classname={s.item}>
            My posts
            <div className="addpost">
            <textarea onChange={ onPostChange } ref={ newPostElement } value={ props.newPostText } /><br/>
            <button onClick={ addPost }>Add post</button>
            </div>
            {posts}
        </div>
    )
}

export default Myposts;