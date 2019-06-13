import React from 'react';
import styles from '../scss/contactdetails.module.scss';

const ContactDetails = ({ name, children }) => {
	return (
		<div className={styles.wrapper}>
			{children}
			<h2>{name}</h2>
			<h2 className={styles.swingHorizontal}>
				<a href="tel:+48604062404">604 062 404</a>
			</h2>
		</div>
	);
};

export default ContactDetails;
