import React, { useContext } from 'react';
import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Switch} from 'react-native';
import { useThemeUpdate } from '../theme/theme-manager';

const SettingsScreen = ({navigation}) => {
  const toggleTheme = useThemeUpdate();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <Switch onChange={toggleTheme}></Switch>
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