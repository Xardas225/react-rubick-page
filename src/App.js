import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';


const App = (props) => {
	return (
		// Оборачиваем все в BrowserRouter для маршрутизации приложения 
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Navbar state={props.state.navBar} />
				<div className="app-wrapper-content">
					{/* Route не передает компоненте URL , а только следит за тем,
					 какой URL ей передали и отрисовывает ее в случае совпадения */}
					
					<Route path='/profile' render = { () =>
						 <Profile state={props.state.profilePage}
						  dispatch={props.dispatch} /> } />
					<Route path='/dialogs' render = { () =>
						 <Dialogs state={props.state.dialogsPage} 
						  dispatch={props.dispatch} />} />
					<Route path='/news' component={News} />
					<Route path='/music' component={Music} />
					<Route path='/settings' component={Settings} />
				</div>
			</div>
		</BrowserRouter>
	)
}


// У Route есть 2 значения для передачи компоненты : 
// render и component , render - передает , рендерит функцию; component - передает отдельную компоненту
// Чтобы прокинуть props через App используем render  



export default App;