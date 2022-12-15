import React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import SplashScreen from './src/Screen/SplashScreen';
import AuthScreen from './src/Screen/AuthScreen';
// import LoginScreen from './src/Screen/LoginScreen';
// import RegisterScreen from './src/Screen/RegisterScreen';
import DrawerNavigatorRoutes from './src/Screen/DrawerNavigatorRoutes';

const Stack = createNativeStackNavigator();

// const Auth = () => {
//   return (
//     <Stack.Navigator initialRouteName="LoginScreen">
//       <Stack.Screen
//         name="LoginScreen"
//         component={LoginScreen}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="RegisterScreen"
//         component={RegisterScreen}
//         options={{
//           headerShown: false,
//           title: 'Register', //Set Header Title
//           headerStyle: {
//             backgroundColor: '#307ecc', //Set Header color
//           },
//           headerTintColor: '#fff', //Set Header text color
//           headerTitleStyle: {
//             fontWeight: 'bold', //Set Header text style
//           },
//           // headerLeft:() =>(
//           //   <Button
//           //     onPress={() => alert('This is a button!')}
//           //     title="Info"
//           //     color="#fff"
//           //   />
//           // ),
//           // headerRight: () => (
//           //   <Button
//           //     onPress={() => alert('This is a button!')}
//           //     title="Info"
//           //     color="#fff"
//           //   />
//           // ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// };

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{gestureEnabled: false}}>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AuthScreen"
          component={AuthScreen}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name="DrawerNavigatorRoutesScreen"
          component={DrawerNavigatorRoutes}
          options={{ headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;





// import { useColorScheme } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreen from './src/screens/HomeScreen';
// import ProfileScreen from './src/screens/ProfileScreen';
// import SettingsScreen from './src/screens/SettingsScreen';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import {dark, light} from './src/theme/theme'

// const Tab = createBottomTabNavigator();

// const App = () => {
//   const scheme = useColorScheme();
//   return (
//     <NavigationContainer theme={scheme === 'Dark' ? dark : light}>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           headerShown: false,
//           tabBarShowLabel: false,
//           tabBarAccessibilityLabel: true,
//           tabBarActiveTintColor: 'tomato',
//           tabBarInactiveTintColor: 'lightgrey',
//           // tabBarActiveBackgroundColor: '#222831',
//           // tabBarInactiveBackgroundColor: '#222831',
//           // tabBarHideOnKeyboard: false,
//           // tabBarStyle: {
//           //   backgroundColor: '#222831',
//           //   borderTopColor: '#393E46',
//           // },
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;
//             if (route.name === 'Home') {
//               iconName = focused ? 'home' : 'home-outline';
//             } else if (route.name === 'Settings') {
//               iconName = focused ? 'settings' : 'settings-outline';
//             } else if (route.name === 'Profile') {
//               iconName = focused ? 'person' : 'person-outline';
//             }
//             return <Ionicons name={iconName} size={25} color={color} />;
//           },
//         })}>
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Profile" component={ProfileScreen} />
//         <Tab.Screen name="Settings" component={SettingsScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;