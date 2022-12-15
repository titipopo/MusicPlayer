import { useColorScheme } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './DrawerScreens/HomeScreen';
import SettingsScreen from './DrawerScreens/SettingsScreen';
// import ProfileScreen from './src/screens/ProfileScreen';
// import SettingsScreen from './src/screens/SettingsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import {dark, light} from '../theme/theme';

const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

const DrawerNavigatorRoutesScreen = ({navigation}) => {
  const scheme = useColorScheme();
  return (
      <Tab.Navigator
      initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: false,
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
        <Tab.Screen name="Home" component={HomeScreen} />
        {/* <Tab.Screen name="Profile" component={ProfileScreen} /> */}
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
  );
}

export default DrawerNavigatorRoutesScreen;


// // import * as React from 'react';
// // import { Button, View } from 'react-native';
// // import { createDrawerNavigator } from '@react-navigation/drawer';
// // import { NavigationContainer } from '@react-navigation/native';

// // function HomeScreen({ navigation }) {
// //   return (
// //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //       <Button
// //         onPress={() => navigation.navigate('Notifications')}
// //         title="Go to notifications"
// //       />
// //     </View>
// //   );
// // }

// // function NotificationsScreen({ navigation }) {
// //   return (
// //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //       <Button onPress={() => navigation.goBack()} title="Go back home" />
// //     </View>
// //   );
// // }

// // const Drawer = createDrawerNavigator();

// // export default function DrawerNavigatorRoutes() {
// //   return (
// //     <NavigationContainer>
// //       <Drawer.Navigator initialRouteName="Home">
// //         <Drawer.Screen name="Home" component={HomeScreen} />
// //         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
// //       </Drawer.Navigator>
// //     </NavigationContainer>
// //   );
// // }

// // import React from 'react';
// // import { createNativeStackNavigator } from '@react-navigation/native-stack';
// // import { createDrawerNavigator } from '@react-navigation/drawer';
// // import { NavigationContainer } from '@react-navigation/native';
// // import HomeScreen from './DrawerScreens/HomeScreen';
// // import SettingsScreen from './DrawerScreens/SettingsScreen';
// // import CustomSidebarMenu from './Components/CustomSidebarMenu';
// // import NavigationDrawerHeader from './Components/NavigationDrawerHeader';

// // const Stack = createNativeStackNavigator();
// // const Drawer = createDrawerNavigator();

// // const homeScreenStack = ({ navigation }) => {
// //   return (
// //     <Stack.Navigator initialRouteName="HomeScreen">
// //       <Stack.Screen
// //         name="HomeScreen"
// //         component={HomeScreen}
// //         options={{
// //           title: 'Home', //Set Header Title
// //           headerLeft: () => (
// //             <NavigationDrawerHeader navigationProps={navigation} />
// //           ),
// //           headerStyle: {
// //             backgroundColor: '#307ecc', //Set Header color
// //           },
// //           headerTintColor: '#fff', //Set Header text color
// //           headerTitleStyle: {
// //             fontWeight: 'bold', //Set Header text style
// //           },
// //         }}
// //       />
// //     </Stack.Navigator>
// //   );
// // };

// // const settingScreenStack = ({ navigation }) => {
// //   return (
// //     <Stack.Navigator
// //       initialRouteName="SettingsScreen"
// //       screenOptions={{
// //         // headerLeft: () => (
// //         //   <NavigationDrawerHeader navigationProps={navigation} />
// //         // ),
// //         headerStyle: {
// //           backgroundColor: '#307ecc', //Set Header color
// //         },
// //         headerTintColor: '#fff', //Set Header text color
// //         headerTitleStyle: {
// //           fontWeight: 'bold', //Set Header text style
// //         },
// //       }}>
// //       <Stack.Screen
// //         name="SettingsScreen"
// //         component={SettingsScreen}
// //         options={{
// //           title: 'Settings', //Set Header Title
// //         }}
// //       />
// //     </Stack.Navigator>
// //   );
// // };

// // const DrawerNavigatorRoutes = (props) => {
// //   return (
// //     <Drawer.Navigator
// //       drawerContentOptions={{
// //         activeTintColor: '#cee1f2',
// //         color: '#cee1f2',
// //         itemStyle: { marginVertical: 5, color: 'white' },
// //         labelStyle: {
// //           color: '#d8d8d8',
// //         },
// //       }}
// //       screenOptions={{ headerShown: false }}
// //       drawerContent={CustomSidebarMenu}>
// //       <Drawer.Screen
// //         name="homeScreenStack"
// //         options={{ drawerLabel: 'Home Screen' }}
// //         component={homeScreenStack}
// //       />
// //       <Drawer.Screen
// //         name="settingScreenStack"
// //         options={{ drawerLabel: 'Setting Screen' }}
// //         component={settingScreenStack}
// //       />
// //     </Drawer.Navigator>
// //   );
// // };

// // export default DrawerNavigatorRoutes;