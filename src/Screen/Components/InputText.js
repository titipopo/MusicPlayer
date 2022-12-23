import { StyleSheet, TextInput, Keyboard, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

const InputText = ({props}) => {
    const {type, keyboardType,secureTextEntry, iconFlag, placeholder, onChangeText} = props;
    return (
        <View style={styles.SectionStyle}>
            {iconFlag ? <View style={styles.test}><Ionicons name={type} size={25} /></View> : null}
            <TextInput
                style={styles.inputStyle}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor="#8b9cb5"
                keyboardType={keyboardType}
                autoCorrect={false}
                clearTextOnFocus={false}
                autoCapitalize="none"
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={secureTextEntry}
                underlineColorAndroid="#f000"
                returnKeyType="next"
            />
        </View>
    )
}

export default InputText;

const styles = StyleSheet.create({
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#dadae8',
      },
    inputStyle: {
        flex: 1,
        color: 'white',
        paddingLeft: 15,
        paddingRight: 15,
    },
    test:{
        alignItems: "center",
        backgroundColor: 'transparent',
        borderRadius: 30,
        marginLeft: 5,
        marginRight: 5,
    }
});