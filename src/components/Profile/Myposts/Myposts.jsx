import React from 'react';
import Post from '../Post/Post';
import s from './Myposts.module.css';


const Myposts = (props) => {

    let PostsData = [
        {id:1 , message: "Hi? how are u?", likesCount: `likes: 11` },
        {id:2 , message: "My first post! It's nice", likesCount: `likes: 12`},
        {id:3 , message: "Today I'm learn method map", likesCount:  `likes: 8` }
    ]

    let PostsElements = PostsData.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount} />);


    return (
        <div classname={s.postBlock}>
            <h2>My posts</h2>
            <div className="addpost">
            <textarea></textarea><br/>
            <button>Add post</button>
            </div>
                {PostsElements}
        </div>
    )
}

export default Myposts;