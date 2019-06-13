import React from 'react';
import styles from '../scss/hero.module.scss';

import BackgroundImage from 'gatsby-background-image';

const Hero = ({ img, title, subtitle }) => {
	return (
		<BackgroundImage className={styles.hero} fluid={img.childImageSharp.fluid}>
			<div className={styles.lead}>
				<h1>{title}</h1>
				<h2>{subtitle}</h2>
			</div>
		</BackgroundImage>
	);
};

export default Hero;
