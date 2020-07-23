import React from "react";
import "./App.css";
import logo from "./img/rampageslayer2000.jpeg";
import ArrowKeysReact from "arrow-keys-react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      websites: [],
    };
    this.goToLink = this.goToLink.bind(this);

    ArrowKeysReact.config({
      left: () => {
        this.previous();
      },
      right: () => {
        this.next();
      },
      up: () => {
        this.goToLink();
      },
    });

    this.FILE_KEY = "file.json";
    this.COUNTER = "counter";
  }

  componentDidMount() {
    const storedFile = JSON.parse(localStorage.getItem(this.FILE_KEY));
    if (!storedFile || !storedFile.websites) return false;
    this.setState({ websites: storedFile.websites });

    const storedCounter = localStorage.getItem("counter");
    if (!storedCounter || !Number(storedCounter)) return false;
    this.setState({ counter: Number(localStorage.getItem(this.COUNTER)) });
  }

  goToLink = () => {
    this.link.click();
  };

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
    console.log(this.state.counter + 1, this.state.websites.length);
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
      alert("Whoeps, er lijkt iets mis met de json file.");
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
          <main>
            <h1>Stay ahead of the competition!</h1>
            <img src={logo} width="648" height="455" alt="" />
            <label className="btn">
              Upload je bestand
              <input
                id="input"
                name="input"
                type="file"
                onChange={this.handleUpload}
              />
            </label>
          </main>
        ) : (
          <main>
            <iframe
              title="website-frame"
              src={currentSite}
              id="websiteFrame"
            ></iframe>
            <div className="actions">
              <button
                {...ArrowKeysReact.events}
                className="btn"
                disabled={counter === 0}
                onClick={this.previous}
              >
                Vorige
              </button>
              <a
                {...ArrowKeysReact.events}
                id="link"
                onClick={this.goToLink.bind(this)}
                href={currentSite}
                ref={(ref) => {
                  this.link = ref;
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>Bezoek {currentSite}</h3>
              </a>
              <button
                {...ArrowKeysReact.events}
                className="btn"
                disabled={counter + 1 === websites.length}
                onClick={this.next}
              >
                Volgende
              </button>
            </div>
          </main>
        )}
      </div>
    );
  }
}

export default App;
