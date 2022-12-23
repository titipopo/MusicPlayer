import { View, Switch } from "react-native";

const SwitchButton = ({ props }) => {
    const { changeHandle } = props;
    return (
        <View style={{ flex: 1, padding: 16 }}>
            <Switch onChange={changeHandle}></Switch>
        </View>
    )
}

export default SwitchButton;