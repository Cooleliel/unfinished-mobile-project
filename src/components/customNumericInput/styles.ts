import { StyleSheet } from "react-native";
import { FONTS, LAYOUT } from "../../constants/themes";

export const customNumericInputStyles = StyleSheet.create({
    dimensions: {
        
        borderTopRightRadius: LAYOUT.border.radius.sm,
        borderTopLeftRadius: LAYOUT.border.radius.sm,
        borderBottomRightRadius: LAYOUT.border.radius.sm,
        borderBottomLeftRadius: LAYOUT.border.radius.sm,
        fontSize: FONTS.sizes.xs*2,
        fontWeight: FONTS.weights.bold
    }
});