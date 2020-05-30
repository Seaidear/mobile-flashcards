import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Score from './Score';
import Answer from './Answer';

const Quiz = ({ questions, goBack }) => {
  const [answers, setAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [hasAnswered, setHasAnswered] = useState(false);

  const hasFinished = answers.length === questions.length;

  const showAnswer = () => setHasAnswered(true);

  const answerCard = (answer) => {
    setAnswers((prevAnswers) => [...prevAnswers, answer]);
    setCurrentQuestionIndex(
      (prevcurrentQuestionIndex) => prevcurrentQuestionIndex + 1,
    );
    setHasAnswered(false);
  };

  const resetQuiz = () => {
    setAnswers([]);
    setCurrentQuestionIndex(0);
    setHasAnswered(false);
  };

  if (hasFinished) {
    return (
      <Score
        correct={answers.filter((a) => a).length}
        total={questions.length}
        resetQuiz={resetQuiz}
        goBack={goBack}
      />
    );
  }
  const card = questions[currentQuestionIndex];
  return (
    <View style={styles.container}>
      <Text style={styles.question}>{card.question}</Text>
      {!hasAnswered && (
        <TouchableOpacity onPress={showAnswer}>
          <Text style={styles.submitBtn}>Show Answer</Text>
        </TouchableOpacity>
      )}
      {hasAnswered && <Answer answer={card.answer} answerCard={answerCard} />}
      <Text>{questions.length - answers.length} questions remaining</Text>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  question: {
    fontSize: 24,
    padding: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  submitBtn: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    color: 'white',
    borderRadius: 4,
    fontSize: 16,
    backgroundColor: '#694fad',
    width: 280,
    textAlign: 'center',
    marginBottom: 20,
  },
  correct: {
    backgroundColor: 'green',
  },
  incorrect: {
    backgroundColor: 'red',
  },
});
