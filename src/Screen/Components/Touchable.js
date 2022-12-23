import { TouchableOpacity, Text } from "react-native"

const Touchable = ({props}) => {
    const {name, handleSubmitPress} = props;
    return (
        <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={handleSubmitPress}>
            <Text style={styles.buttonTextStyle}>{name}</Text>
        </TouchableOpacity>
    )
}

export default Touchable;