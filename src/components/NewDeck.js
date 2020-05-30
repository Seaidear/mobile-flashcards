import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const NewDeck = ({ navigate, handleSubmit }) => {
  const [title, setTitle] = useState('');

  const handleChange = (value) => setTitle(value);

  const onSubmit = () => {
    handleSubmit(title);
    setTitle('');
    navigate('Deck', { deckId: title });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Deck title"
        value={title}
        onChangeText={handleChange}
        style={styles.input}
      />
      <TouchableOpacity onPress={onSubmit} disabled={title.length === 0}>
        <Text style={styles.submitBtn}>Create New Deck</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewDeck;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
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
