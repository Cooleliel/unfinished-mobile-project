import React from "react";
import { FlatList, Image, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

interface TabData {
    name: string;
    //component: React.ComponentType<any>;
    label: string;
    iconName: string;
};

interface DataProps {
    name: string;
    town: string;
    price: string;
}

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
                top: '35%',
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
            
            <View>
                <Button
                    mode="text"
                    labelStyle={{
                        color: '#ffffff',
                        fontWeight: 'bold'
                    }}
                    style={{
                        backgroundColor: '#2E8B57',
                        borderRadius: 8,
                    }}
                >
                    Voir
                </Button>
            </View>
        </View>
    </View>
);

const GenericScreen = ({ item } : {item: TabData}) => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: '#fcfcfc'
            }}
        >
            <View
                style={{
                    display: 'flex',
                    rowGap: 10,
                    paddingVertical: 10,
                    flex: 1
                }}
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
            </View>
        </SafeAreaView>
        
    );
};

export default GenericScreen;