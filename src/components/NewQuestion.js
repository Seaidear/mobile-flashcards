import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

class NewQuestion extends React.Component {
  state = {
    question: '',
    answer: '',
  };

  handleChange = (input, value) => {
    this.setState({
      [input]: value,
    });
  };

  onSubmit = () => {
    const { handleSubmit, navigate, deckId } = this.props;
    handleSubmit(this.state);
    navigate('Deck', { deckId });
  };

  render() {
    const { question, answer } = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Question"
          value={question}
          onChangeText={(val) => this.handleChange('question', val)}
          style={styles.questions}
        />
        <TextInput
          placeholder="Answer"
          value={answer}
          onChangeText={(val) => this.handleChange('answer', val)}
          style={styles.questions}
        />
        <TouchableOpacity
          onPress={this.onSubmit}
          disabled={question.length === 0 || answer.length === 0}
        >
          <Text style={styles.submitBtn}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

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
