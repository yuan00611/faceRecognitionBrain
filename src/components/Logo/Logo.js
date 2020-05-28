import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
	return(
		<div className='ma4 mt0'>
			<Tilt className='Tilt shadow-2' options={{ max: 55}} style={{ height: 130, width: 130 }} >
				<div className="Tilt-inner">
					<img className="center pa2 pt3" alt='logo' src={brain} style={{ height: 100, width: 100 }} />
				</div>
			</Tilt>
		</div>
	);
}

export default Logo;