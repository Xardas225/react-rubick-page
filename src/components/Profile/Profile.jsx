import React from 'react';
import Myposts from './Myposts/Myposts';
import s from './Profile.module.css';




const Profile = (props) => {
    return (
        <div className={s.content}> 
        <div className={s.avatar} >
             <img src="https://i.pinimg.com/originals/4f/ce/37/4fce3781eb2e68badf5a40f50eeceb41.jpg" alt=""/>
             Name: Rubick
             Age: many years
        </div>
        <Myposts posts={props.state.posts} />
		</div>
    )
}


export default Profile;