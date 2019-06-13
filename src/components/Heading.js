import React from 'react';
import styles from '../scss/heading.module.scss';

const Heading = ({ heading }) => {
	return (
		<div className={styles.heading}>
			<h1 className={styles.text}>{heading}</h1>
		</div>
	);
};

export default Heading;
