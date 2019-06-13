import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { IoMdArrowBack } from 'react-icons/io';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Hero from '../components/hero';
import styles from '../scss/contactdetails.module.scss';

import SEO from '../components/seo';

const getError = graphql`
	query {
		error: file(relativePath: { eq: "8.jpg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
	}
`;

const ErrorPage = () => {
	const { error } = useStaticQuery(getError);

	return (
		<Layout>
			<SEO title="szukasz dalej?" />
			<Hero img={error} title="404" subtitle="niezmiennie ostatni taki rodzynek!" />

			<section className={styles.swingHorizontal} style={{ margin: '2rem auto' }}>
				<Link to="/">
					<IoMdArrowBack size="78" color="#7b2b9b" />
				</Link>
			</section>
		</Layout>
	);
};

export default ErrorPage;
