import React from "react";
import { Button } from "react-native-paper";
import { COLORS, FONTS } from "../../constants/themes";
import { TextStyle, ViewStyle } from "react-native";
import { customButtonStyles } from "./styles";

interface CustomButtonProps {
    icon?: string;
    compact?: boolean;
    contentStyle?: ViewStyle;
    labelStyle?: TextStyle;
    label: string;
    buttonColor?: string;
    textColor?: string;
    styles?: ViewStyle;
    uppercase?: boolean;
    onPress?: () => void;
    rippleColor?: string

}


export const CustomContainedButton: React.FC<CustomButtonProps> = ({
    icon,
    labelStyle,
    contentStyle,
    label,
    buttonColor,
    textColor,
    styles,
    onPress,
    rippleColor,
    uppercase
}) => (
    
    <Button
        mode="contained"
        icon={icon}
        buttonColor={buttonColor ? buttonColor : COLORS.primary}
        textColor={textColor ? textColor : COLORS.background}
        uppercase={uppercase && uppercase}
        style={[customButtonStyles.customContainedButtonContainer, styles]}
        labelStyle={[labelStyle, {fontWeight: FONTS.weights.bold}]}
        contentStyle={[contentStyle]}
        onPress={onPress}
        rippleColor={rippleColor ? rippleColor : "transparent"}
    >
        {label}
    </Button>
);

export const CustomTextButton: React.FC<CustomButtonProps> = ({
    icon,
    labelStyle,
    contentStyle,
    label,
    buttonColor,
    textColor,
    styles,
    uppercase,
    onPress,
    rippleColor
}) => (
    
    <Button
        mode="text"
        compact
        contentStyle={[contentStyle]}
        icon={icon}
        labelStyle={[{fontWeight: FONTS.weights.bold}, labelStyle]}
        buttonColor={buttonColor ? buttonColor : "transparent"}
        textColor={textColor ? textColor : COLORS.text}
        style={[styles]}
        uppercase={uppercase}
        onPress={onPress}
        rippleColor={rippleColor ? rippleColor : "transparent"}
    >
        {label}
    </Button>
);