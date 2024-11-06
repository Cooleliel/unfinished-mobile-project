import React from "react";
import { LAYOUT } from "../../constants/themes";
import { Image, ImageStyle, ViewStyle } from "react-native";
import { brandStyles } from "./styles";

interface BrandProps {
    style: ImageStyle;
};

export const Brand: React.FC<BrandProps> = ({
    style
}) => (
    <Image 
        source={require('../../assets/images/sangimmo.webp')} 
        style={[style]} 
        resizeMode="contain"
    />
);