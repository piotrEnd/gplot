import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { TinyButton as ScrollUpButton } from 'react-scroll-up-button';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Heading from '../components/Heading';
import GalleryImage from '../components/GalleryImage';
import Copyright from '../components/Copyright';

const getImages = graphql`
	query {
		images: allFile(sort: { fields: name }, skip: 1) {
			edges {
				node {
					childImageSharp {
						fluid {
							...GatsbyImageSharpFluid_tracedSVG
						}
					}
					name
					relativePath
				}
			}
		}
	}
`;

const gallery = () => {
	const { images } = useStaticQuery(getImages);

	return (
		<Layout>
			<SEO title="galeria" />
			<Heading heading="galeria" />
			<GalleryImage images={images} />
			<ScrollUpButton
				style={{ backgroundColor: 'transparent', fill: '#7b2b9b', outline: 'none' }}
			/>
			<Copyright />
		</Layout>
	);
};

export default gallery;
