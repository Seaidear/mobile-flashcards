import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

class NewDeck extends React.Component {
  state = {
    title: "",
  };

  handleChange = (value) => {
    this.setState({
      title: value,
    });
  };

  handleSubmit = () => {
    const { navigate, handleSubmit } = this.props;
    handleSubmit(this.state.title);
    navigate("Deck", { deckId: this.state.title });
  };

  render() {
    const { title } = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Deck title"
          value={title}
          onChangeText={this.handleChange}
          style={styles.input}
        />
        <TouchableOpacity
          onPress={this.handleSubmit}
          disabled={title.length === 0}
        >
          <Text style={styles.submitBtn}>Create Deck</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default NewDeck;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderRadius: 4,
    borderColor: "black",
    borderWidth: 1,
    width: 280,
    padding: 10,
    marginBottom: 20,
  },
  submitBtn: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: "black",
    color: "white",
    borderRadius: 4,
    fontSize: 16,
  },
});
