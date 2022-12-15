import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import LoginScreen from './LoginScreen'
import RegisterScreen from './RegisterScreen';
import ForGotPasswordScreen from './ForgotPasswordScreen';

const Stack = createNativeStackNavigator();

const AuthScreen = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          headerShown: false,
          title: 'Register',
          headerStyle: {
            backgroundColor: '#307ecc',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          // headerLeft:() =>(
          //   <Button
          //     onPress={() => alert('This is a button!')}
          //     title="Info"
          //     color="#fff"
          //   />
          // ),
          // headerRight: () => (
          //   <Button
          //     onPress={() => alert('This is a button!')}
          //     title="Info"
          //     color="#fff"
          //   />
          // ),
        }}
      />
      <Stack.Screen
        name="ForGotPasswordScreen"
        component={ForGotPasswordScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthScreen;