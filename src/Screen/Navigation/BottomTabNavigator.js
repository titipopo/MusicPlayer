import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NavigationDrawerStructure from './NavigationDrawerStructure';
import HomeScreen from "../MainScreen/HomeScreen";
import SettingsScreen from "../MainScreen/SettingsScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({ navigation }) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: true,
        tabBarShowLabel: false,
        tabBarAccessibilityLabel: true,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'lightgrey',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Ionicons name={iconName} size={25} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        headerRight: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        )
      }} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;