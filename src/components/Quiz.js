import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Score from "./Score";
import Answer from "./Answer";
class Quiz extends React.Component {
  state = {
    answers: [],
    currentQuestionIndex: 0,
    hasAnswered: false,
  };

  showAnswer = () => {
    this.setState({
      hasAnswered: true,
    });
  };

  answerCard = (answer) => {
    this.setState((prevState) => ({
      answers: [...prevState.answers, answer],
      currentQuestionIndex: prevState.currentQuestionIndex + 1,
      hasAnswered: false,
    }));
  };

  resetQuiz = () => {
    this.setState({
      answers: [],
      currentQuestionIndex: 0,
      hasAnswered: false,
    });
  };

  render() {
    const { answers, currentQuestionIndex, hasAnswered } = this.state;
    const { questions, goBack } = this.props;
    const hasFinished = answers.length === questions.length;
    if (hasFinished) {
      return (
        <Score
          correct={answers.filter((a) => a).length}
          total={questions.length}
          resetQuiz={this.resetQuiz}
          goBack={goBack}
        />
      );
    }
    const card = questions[currentQuestionIndex];
    return (
      <View style={styles.container}>
        <Text style={styles.question}>{card.question}</Text>
        {!hasAnswered && (
          <TouchableOpacity onPress={this.showAnswer}>
            <Text style={styles.submitBtn}>Show Answer</Text>
          </TouchableOpacity>
        )}
        {hasAnswered && (
          <Answer answer={card.answer} answerCard={this.answerCard} />
        )}
        <Text>{questions.length - answers.length} questions remaining</Text>
      </View>
    );
  }
}

export default Quiz;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  question: {
    fontSize: 24,
    padding: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  submitBtn: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    color: "white",
    borderRadius: 4,
    fontSize: 16,
    backgroundColor: "black",
    width: 180,
    marginBottom: 20,
  },
  correct: {
    backgroundColor: "green",
  },
  incorrect: {
    backgroundColor: "red",
  },
});
