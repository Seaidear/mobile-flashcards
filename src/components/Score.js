import React, { useEffect } from 'react';
import { setLocalNotification, clearLocalNotification } from '../utils/helpers';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Score = ({ correct, total, resetQuiz, goBack }) => {
  useEffect(() => {
    clearLocalNotification();
    setLocalNotification();
  });

  return (
    <View style={styles.container}>
      <Text style={styles.score}>
        SCORE: {correct} / {total}
      </Text>
      <TouchableOpacity onPress={resetQuiz}>
        <Text style={styles.submitBtn}>Restart Quiz</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goBack}>
        <Text style={styles.submitBtn}>Back to Deck</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Score;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitBtn: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    color: '#f5f5f5',
    borderRadius: 5,
    fontSize: 16,
    backgroundColor: '#694fad',
    width: 280,
    textAlign: 'center',
    marginBottom: 20,
  },
  score: {
    fontSize: 32,
    padding: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
});
