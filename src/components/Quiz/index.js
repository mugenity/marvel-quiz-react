import React, { Component } from "react";
import { QuizMarvel } from "../QuizMarvel";
import Levels from "../Levels";
import ProgressBar from "../ProgressBar";

class Quiz extends Component {
  state = {
    levelNames: ["debutant", "confirme", "expert"],
    quizLevel: 0,
    maxQuestions: 10,
    storedQuestions: [],
    question: null,
    options: [],
    idQuestion: 0,
  };

  loadQuestions = (level) => {
    const fetchedArrayQuiz = QuizMarvel[0].quizz[level];
    console.log(fetchedArrayQuiz);
    if (fetchedArrayQuiz.length >= this.state.maxQuestions) {
      const newArray = fetchedArrayQuiz.map(
        ({ answer, ...keepRest }) => keepRest
      ); //ici on enleve les answer du Array de fetchedArrayQuiz et on garde le reste pour le creer dans un nouveau Array.

      this.setState({
        storedQuestions: newArray,
      });
    } else {
      console.log("Pas assez de questions !!!");
    }
  };

  componentDidMount() {
    this.loadQuestions(this.state.levelNames[this.state.quizLevel]);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.storedQuestions !== prevState.storedQuestions) {
      this.setState({
        question: this.state.storedQuestions[this.state.idQuestion].question,
        options: this.state.storedQuestions[this.state.idQuestion].options,
      });
    }
  }

  render() {
    // const { pseudo } = this.props.userData;

    const displayOptions = this.state.options.map((option, index) => {
      return (
        <p key={index} className="answerOptions">
          {option}
        </p>
      );
    });
    return (
      <div>
        <Levels />
        <ProgressBar />
        <h2>{this.state.question}</h2>
        {displayOptions}
        <button className="btnSubmit">Suivant</button>
      </div>
    );
  }
}

export default Quiz;
