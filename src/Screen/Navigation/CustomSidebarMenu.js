import React from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';

import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { auth } from '../../../firebase';

const CustomSidebarMenu = (props) => {
    const handleSignOut = () => {
        auth.signOut()
            .then(() => {
                props.navigation.navigate("LoginScreen");
            })
            .catch(error => {
                alert(error)
            });
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.sideMenuProfileIcon}>
                <Ionicons name={'person-outline'} size={25} color={'tomato'} />
            </View>
            <Text
                style={{
                    fontSize: 20,
                    textAlign: 'center',
                }}>
                Email:
            </Text>
            <Text
                style={{
                    fontSize: 20,
                    textAlign: 'center',
                }}>
                {auth.currentUser?.email}
            </Text>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={handleSignOut}>
                <Text style={styles.buttonTextStyle}>{auth.currentUser === null ? 'Log in' : 'Sign out'}</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
                Create By Titipopo
            </Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sideMenuProfileIcon: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#222831'
    },
    iconStyle: {
        width: 15,
        height: 15,
        marginHorizontal: 5,
    },
    customItem: {
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonStyle: {
        backgroundColor: '#7DE24E',
        borderWidth: 0,
        color: '#fff',
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
        color: '#fff',
        paddingVertical: 10,
        fontSize: 16,
    },
});

export default CustomSidebarMenu;
