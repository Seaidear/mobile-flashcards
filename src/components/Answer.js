import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Answer = ({ answer, answerCard }) => (
  <View style={styles.answer}>
    <Text style={styles.answer}>{answer}</Text>
    <TouchableOpacity onPress={() => answerCard(true)}>
      <Text style={[styles.submitBtn, styles.correct]}>Correct</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => answerCard(false)}>
      <Text style={[styles.submitBtn, styles.incorrect]}>Incorrect</Text>
    </TouchableOpacity>
  </View>
);

export default Answer;

const styles = StyleSheet.create({
  answer: {
    fontSize: 18,
    padding: 20,
    alignItems: 'center',
    textAlign: 'center',
  },
  submitBtn: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    color: 'white',
    borderRadius: 4,
    fontSize: 16,
    backgroundColor: '#694fad',
    width: 240,
    marginBottom: 20,
  },
  correct: {
    backgroundColor: 'green',
  },
  incorrect: {
    backgroundColor: 'red',
  },
});
