import { SafeAreaView, StyleSheet } from "react-native";
import { useTheme } from "../theme/theme-manager";
import mode from "../styles/style-mode";

export const SafeAreaView = (children) => {
    const theme = useTheme();
    return (
        <SafeAreaView style={ theme ? mode.dark : mode.light}>
            {children}
        </SafeAreaView>
    )
}