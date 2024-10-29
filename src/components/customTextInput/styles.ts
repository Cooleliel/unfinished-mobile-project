import { StyleSheet } from "react-native";
import { baseStyles } from "../../styles/baseStyles";
import { COLORS, FONTS, LAYOUT } from "../../constants/themes";

export const customTextInputStyles = StyleSheet.create({
    customTextInputContainer: {
        borderWidth: LAYOUT.border.width.thick,
        marginTop: LAYOUT.spacing.md,
        borderTopRightRadius: LAYOUT.border.radius.lg,
        borderTopLeftRadius: LAYOUT.border.radius.lg,
        borderBottomRightRadius: LAYOUT.border.radius.lg,
        borderBottomLeftRadius: LAYOUT.border.radius.lg
    },
    customTextInputContent: {
        textAlign: "center"
    },
    errorInput: {
        borderColor: COLORS.error,
    },
    errorText: {
        color: COLORS.error,
        fontSize: FONTS.sizes.xs,
        marginTop: LAYOUT.spacing.xs,
        marginLeft: LAYOUT.spacing.xs,
    },
});
