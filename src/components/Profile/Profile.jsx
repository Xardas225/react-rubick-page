import React from 'react';
import Myposts from './Myposts/Myposts';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';





const Profile = (props) => {

    
    return (
        <div className={classes.content}> 
        <ProfileInfo />
        <Myposts state={props.state.posts} />
		</div>
    )
}


export default Profile;