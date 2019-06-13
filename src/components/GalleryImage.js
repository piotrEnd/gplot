import React from 'react';
import Image from 'gatsby-image';
import styles from '../scss/galleryimage.module.scss';

const GalleryImage = ({ images }) => {
	return (
		<div className={styles.wrapper}>
			{images.edges.map(({ node }) => {
				return (
					<div className={styles.wrap}>
						<Image fluid={node.childImageSharp.fluid} className={styles.image} />
					</div>
				);
			})}
		</div>
	);
};

export default GalleryImage;
