import React from "react";
import { TextInput } from "react-native-paper";
import { customNumericInputStyles } from "./styles";

export const CustomNumericInput: React.FC = () => (
    <TextInput
        keyboardType="numeric"
        underlineColor="transparent"
        activeUnderlineColor="transparent"
        style={[customNumericInputStyles.dimensions]}
    />
);