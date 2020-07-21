import React from 'react';
import './App.css';
import websites from './websites';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			counter: 0,
		};
	}

	previous = () => {
		if (this.state.counter > 0) {
			this.setState((prevState, props) => ({
				counter: prevState.counter - 1,
			}));
		}
	};

	next = () => {
		if (this.state.counter + 1 < websites.length) {
			this.setState((prevState, props) => ({
				counter: prevState.counter + 1,
			}));
		}
	};

	render() {
		const currentSite = websites[this.state.counter];
		return (
			<div className="App">
				<iframe
					title="wbsite-frame"
					src={currentSite}
					id="websiteFrame"
				></iframe>
				<div class="actions">
					<button class="btn" onClick={this.previous}>
						Vorige
					</button>
					<a href={currentSite} target="_blank" rel="noopener noreferrer">
						<h3>Bezoek {currentSite}</h3>
					</a>
					<button class="btn" onClick={this.next}>
						Volgende
					</button>
				</div>
			</div>
		);
	}
}

export default App;
