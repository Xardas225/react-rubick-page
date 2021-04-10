import React from 'react';
import Post from '../Post/Post';
import s from './Myposts.module.css';


const Myposts = (props) => {

    let posts = props.posts.map( el => <Post message={el.message} likesCount={el.likesCount} /> )

    let newPostElement = React.createRef() 

    let addPost = () => {
        let text = newPostElement.current.value
        alert( text )
    }

    return (
        <div classname={s.item}>
            My posts
            <div className="addpost">
            <textarea ref={ newPostElement }></textarea><br/>
            <button onClick={ addPost }>Add post</button>
            </div>
            {posts}
        </div>
    )
}

export default Myposts;