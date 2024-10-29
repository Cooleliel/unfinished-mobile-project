import React, { useState } from "react";
import { FlatList, Image, Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Button, Icon, Text } from "react-native-paper";
import { CustomCard } from "../../components/customCard";
import { baseStyles } from "../../styles/baseStyles";
import { tontineSectionStyles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";


interface Offer {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
}

type RootStackParamList = {
    DetailTontine: undefined;
    TontineSection: undefined
};

type TontineSectionNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'TontineSection'
>;

function TontineSection({data} : {data : Offer[]}) {

    const navigation = useNavigation<TontineSectionNavigationProp>();

    const renderItem = ({ item } : {item: Offer}) => (
        <CustomCard 
            item={item} 
            onPress={() => navigation.navigate('DetailTontine')}
        />
    );
    
    return (
        <SafeAreaView style={[baseStyles.container]}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2}
                contentContainerStyle={[tontineSectionStyles.flatlistContentContainer]}
            />
        </SafeAreaView>
    );
}

export default TontineSection;