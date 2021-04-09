import React from 'react';
import Myposts from './Myposts/Myposts';
import classes from './Profile.module.css';




const Profile = () => {
    return (
        <div className={classes.content}> 
        <div>
            ava + description
        </div>
        <Myposts />
		</div>
    )
}


export default Profile;