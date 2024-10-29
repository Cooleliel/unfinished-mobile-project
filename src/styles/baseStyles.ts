import { StyleSheet } from "react-native";
import { COLORS, FONTS, LAYOUT } from "../constants/themes";

export const baseStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.gray[50],
    },
    containerBorderTopRadius: {
        backgroundColor: COLORS.background,
        borderTopLeftRadius: LAYOUT.spacing.xxl,
        borderTopRightRadius: LAYOUT.spacing.xxl,
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
    },
    flexCenter: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    boldAndWhiteText: {
        fontWeight: FONTS.weights.bold,
        color: COLORS.background
    },
    actionButton: {
        backgroundColor: '#2E8B57',
        borderRadius: 8,
    },
    actionButtonLabel: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
    
    // Text styles
    
    greyText: {
        color: '#a3a3a3',
    },
     // List styles
    listContainer: {
        marginHorizontal: 10,
    },
    
    // Action section styles
    actionSection: {
        alignItems: 'center',
        marginTop: 20,
        columnGap: 40,
        padding: 5,
    },
});

