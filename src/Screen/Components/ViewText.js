import { View, Text } from "react-native";

const ViewText = ({ props }) => {
    const { showText } = props;
    return (
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
                }}>{showText}
            </Text>
        </View>
    )
}

export default ViewText;