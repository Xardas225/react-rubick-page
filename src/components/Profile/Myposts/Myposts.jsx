import React from 'react';
import Post from '../Post/Post';
import s from './Myposts.module.css';




const Myposts = (props) => {



    let PostsElements = 
    props.Posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount} />);


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

