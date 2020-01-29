import React from 'react';
import './styles.css';

import { hot } from 'react-hot-loader';

const Warning = React.lazy(() => import('./Warning'));

class App extends React.Component {

	state = {
		count: 0
	}

	render () {
		const { count } = this.state;
		return (
			<div>
				<h1>Hello World!!!!</h1>
				<h2>Count: {this.state.count}</h2>
				<button onClick={() => this.setState(s => ({ count: s.count + 1}))}>+</button>
				<button onClick={() => this.setState(s => ({ count: s.count - 1}))}>-</button>
				{count > 10 ? (
					<React.Suspense fallback={null}>
						<Warning />
					</React.Suspense>
				) : null}
			</div>
		)
	}
}

export default hot(module)(App);