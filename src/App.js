import React from 'react';
import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			counter: 0,
			websites: [],
		};
		this.FILE_KEY = 'file.json';
		this.COUNTER = 'counter';
	}

	componentDidMount() {
		const storedFile = JSON.parse(localStorage.getItem(this.FILE_KEY));
		if (!storedFile || !storedFile.websites) return;
		this.setState({ websites: storedFile.websites });

		if (localStorage.getItem('counter')) {
			this.setState({ counter: localStorage.getItem(this.COUNTER) });
		}
	}

	previous = () => {
		if (this.state.counter > 0) {
			this.setState(
				(prevState, props) => ({
					counter: prevState.counter - 1,
				}),
				this.updateLocalStorageCounter
			);
		}
	};

	next = () => {
		if (this.state.counter + 1 < this.state.websites.length) {
			this.setState(
				(prevState, props) => ({
					counter: prevState.counter + 1,
				}),
				this.updateLocalStorageCounter
			);
		}
	};

	updateLocalStorageCounter = () => {
		window.localStorage.setItem(this.COUNTER, this.state.counter);
	};

	handleUpload = (e) => {
		const reader = new FileReader();
		reader.onload = this.handleFileRead;

		const file = e.target.files[0];
		reader.readAsText(file);
	};

	handleFileRead = (e) => {
		const save = JSON.parse(e.target.result);
		if (!save || !save.websites) {
			alert('Whoeps, er lijkt iets mis met de json file.');
			return false;
		}

		window.localStorage.setItem(this.FILE_KEY, JSON.stringify(save));
		const { websites } = save;
		this.setState({ websites: websites });
	};

	render() {
		const { websites, counter } = this.state;
		const currentSite = websites[counter];
		return (
			<div className="App">
				{websites.length === 0 ? (
					<input type="file" onChange={this.handleUpload} />
				) : (
					<>
						<iframe
							title="wbsite-frame"
							src={currentSite}
							id="websiteFrame"
						></iframe>
						<div className="actions">
							<button className="btn" onClick={this.previous}>
								Vorige
							</button>
							<a href={currentSite} target="_blank" rel="noopener noreferrer">
								<h3>Bezoek {currentSite}</h3>
							</a>
							<button className="btn" onClick={this.next}>
								Volgende
							</button>
						</div>
					</>
				)}
			</div>
		);
	}
}

export default App;
