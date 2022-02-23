import AboutPage from '../components/pages/AboutPage';
import HomePage from '../components/pages/HomePage';
import ProductsPage from '../components/pages/ProductsPage';

export const _routes = [
	{
		component: HomePage,
		path: '/',
		exact: true,
	},
	{
		component: AboutPage,
		path: '/about',
		exact: true,
	},
	{
		component: ProductsPage,
		path: '/products',
		exact: true,
	},
];
