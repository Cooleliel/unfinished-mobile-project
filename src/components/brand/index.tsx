import React from "react";
import { LAYOUT } from "../../constants/themes";
import { Image } from "react-native";
import { brandStyles } from "./styles";

export const Brand: React.FC = () => (
    <Image 
        source={require('../../assets/images/sangimmo.webp')} 
        style={[brandStyles.dimensions]} 
        resizeMode="contain"
    />
);