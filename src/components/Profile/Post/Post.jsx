import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://images6.alphacoders.com/400/400618.jpg"/>
            {props.message}
            <div className="like">
                like {props.likesCount}
            </div>
        </div>       
    )
}

export default Post;