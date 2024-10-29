
import React from "react";
import { Image, View } from "react-native";
import { Icon, IconButton, Text } from "react-native-paper";
import { baseStyles } from "../../styles/baseStyles";
import { Brand } from "../brand";
import { headerStyles } from "./styles";
import { COLORS } from "../../constants/themes";

interface CustomHeaderProps {
    icon: string;
    iconSize?: number;
    iconColor?: string;
    title: string;
    onPress?: () => void;
}

export const CustomHeader: React.FC<CustomHeaderProps> = ({
    icon,
    iconColor,
    title,
    onPress
}) => (
    <>
        <View style={[baseStyles.flexRow, baseStyles.flexCenter]}>
            <Brand/>
        </View>


        <View
            style={[headerStyles.textContainer, baseStyles.flexRow]}
        >
            <IconButton
                mode="contained"
                containerColor={COLORS.background}
                icon={icon}
                iconColor={iconColor}
                size={15}
                onPress={onPress}
            />
            <Text 
                variant="titleLarge"
                style={[baseStyles.boldAndWhiteText]}
            >
                {title}
            </Text>
        </View>
    </>
);