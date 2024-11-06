import React from "react";
import { FlatList, Image, ScaledSize, useWindowDimensions, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { baseStyles } from "../../styles/baseStyles";
import { CustomContainedButton, CustomTextButton } from "../customButton";
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

    const { width, height } : ScaledSize = useWindowDimensions();

    // Définition des breakpoints
    const isSmallMobile = width >= 320 && width < 374;
    const isMediumMobile = width >= 375 && width < 424;
    const isLargeMobile = width >= 425 && width < 1024;

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
                    width: isSmallMobile ? width/1.8 : isMediumMobile ? width/1.5 : isLargeMobile ? width/1.3 : width/1.1,
                    height: isSmallMobile ? height/6 : isMediumMobile ? height/5 : isLargeMobile ? height/4.5 : height/4,                            
                    borderRadius:16
                }}
            />
            <View 
                style={{
                    position: 'absolute',
                    top: '45%',
                    width: isSmallMobile ? width/1.8 : isMediumMobile ? width/1.5 : isLargeMobile ? width/1.3 : width/1.1,
                    height: isSmallMobile ? height/8 : isMediumMobile ? height/7 : isLargeMobile ? height/7.5 : height/8, 
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
                            fontSize: isSmallMobile ? 14 : isMediumMobile ? 22 : 32
                        }}
                        
                    >
                        Immeuble BOGO
                    </Text>
                    <Text style={{fontSize: isSmallMobile ? 11 : isMediumMobile ? 18 : 24}}>Bobo-Dioulasso</Text>
                    <Text style={{fontSize: isSmallMobile ? 11 : isMediumMobile ? 18 : 24, fontWeight: 'bold'}}>120 000 FCFA / Mois</Text>
                </View>
                <CustomTextButton
                    label="Voir"
                    labelStyle={{
                        color: '#ffffff',
                        fontWeight: 'bold',
                        fontSize: isSmallMobile ? 11 : isMediumMobile ? 16 : isLargeMobile ? 18 : 22
                    }}
                    styles={{
                        height: isSmallMobile ? height/16 : isMediumMobile ? height/22 : isLargeMobile ? height/24 : height/26,
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
                paddingVertical: isSmallMobile ? 5 : 10,
            }]}
        >
            
            <Text 
                style={{
                    fontWeight: 'bold',
                    marginHorizontal: 30
                }}
                variant={isSmallMobile ? 'bodyMedium' : isMediumMobile ? 'headlineSmall' : 'displayMedium'}
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