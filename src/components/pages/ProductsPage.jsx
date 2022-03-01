import _ from 'lodash';
import React, {useEffect, useState} from 'react';
import {products} from "../../utils/_productsData"
import Product from '../items/Product';

const ProductsPage = () => {

	return (
		<>
			<div className='parallax'></div>
			<div className='content'>
				<h1>Punny headline</h1>
				<p>
					And an even wittier subheading to boot. Jumpstart your
					marketing efforts with this example based on Apple’s
					marketing pages.
				</p>
			</div>

			{_.chunk(products, 2).map(chunk => {
				console.log(chunk)
				console.log(products)
				return (
					<div className='products-wrapper row'>
						{chunk.map(product => {
							return <Product {...product} />
						})}
					</div>
				)
			})}

		</>
	);
};

export default ProductsPage;
