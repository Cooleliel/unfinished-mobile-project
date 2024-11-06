import React from "react";
import { Image, ScaledSize, useWindowDimensions, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { customCardStyles } from "./styles";
import { baseStyles } from "../../styles/baseStyles";
import { CustomContainedButton } from "../customButton";


/* Utilisation d'un type pour une union de valeurs possibles
type OfferStatus = 'active' | 'pending' | 'closed';*/

// Utilisation d'une interface pour la structure principale d'une offre
interface Offer {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    //status: OfferStatus;
}

// Utilisation d'un type pour un alias de fonction
type OnPressHandler = (item: Offer) => void;

// Utilisation d'une interface pour les props d'un composant
interface CardProps {
    item: Offer;
    onPress: () => void;
}

// Composant Card
export const CustomCard: React.FC<CardProps> = ({ item, onPress }) => {

    const { width, height } : ScaledSize = useWindowDimensions();

    // Définition des breakpoints
    const isSmallMobile = width >= 320 && width < 374;
    const isMediumMobile = width >= 375 && width < 424;
    const isLargeMobile = width >= 425 && width < 1024;
    
    return(
        <View style={customCardStyles.card}>
            {item.image && 
                <Image 
                    source={require('../../assets/images/immeuble.jpeg')} 
                    style={[
                        {
                            width: isSmallMobile ? width/2.5 : isMediumMobile ? width/2.4 : isLargeMobile ? width/2.3 : width/2.2,
                            height: isSmallMobile ? height/8 : isMediumMobile ? height/7 : isLargeMobile ? height/75 : height/8,
                        },
                        customCardStyles.cardImage
                    ]} 
                />
            }
            <Text variant={isSmallMobile ? 'titleSmall' : isMediumMobile ? 'titleMedium' : 'titleLarge'} style={customCardStyles.cardTitle}>{item.name}</Text>
            <Text variant={isSmallMobile ? 'bodySmall' : isMediumMobile ? 'bodyMedium' : 'bodyLarge'} style={customCardStyles.cardDescription} numberOfLines={2}>{item.description}</Text>
            <Text variant={isSmallMobile ? 'labelSmall' : isMediumMobile ? 'labelMedium' : 'labelLarge'} style={customCardStyles.cardPrice}>{item.price} €</Text>
            <CustomContainedButton
                label="Voir details"
                onPress={onPress}
                styles={{height: isSmallMobile ? height/16 : isMediumMobile ? height/20 : isLargeMobile ? height/22 : height/24}}
                labelStyle={{fontSize: isSmallMobile ? 11 : isMediumMobile ? 16 : isLargeMobile ? 20 : 24}}
            />
        </View>
);}

