import React from "react";
import { Image, View } from "react-native";
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
export const CustomCard: React.FC<CardProps> = ({ item, onPress }) => (
    <View style={customCardStyles.card}>
        {item.image && <Image source={require('../../assets/images/immeuble.jpeg')} style={customCardStyles.cardImage} />}
        <Text style={customCardStyles.cardTitle}>{item.name}</Text>
        <Text style={customCardStyles.cardDescription} numberOfLines={2}>{item.description}</Text>
        <Text style={customCardStyles.cardPrice}>{item.price} €</Text>
        <CustomContainedButton
            label="Voir details"
            onPress={onPress}
        />
    </View>
);

