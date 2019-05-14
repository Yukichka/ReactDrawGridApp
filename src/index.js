import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ""
    };
    this.onSourceUpdated = this.onSourceUpdated.bind(this);
  }
  onSourceUpdated(src) {
    console.log(`app: updating ${src}`);
    this.setState({ inputText: src });
  }
  render() {
    return (
      <div>
        <h1>---Input field---</h1>
        <InputField onUpdate={this.onSourceUpdated} />
        <h2>---Display Field---</h2>
        <DisplayField inputText={this.state.inputText} />
      </div>
    );
  }
}
class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputText: "" };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ inputText: event.target.value });
    console.log(`you texed:${this.state.inputText}`);
    this.props.onUpdate(this.state.inputText);
    // event.preventDefault();
  }
  render() {
    return (
      <form>
        <label>
          Text:
          <br />
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
      </form>
    );
  }
}
class DisplayField extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const splittedInput = this.props.inputText.split("");
    console.log("splitted inputText: ", splittedInput);

    const transformedInput = splittedInput.map(c =>
      c == "x" ? (
        <div className="whiteSquare" />
      ) : (
        <div className="blackSquare" />
      )
    );
    console.log("transformed inputText: ", transformedInput);
    return <div>{transformedInput}</div>;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
