import React from 'react';
import $ from 'jquery'
import {categories} from '../../utils/_categories'
import Category from '../items/Category';


const HomePage = () => {


	document.addEventListener('wheel', (event) => {
		event.preventDefault();
		const container = document.querySelector('.main');
		container.scrollLeft += event.deltaY;
	});


	return (
		<div className='container-fluid main'>
			<div className='row flex-nowrap'>
				{categories.map((category, index) => {
					return <Category key={index} {...category} />
				})}
			</div>
		</div>
	);
};

export default HomePage;
