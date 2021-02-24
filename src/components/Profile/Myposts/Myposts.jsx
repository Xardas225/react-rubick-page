import React from 'react';
import Post from '../Post/Post';
import s from './Myposts.module.css';




const Myposts = (props) => {

    let PostsElements = 
    props.state.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount} />);

    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
    }

    

    return (
        <div classname={s.postBlock}>
            <h2>My posts</h2>
            <div className={s.addPost}>
            <textarea ref={newPostElement}></textarea><br/>
            <button onClick={ addPost } >Add post</button>
            </div>
                {PostsElements}
        </div>
    )
}

export default Myposts;

