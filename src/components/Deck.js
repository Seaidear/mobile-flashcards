import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Deck = ({ title, questions = [], navigate, deleteDeck }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>
        {questions.length !== 1 ? questions.length + ' cards' : '1 card'}
      </Text>
    </View>
    <View style={styles.controls}>
      <TouchableOpacity
        onPress={() => navigate('New Question', { deckId: title })}
      >
        <Text style={styles.addBtn}>Add Card</Text>
      </TouchableOpacity>
      {questions.length > 0 && (
        <TouchableOpacity onPress={() => navigate('Quiz', { deckId: title })}>
          <Text style={styles.startBtn}>Start quiz</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={deleteDeck}>
        <Text style={styles.deleteBtn}>Delete Deck</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default Deck;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
  },
  controls: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
  },
  subtitle: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 20,
  },
  addBtn: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#694fad',
    color: '#694fad',
    paddingHorizontal: 32,
    paddingVertical: 16,
    width: 280,
    textAlign: 'center',
    fontSize: 16,
  },
  startBtn: {
    color: '#f5f5f5',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#694fad',
    paddingHorizontal: 32,
    paddingVertical: 16,
    fontSize: 16,
    textAlign: 'center',
    width: 280,
    backgroundColor: '#694fad',
  },
  deleteBtn: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
});
