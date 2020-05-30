import React from 'react';
import { navigate } from 'gatsby';
import Header from '../components/Header';

const Test = () => (
	<div>
		<Header title='Test Page Header' />
		<h1>This is a test</h1>
		<h1>This is a test 2</h1>
		<button onClick={() => navigate('/')}>Push to navigate</button>
	</div>
);

export default Test;
