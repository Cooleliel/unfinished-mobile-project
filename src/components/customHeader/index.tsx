
import React from "react";
import { Image, ScaledSize, useWindowDimensions, View } from "react-native";
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
}) => {
    const { width, height } : ScaledSize = useWindowDimensions();

    // Définition des breakpoints
    const isSmallMobile = width >= 320 && width < 374;
    const isMediumMobile = width >= 375 && width < 424;
    const isLargeMobile = width >= 425 && width < 1024;
    
    return (
    <>
        <View style={[baseStyles.flexRow, baseStyles.flexCenter]}>
            <Brand
                style={{
                    width: isSmallMobile ? width/3 : isMediumMobile ? width/2 : isLargeMobile ? width : width*2, 
                    height: isSmallMobile ? height/22 : isMediumMobile ? height/15 : isLargeMobile ? height/12 : height/9,
                    
                }}
            />
        </View>


        <View
            style={[headerStyles.textContainer, baseStyles.flexRow]}
        >
            <IconButton
                mode="contained"
                containerColor={COLORS.background}
                icon={icon}
                iconColor={iconColor}
                size={isSmallMobile ? 16 : isMediumMobile ? 22 : isLargeMobile ? 28 : 36}
                onPress={onPress}
            />
            <Text 
                variant={isSmallMobile ? 'titleMedium' : isMediumMobile ? 'headlineSmall' : 'headlineMedium'}
                style={[baseStyles.boldAndWhiteText]}
            >
                {title}
            </Text>
        </View>
    </>
)};