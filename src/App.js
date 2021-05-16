import React, { useEffect } from 'react';
import ImageGrid from './comps/ImageGrid';
import Navbar from './comps/Navbar';
import UploadForm from './comps/UploadForm';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './comps/Login';
// import useSignIn from './hooks/useSignIn';

function App() {
	useEffect(() => {
		// Init Materialise
		M.AutoInit();
	});
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<Switch>
					<Route exact path='/'>
						<UploadForm /> <ImageGrid />
					</Route>
				</Switch>
				<Switch>
					<Route exact path='/login'>
						<Login></Login>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
