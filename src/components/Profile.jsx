import React from 'react';
import classes from './Profile.module.css';



const Profile = () => {
    return (
        <div className={classes.content}> 
        <div>
            ava + description
        </div>
        <div>
            My posts
            <div>
                New post
            </div>
        </div>
		</div>
    )
}


export default Profile;