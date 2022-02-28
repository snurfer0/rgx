import React from 'react';

const Category = ({ image, title, description }) => {
	return (
		<div className='category col-md-4' >
			<div className='card card-block card-text'>
				<img
					alt='should be png'
					className='card-img-top'
					src={require(`../../assets/images/${image}`)}
				/>
				<div className='category-content'>
					<h4 className='title'>{title}</h4>
					<div className='description'>{description}</div>
				</div>
			</div>
		</div>
	);
};

export default Category;
