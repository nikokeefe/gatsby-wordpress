/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	/* Your site config here */
	siteMetadata: {
		title: 'Gatsby Bootstrap Wordpress Project',
		description: 'A test project using Gatsby Bootstrap and Wordpress',
		keywords: 'gatsby, gatsbyjs, bootstrap, wordpress',
		image: '/static/sunset-tree.jpg',
		url: 'https://www.myproject.com/',
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `src`,
				path: `${__dirname}/src/`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
		},
		{
			resolve: `gatsby-source-wordpress`,
			options: {
				baseUrl: 'practice.codingsrc.com',
				protocol: 'http',
				hostingWPCOM: false,
			},
		},
		{
			resolve: `gatsby-plugin-react-helmet`,
		},
	],
};
