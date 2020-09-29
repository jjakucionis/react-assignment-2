import React, { Component } from "react";
import "./App.css";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends Component {
  state = {
    inputValue: "",
    letters: 0,
  };

  lettersInputHandler = (event) => {
    const inputValue = event.target.value;
    this.setState({
      inputValue: inputValue,
      letters: inputValue.length,
    });
  };

  charRemoveHandler = (i) => {
    const inputValueCopy = [...this.state.inputValue];
    const removedChar = inputValueCopy.splice(i, 1);
    const mergedString = inputValueCopy.join("");
    this.setState({
      inputValue: mergedString,
    });
  };

  render() {
    let charCards = this.state.inputValue.split("").map((letter, index) => {
      if (letter !== " ") {
        return (
          <CharComponent
            letter={letter}
            key={index}
            click={() => this.charRemoveHandler(index)}
          />
        );
      }
    });

    return (
      <div className="App">
        <input
          type="text"
          onChange={this.lettersInputHandler}
          value={this.state.inputValue}
        ></input>
        <p>The length of entered text is: {this.state.letters}</p>
        <ValidationComponent number={this.state.letters} />
        {charCards}
      </div>
    );
  }
}

export default App;
