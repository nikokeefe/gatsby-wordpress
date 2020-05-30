import React from 'react';
import { graphql } from 'gatsby';

import PrimaryLayout from '../layouts/PrimaryLayout';
import Post from '../components/Post';

export default ({ data }) => {
	return (
		<PrimaryLayout column='col-xs-6'>
			{data.allWordpressPost.nodes.map(post => (
				<Post
					alt={post.featured_media.slug}
					key={post.id}
					title={post.title}
					image={post.featured_media.source_url}
					excerpt={post.excerpt}
					readMore={post.slug}
				/>
			))}
		</PrimaryLayout>
	);
};

export const query = graphql`
	{
		allWordpressPost {
			nodes {
				slug
				title
				excerpt
				featured_media {
					source_url
					slug
				}
			}
		}
	}
`;
