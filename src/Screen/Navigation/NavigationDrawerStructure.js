import { View, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

const NavigationDrawerStructure = (props) => {
    const toggleDrawer = () => {
        props.navigationProps.toggleDrawer();
    };

    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={toggleDrawer}>
                <Ionicons name={'person-outline'} size={25} />
            </TouchableOpacity>
        </View>
    );
};

export default NavigationDrawerStructure;