import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ alignContent: 'right' }}>
      <View style={{ flex: 1, padding: 16 }}>
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
            }}>Home Screen
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  buttonStyle: {
    justifyContent: 'center',
    backgroundColor: '#222831',
    width: 50,
    height: 50,
    alignItems: 'center',
    borderRadius: 25,
  },
})
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

