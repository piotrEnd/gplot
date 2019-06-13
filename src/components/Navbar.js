import React, { useState } from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import styles from '../scss/navbar.module.scss';
import links from '../constans/links';

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<ul className={styles.menu}>
				{links.map((item, index) => {
					return (
						<li key={index}>
							<AniLink fade to={item.path}>
								{item.text}
							</AniLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Navbar;
