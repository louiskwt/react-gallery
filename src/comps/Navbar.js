import React from 'react';
import { Link } from 'react-router-dom';

const Title = () => {
	return (
		<nav>
			<div className='nav-wrapper'>
				<a href='#!' class='brand-logo'>
					Firegram
				</a>
				<ul id='nav-mobile' className='right hide-on-med-and-down'>
					<Link to='/login'>Log In</Link>
				</ul>
			</div>
		</nav>
	);
};

export default Title;
