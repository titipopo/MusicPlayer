import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import {
//      MainStackNavigator,
//       ContactStackNavigator 
//     } from './StackNavigator'
import NavigationDrawerStructure from './NavigationDrawerStructure';
import HomeScreen from "../HomeScreen";
import SettingsScreen from "../SettingsScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({navigation}) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        // headerRight: () => (
        //   <TouchableOpacity
        //     // style={{backgroundColor: '#222831'}}
        //     activeOpacity={0.5}
        //     onPress={() => navigation.openDrawer()}>
        //     <Ionicons name={'person-outline'} size={25} />
        //   </TouchableOpacity>
        // ),
        headerShown: true,
        tabBarShowLabel: false,
        tabBarAccessibilityLabel: true,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'lightgrey',
        // tabBarActiveBackgroundColor: '#222831',
        // tabBarInactiveBackgroundColor: '#222831',
        // tabBarHideOnKeyboard: false,
        // tabBarStyle: {
        //   backgroundColor: '#222831',
        //   borderTopColor: '#393E46',
        // },
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
      <Tab.Screen name="Home" component={HomeScreen} options={{headerRight: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        )}} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;