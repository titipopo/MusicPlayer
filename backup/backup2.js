import { StyleSheet, useColorScheme, SafeAreaView, View } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ProfilesScreen from './src/screens/ProfilesScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import dark from './src/theme/dark';
import light from './src/theme/light';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Navigation } from 'react-native-navigation';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MyTheme = {
  dark: false,
  colors: {
    primary: '#222831',
    background: '#222831',
    card: 'black',
    text: 'pink',
    border: 'grey',
    notification: 'red',
  },
};

const MyStack = () => {
  const scheme = useColorScheme();
  return (
    <SafeAreaProvider>
      <NavigationContainer >
        <Tab.Navigator
          labeled={false}
          activeColor="lightgray"
          inactiveColor="darkgray"
          barStyle={{ backgroundColor: '#222831' }}
          screenOptions={({ route }) => ({
            tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
            // tabBarIcon: ({ focused, color, size }) => {
            //   let iconName;
            //   if (route.name === 'Home') {
            //     iconName = focused ? 'home' : 'home-outline';
            //   } else if (route.name === 'Settings') {
            //     iconName = focused ? 'settings' : 'settings-outline';
            //   } else if (route.name === 'Profiles') {
            //     iconName = focused ? 'person' : 'person-outline';
            //   }
            //   console.log(color);
            //   return <Ionicons name={iconName} size={25} color={color} />;
            // },
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} options={{
    tabBarLabel: (props) => <Text style={{ color: props.color}}>Home</Text>,
    tabBarIcon: (props) => <Ionicons name={"home"} size={25} color={props.color} />,
    tabBarOptions: { 
      activeTintColor: '#000',
      inactiveTintColor: '#fff',
},
 }} />
          <Tab.Screen name="Profiles" component={ProfilesScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default MyStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});