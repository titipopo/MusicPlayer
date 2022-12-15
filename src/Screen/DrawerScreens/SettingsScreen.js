import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import { auth } from '../../../firebase';

const SettingsScreen = ({navigation}) => {
  const handleSignOut = () => {
    auth.signOut()
      .then(() => {
        navigation.navigate('LoginScreen');
      })
      .catch(error => {
        alert(error)
      });
  };
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
            Email: {auth.currentUser?.email}
          </Text>
        </View>
        <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSignOut}>
              <Text style={styles.buttonTextStyle}>{auth.currentUser === null? 'Log in': 'Sign out'}</Text>
            </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
});

// import { Text, View, StyleSheet, Switch } from "react-native";

// const SettingsScreen = () => {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.text}>Setting Screen</Text>
//             <Switch value={false} onChange={val => console.log()}/>
//         </View>
//     );
// }

// export default SettingsScreen;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     text: {
//         fontSize: 30,
//         fontWeight: 'bold',
//     },
// });