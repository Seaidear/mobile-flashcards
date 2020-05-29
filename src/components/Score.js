import React from "react";
import { setLocalNotification, clearLocalNotification } from "../utils/helpers";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

class Score extends React.Component {
  componentDidMount() {
    clearLocalNotification();
    setLocalNotification();
  }

  render() {
      const { correct, total, resetQuiz, goBack } = this.props;
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
  }
}

export default Score;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  score: {
    fontSize: 32,
    padding: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
});
