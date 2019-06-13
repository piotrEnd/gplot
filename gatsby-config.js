module.exports = {
	siteMetadata: {
		title: `działka 35/17 ~ Poznań/Kotowo`,
		description: `Atrakcyjna działka usługowa, komercyjna w Poznaniu na sprzedaż. Pierwszorzędna lokalizacja!`,
		author: `piotrend@gmail.com`,
		siteUrl: `https://www.kot-owo.pl`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-embed-youtube`,
						options: {
							width: 800,
							height: 400
						}
					}
				]
			}
		},
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				host: 'https://www.kot-owo.pl',
				sitemap: 'https://www.kot-owo.pl/sitemap.xml',
				policy: [ { userAgent: '*', allow: '/' } ]
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-sass`,
		`gatsby-plugin-transition-link`,
		`gatsby-plugin-sitemap`
	]
};
