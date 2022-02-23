import { Route, Switch } from 'react-router-dom';
import { _routes } from './utils/_routes';
import Navigation from './components/items/Navigation'

function App() {
  return (
	  <>
		  <Navigation />
			<Switch>
				{_routes.map((route) => (
					<Route
						key={route.path}
						path={route.path}
						component={route.component}
						exact={route.exact}
					/>
				))}
			</Switch>
		</>
  );
}

export default App;
