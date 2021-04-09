import React from 'react';
import Post from '../Post/Post';
import s from './Myposts.module.css';


let postData = [
    {id: 1, message: "Hi, how are you?", likesCount: 7},
    {id: 1, message: "Its nice", likesCount: 5 },
]

let posts = postData.map( el => <Post message={el.message} likesCount={el.likesCount} /> )

const Myposts = () => {
    return (
        <div classname={s.item}>
            My posts
            <div className="addpost">
            <textarea></textarea><br/>
            <button>Add post</button>
            </div>
            {posts}
        </div>
    )
}

export default Myposts;