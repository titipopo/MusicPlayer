import React, {useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const SplashScreen = ({navigation}) => {
  const auth = getAuth();

  useEffect(() => {
    setTimeout(() => {
      onAuthStateChanged(auth, user => {
        console.log(user);
        if(user){
          navigation.navigate('DrawerNavigator');
        }else{
          navigation.navigate('AuthScreen');
        }
      });
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Wait for some effect</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    display: 'grid',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    
  },
  text:{
    color: '#fff'
  }
});