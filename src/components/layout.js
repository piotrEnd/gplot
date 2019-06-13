import React from 'react';
import Navbar from './Navbar';

import './layout.css';

const Layout = ({ children }) => {
	return (
		<main>
			<Navbar />
			{children}
		</main>
	);
};

export default Layout;
