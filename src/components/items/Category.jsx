import React from 'react';

const Category = ({ image, title, description }) => {
	return (
		<div className='category col-sm-4'>
			<div className='card card-block card-text'>
				<img
					alt='should be png'
					className='card-img-top'
					src={require(`../../assets/images/${image}`)}
				/>
				<div className='text_box'>
					<h1 className='title'>{title}</h1>
					<div className='description'>{description}</div>
				</div>
			</div>
		</div>
	);
};

export default Category;
