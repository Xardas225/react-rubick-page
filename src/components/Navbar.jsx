import React from 'react';
import classes from './Navbar.module.css';


const Navbar = () => {
    return (
        <nav className={classes.nav}>
				<div className={classes.item}>
					<a href="#" name="Profile" >Profile</a>
				</div>
				<div className={classes.item}>
					<a href="#" name="Messages">Messages</a>
				</div>
				<div className={classes.item}>
					<a href="#" name="News">News</a>
				</div>
				<div className={classes.item}> 
					<a href="#" name="Music">Music</a>
				</div>
			</nav>
    )
}


export default Navbar;