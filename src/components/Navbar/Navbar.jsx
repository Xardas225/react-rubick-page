import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';


const Navbar = () => {
    return (
        <nav className={classes.nav}>
				<div className={classes.item}>
					<NavLink to="/profile" name="Profile"  activeClassName={classes.active}>Profile</NavLink>
				</div>
				<div className={classes.item}>
					<NavLink to="/dialogs" name="Messages" activeClassName={classes.active}>Messages</NavLink>
				</div>
				<div className={classes.item}>
					<NavLink to="/news" name="News" activeClassName={classes.active}>News</NavLink>
				</div>
				<div className={classes.item}> 
					<NavLink to="/music" name="Music" activeClassName={classes.active}>Music</NavLink>
				</div>
				<div className={classes.item}> 
					<NavLink to="/settings" name="Music" activeClassName={classes.active}>Settings</NavLink>
				</div>
			</nav>
    )
}


export default Navbar;