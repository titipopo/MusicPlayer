import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image
} from 'react-native';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const SplashScreen = ({navigation}) => {
  const [animating, setAnimating] = useState(true);
  const auth = getAuth();

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      onAuthStateChanged(auth, user => {
        console.log(user);
        if(user){
          navigation.navigate('DrawerNavigatorRoutesScreen');
        }else{
          navigation.navigate('AuthScreen');
        }
      });
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../test/image/Chroma-Red-Dark.jpg')}
        style={{width: '90%', resizeMode: 'contain', margin: 30}}
      />
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});