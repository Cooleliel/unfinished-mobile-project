import { StyleSheet } from "react-native";
import { FONTS, LAYOUT } from "../../constants/themes";

export const customNumericInputStyles = StyleSheet.create({
    dimensions: {
        width: LAYOUT.components.input.height,
        height: LAYOUT.components.input.height,
        borderTopRightRadius: LAYOUT.border.radius.lg,
        borderTopLeftRadius: LAYOUT.border.radius.lg,
        borderBottomRightRadius: LAYOUT.border.radius.lg,
        borderBottomLeftRadius: LAYOUT.border.radius.lg,
        fontSize: FONTS.sizes.xs*2,
        fontWeight: FONTS.weights.bold
    }
});