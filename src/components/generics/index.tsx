import React from "react";
import { FlatList, Image, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { baseStyles } from "../../styles/baseStyles";
import { CustomTextButton } from "../customButton";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

interface TabData {
    name: string;
    label: string;
    iconName: string;
};

interface DataProps {
    name: string;
    town: string;
    price: string;
}

type RootStackParamList = {
    DetailMode: undefined;
    Generic: undefined
};

type GenericNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'Generic'
>;


const DATA: DataProps[] = [
    {   name: 'Immeuble Bogo1',  town: 'Bobo-Dioulasso', price: '120 000 FCFA / Mois'},
    {   name: 'Immeuble Bogo2',  town: 'Bobo-Dioulasso', price: '120 000 FCFA / Mois'},
    {   name: 'Immeuble Bogo3',  town: 'Bobo-Dioulasso', price: '120 000 FCFA / Mois'},
    {   name: 'Immeuble Bogo4',  town: 'Bobo-Dioulasso', price: '120 000 FCFA / Mois'},
    {   name: 'Immeuble Bogo5',  town: 'Bobo-Dioulasso', price: '120 000 FCFA / Mois'},
    {   name: 'Immeuble Bogo6',  town: 'Bobo-Dioulasso', price: '120 000 FCFA / Mois'},
    {   name: 'Immeuble Bogo7',  town: 'Bobo-Dioulasso', price: '120 000 FCFA / Mois'},
    {   name: 'Immeuble Bogo8',  town: 'Bobo-Dioulasso', price: '120 000 FCFA / Mois'},
    {   name: 'Immeuble Bogo9',  town: 'Bobo-Dioulasso', price: '120 000 FCFA / Mois'},
    {   name: 'Immeuble Bogo10',  town: 'Bobo-Dioulasso', price: '120 000 FCFA / Mois'},
];



const Generic = ({ item } : {item: TabData}) => {

    const navigation = useNavigation<GenericNavigationProp>();

    const   renderImageCard = () => (
        <View 
            style={{
                marginHorizontal: 10        
            }}
        >
            <Image
                source={require('../../assets/images/immeuble.jpeg')}
                resizeMode="cover"
                style={{
                    width: 250,
                    height: 150,                            
                    borderRadius:16
                }}
            />
            <View 
                style={{
                    position: 'absolute',
                    top: '45%',
                    width: 250,
                    borderRadius:16,
                    backgroundColor: '#FFFFFF',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    columnGap: 5,
                    paddingHorizontal: 10,
                    paddingVertical: 20,
                    elevation: 3
                }}
            >
                <View>
                    <Text
                        style={{
                            fontWeight: 'bold',
                        }}
                        variant="bodyLarge"
                    >
                        Immeuble BOGO
                    </Text>
                    <Text variant="bodyMedium">Bobo-Dioulasso</Text>
                    <Text variant="bodyMedium" style={{fontWeight: 'bold'}}>120 000 FCFA / Mois</Text>
                </View>
                <CustomTextButton
                    label="Voir"
                    labelStyle={{
                        color: '#ffffff',
                        fontWeight: 'bold'
                    }}
                    styles={{
                        backgroundColor: '#2E8B57',
                        borderRadius: 8
                    }}
                    onPress={() => navigation.navigate('DetailMode')}
                />
                
            </View>
        </View>
    );

    return (
        <SafeAreaView
            style={[baseStyles.container, {
                rowGap: 10,
                paddingVertical: 10,
            }]}
        >
            
            <Text 
                style={{
                    fontWeight: 'bold',
                    marginHorizontal: 30
                }}
                variant="titleLarge"
            >
                Disponible
            </Text>
            <FlatList
                data={DATA}
                renderItem={renderImageCard}
                keyExtractor={(item) => item.name}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </SafeAreaView>
        
    );
};

export default Generic;