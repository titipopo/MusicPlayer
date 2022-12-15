import { Text, View, StyleSheet } from "react-native";

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Profile Screen</Text>
        </View>
    );
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
    },
});