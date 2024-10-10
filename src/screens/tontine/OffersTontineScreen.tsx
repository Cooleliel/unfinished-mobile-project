import React, { useState } from "react";
import { FlatList, Image, Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Button, Icon, Text } from "react-native-paper";


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
    onPress: OnPressHandler;
}

// Composant Card
const Card: React.FC<CardProps> = ({ item, onPress }) => (
    <View style={styles.card}>
        {item.image && <Image source={require('../../assets/images/immeuble.jpeg')} style={styles.cardImage} />}
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Text style={styles.cardDescription} numberOfLines={2}>{item.description}</Text>
        <Text style={styles.cardPrice}>{item.price} €</Text>
        <Pressable style={styles.cardButton} onPress={() => onPress(item)}>
            <Text style={styles.cardButtonText}>Voir détails</Text>
        </Pressable>
    </View>
);

const renderItem = ({ item } : {item: Offer}) => (
    <Card 
        item={item} 
        onPress={(item) => console.log('Voir détails de', item.name)}
    />
);

function OffersTontineScreen() {

    const [offers, setOffers] = useState<Offer[]>([
        { id: '1', name: 'Tontine A', description: 'Description de la tontine A', price: 100, image: '../../assets/images/avatar.webp' },
        { id: '2', name: 'Tontine B', description: 'Description de la tontine B', price: 200, image: '../../assets/images/avatar.webp' },
        { id: '3', name: 'Tontine A', description: 'Description de la tontine A', price: 100, image: '../../assets/images/avatar.webp' },
        { id: '4', name: 'Tontine B', description: 'Description de la tontine B', price: 200, image: '../../assets/images/avatar.webp' },
        { id: '5', name: 'Tontine A', description: 'Description de la tontine A', price: 100, image: '../../assets/images/avatar.webp' },
        { id: '6', name: 'Tontine B', description: 'Description de la tontine B', price: 200, image: '../../assets/images/avatar.webp' },
    ]);
    
    return (
        <SafeAreaView style={{flex: 1}}>
            <FlatList
                data={offers}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2}
                contentContainerStyle={styles.flatListContent}
            />
        </SafeAreaView>
    );
}

export default OffersTontineScreen;

const styles = StyleSheet.create({
    flatListContent: {
        padding: 5,
    },
    card: {
        flex: 1,
        margin: 5,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    cardImage: {
        width: '100%',
        height: 120,
        borderRadius: 10,
        marginBottom: 10,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    cardDescription: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },
    cardPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2E8B57',
        marginBottom: 10,
    },
    cardButton: {
        backgroundColor: '#2E8B57',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    cardButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});