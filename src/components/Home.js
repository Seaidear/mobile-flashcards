import 'react-native-gesture-handler';
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DeckList from '../components/DeckList';
import NewDeck from '../components/NewDeck';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

class Home extends React.Component {
  render() {
    const { addDeck } = this.props;
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            if (route.name === 'Decks') {
              return (
                <MaterialIcons
                  name="library-books"
                  name="library-books"
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'New Deck') {
              return (
                <MaterialCommunityIcons
                  name="plus-box"
                  size={size}
                  color={color}
                />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Decks">
          {({ navigation }) => (
            <DeckList decks={this.props.decks} navigate={navigation.navigate} />
          )}
        </Tab.Screen>
        <Tab.Screen name="New Deck">
          {({ navigation }) => (
            <NewDeck handleSubmit={addDeck} navigate={navigation.navigate} />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    );
  }
}
export default Home;
