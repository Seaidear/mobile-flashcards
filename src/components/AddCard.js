import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Button, Text, Item, Input, Form } from 'native-base';
import { connect } from 'react-redux';
import { handleAddCardToDeck } from '../actions/decks';
import { colors } from '../utils/helpers';

const AddCard = (props) => {
  const [card, setCard] = useState({
    question: '',
    answer: '',
  });

  const onAddCardPress = () => {
    const { deckId } = props.navigation.state.params;
    const { question, answer } = card;
    if (!question || !answer) {
      return alert('Please Enter all the fields');
    }
    props.addCardToDeck(deckId, {
      question,
      answer,
    });
    props.navigation.goBack();
  };

  const handleChange = (name) => (value) => {
    setCard({ [name]: value });
  };

  return (
    <Container style={styles.container}>
      <Form style={{ alignSelf: 'stretch' }}>
        <Item style={styles.cardInputField} rounded>
          <Input
            placeholder="Question"
            onChangeText={handleChange('question')}
          />
        </Item>

        <Item style={styles.cardInputField} rounded>
          <Input placeholder="Answer" onChangeText={handleChange('answer')} />
        </Item>
      </Form>
      <Button style={styles.btn} onPress={() => onAddCardPress()} block>
        <Text>Submit</Text>
      </Button>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addCardToDeck: (deckId, card) => {
    dispatch(handleAddCardToDeck(deckId, card));
  },
});

export default connect(null, mapDispatchToProps)(AddCard);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.allScreensBackgroundColor,
  },
  cardInputField: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'white',
  },
  btn: {
    margin: 30,
    backgroundColor: colors.darkButtonColor,
  },
});
