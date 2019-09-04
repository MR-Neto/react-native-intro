import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from "./screens/HomeScreen"
import ListScreen from "./screens/ListScreen"


const AppNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    List: ListScreen,
  },
  {
    navigationOptions: ({ navigation }) => ({
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

export default createAppContainer(AppNavigator);
