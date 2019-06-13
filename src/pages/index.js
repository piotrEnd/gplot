import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/SEO';
import Heading from '../components/Heading';
import Hero from '../components/Hero';
import Contactdetails from '../components/Contactdetails';

const getHero = graphql`
	query {
		hero: file(relativePath: { eq: "0.jpg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
	}
`;

const Contact = () => {
	const { hero } = useStaticQuery(getHero);

	return (
		<Layout>
			<SEO title="kontakt" />
			<Hero img={hero} title="35/17" subtitle="ostatnia taka działka w Poznaniu" />
			<Heading heading="kontakt" />
			<Contactdetails name="Bogusław" />
		</Layout>
	);
};

export default Contact;
