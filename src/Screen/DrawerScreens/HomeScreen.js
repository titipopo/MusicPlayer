// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Example of Splash, Login and Sign Up in React Native
            {'\n\n'}
            This is the Home Screen
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey',
          }}>
          Splash, Login and Register Example{'\n'}React Native
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey',
          }}>
          www.aboutreact.com
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;



// import React from "react";
// import { SafeAreaView, TextInput, Text, useColorScheme } from "react-native";
// import commonStyles from "../styles/common-styles";
// import dark from "../theme/dark";
// import light from "../theme/light";

// const HomeScreen = () => {
//     const scheme = useColorScheme();
//     return (
//         <SafeAreaView style={commonStyles.container}>
//             <Text style={[commonStyles.title,{color: scheme === 'dark' ? dark.colors.text : light.colors.text}]}>Home</Text>
//             <TextInput></TextInput>
//         </SafeAreaView>
//     );
// }

// export default HomeScreen;

