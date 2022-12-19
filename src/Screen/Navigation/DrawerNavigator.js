import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
// import { ContactStackNavigator } from "./StackNavigator";
import BottomTabNavigator from "./BottomTabNavigator";
import ProfileScreen from "../ProfileScreen";
import CustomSidebarMenu from '../CustomSidebarMenu';
// import SplashScreen from '../SplashScreen'
// import AuthScreen from '../AuthScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerActiveTintColor: '#e91e63',
                drawerItemStyle: { marginVertical: 5 },
                gestureEnabled: false,
            }}
            drawerContent={(props) => <CustomSidebarMenu {...props} />}
        >
            {/* <Drawer.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{ headerShown: false }}
            />
            <Drawer.Screen
                name="AuthScreen"
                component={AuthScreen}
                options={{ headerShown: false }}
            /> */}
            <Drawer.Screen name="Main" component={BottomTabNavigator} />
            <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;