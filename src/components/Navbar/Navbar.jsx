import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
import FriendsItem from './friends/FriendsItem';


const Navbar = (props) => {
	// let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} /> ); 
	
	let friendsElements= props.state.friends.map(f => <FriendsItem name={f.name} /> ) 

	
    return (
        <nav className={s.nav}>
				<div className={s.item}>
					<NavLink to="/profile" name="Profile"  activeClassName={s.active}>Profile</NavLink>
				</div>
				<div className={s.item}>
					<NavLink to="/dialogs" name="Messages" activeClassName={s.active}>Messages</NavLink>
				</div>
				<div className={s.item}>
					<NavLink to="/news" name="News" activeClassName={s.active}>News</NavLink>
				</div>
				<div className={s.item}> 
					<NavLink to="/music" name="Music" activeClassName={s.active}>Music</NavLink>
				</div>
				<div className={s.item}> 
					<NavLink to="/settings" name="Music" activeClassName={s.active}>Settings</NavLink>
				</div>
				<div className={s.friends}>
					<NavLink to="/friends">Friends:</NavLink> 
					{friendsElements}
				</div>
			</nav>
    )
}


export default Navbar;