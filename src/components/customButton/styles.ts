import { StyleSheet } from "react-native";
import { baseStyles } from "../../styles/baseStyles";
import { LAYOUT } from "../../constants/themes";


export const customButtonStyles = StyleSheet.create({
    customContainedButtonContainer: {
        borderRadius: LAYOUT.border.radius.md, 
        height: LAYOUT.components.button.height, 
        justifyContent: 'center'
    }
});