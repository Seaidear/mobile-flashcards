import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import DeckList from '../components/DeckList';
import NewDeck from '../components/NewDeck';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();

const Home = ({ addDeck, decks }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          if (route.name === 'Decks') {
            return (
              <MaterialIcons
                name="library-books"
                name="library-books"
                size={26}
                color={color}
              />
            );
          } else if (route.name === 'New Deck') {
            return (
              <MaterialCommunityIcons name="plus-box" size={26} color={color} />
            );
          }
        },
      })}
      initialRouteName="Decks"
      activeColor="#f0edf6"
      inactiveColor="#a9a9a9"
      barStyle={{ backgroundColor: '#694fad' }}
    >
      <Tab.Screen name="Decks">
        {({ navigation }) => (
          <DeckList decks={decks} navigate={navigation.navigate} />
        )}
      </Tab.Screen>
      <Tab.Screen name="New Deck">
        {({ navigation }) => (
          <NewDeck handleSubmit={addDeck} navigate={navigation.navigate} />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};
export default Home;
