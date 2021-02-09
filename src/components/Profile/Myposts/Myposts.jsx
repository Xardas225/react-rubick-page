import React from 'react';
import Post from '../Post/Post';
import s from './Myposts.module.css';


const Myposts = () => {
    return (
        <div classname={s.item}>
            My posts
            <div className="addpost">
            <textarea></textarea><br/>
            <button>Add post</button>
            </div>
            <Post message="Hi? how are u?" />
            <Post message="My second post! It's nice"/>
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default Myposts;