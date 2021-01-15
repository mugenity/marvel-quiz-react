import React, { Component } from "react";
import Levels from "../Levels";
import ProgressBar from "../ProgressBar";

class Quiz extends Component {
  render() {
    // const { pseudo } = this.props.userData;
    return (
      <div>
        <Levels />
        <ProgressBar />
        <h2>Notre question Quiz</h2>
        <p className="answerOptions">Option 1</p>
        <p className="answerOptions">Option 2</p>
        <p className="answerOptions">Option 3</p>
        <p className="answerOptions">Option 4</p>
        <button className="btnSubmit">Suivant</button>
      </div>
    );
  }
}

export default Quiz;
