import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import SplashScreen from '../SplashScreen'
import AuthScreen from '../AuthScreen';
// import DrawerNavigatorRoutes from '../DrawerNavigatorRoutes';
import { useTheme } from '../../theme/theme-manager';
// import { dark, light } from '../../theme/theme'
import 'react-native-gesture-handler';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import DrawerNavigator from './DrawerNavigator';

const Stack = createNativeStackNavigator();

const StartScreen = () => {
    const theme = useTheme();
    console.log(theme);
    return (
        <NavigationContainer>
            {/* <DrawerNavigator /> */}
                <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ gestureEnabled: false }}>
                    <Stack.Screen
                        name="SplashScreen"
                        component={SplashScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="AuthScreen"
                        component={AuthScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="DrawerNavigator"
                        component={DrawerNavigator}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
        </NavigationContainer>
    )
}
export default StartScreen;