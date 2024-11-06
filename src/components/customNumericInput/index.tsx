import React from "react";
import { TextInput } from "react-native-paper";
import { customNumericInputStyles } from "./styles";
import { ViewStyle } from "react-native";

interface CustomNumericInputProps {
    style: ViewStyle;
};


export const CustomNumericInput: React.FC<CustomNumericInputProps> = ({style}) => (
    <TextInput
        keyboardType="numeric"
        underlineColor="transparent"
        activeUnderlineColor="transparent"
        style={[customNumericInputStyles.dimensions, style]}
    />
);