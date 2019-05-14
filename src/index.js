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
        <h1>Draw Grid App</h1>
        <InputField onUpdate={this.onSourceUpdated} />
        <h2>Mosaic >></h2>
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
          Text here :
          <br />
          <textarea
            className="textArea"
            rows="10"
            cols="20"
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

    const transformedInput = splittedInput.map(c => {
      if (c == "x") {
        return <span className="whiteSquare" />;
      } else if (c == "o") {
        return <span className="blackSquare" />;
      } else if (c == "\n") {
        return <div />;
      } else {
        return <div />;
      }
    });

    // switch(c) {
    //   case c == "x":
    //    return <div className="whiteSquare" />
    //     break;
    //   case c =="o":
    //     return <div className="blackSquare" />
    //     break;
    //   default:
    //     return <div/>}

    console.log("transformed inputText: ", transformedInput);
    return <div>{transformedInput}</div>;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
