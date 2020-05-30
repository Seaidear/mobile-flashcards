import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const NewQuestion = ({ handleSubmit, navigate, deckId }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const onSubmit = () => {
    handleSubmit({ question, answer });
    navigate('Deck', { deckId });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Question"
        value={question}
        onChangeText={(val) => setQuestion(val)}
        style={styles.questions}
      />
      <TextInput
        placeholder="Answer"
        value={answer}
        onChangeText={(val) => setAnswer(val)}
        style={styles.questions}
      />
      <TouchableOpacity
        onPress={onSubmit}
        disabled={question.length === 0 || answer.length === 0}
      >
        <Text style={styles.submitBtn}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewQuestion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  questions: {
    borderRadius: 4,
    borderColor: '#694fad',
    borderWidth: 1,
    width: 280,
    padding: 10,
    marginBottom: 20,
  },
  submitBtn: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: '#694fad',
    width: 280,
    textAlign: 'center',
    color: '#f5f5f5',
    borderRadius: 4,
    fontSize: 16,
  },
});
