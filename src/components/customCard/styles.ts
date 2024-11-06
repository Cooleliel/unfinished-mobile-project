import { StyleSheet } from "react-native";
import { baseStyles } from "../../styles/baseStyles";

export const customCardStyles = StyleSheet.create({
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
        borderRadius: 10,
        marginBottom: 10,
    },
    cardTitle: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    cardDescription: {
        color: '#666',
        marginBottom: 5,
    },
    cardPrice: {
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