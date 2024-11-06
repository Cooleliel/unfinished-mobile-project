import React from "react";
import { FlatList, Image, ScaledSize, useWindowDimensions, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import CalendarStrip from 'react-native-calendar-strip';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";


interface DataProps {
    name: string;
    place: string;
    reservationNumber: string;
}

type RootStackParamList = {
    DetailMode: undefined;
    Calendar: undefined
};

type CalendarNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'Calendar'
>;

const DATA: DataProps[] = [
    {   name: 'Residence Meublee',  place: '2 plateaux, Abidjan', reservationNumber: '04'},
    {   name: 'Immeuble Bogo2',  place: 'Abobo, Abidjan', reservationNumber: '02'},
    {   name: 'Immeuble Bogo3',  place: 'Riverra, Abidjan', reservationNumber: '32'},
    {   name: 'Immeuble Bogo4',  place: 'Cocody, Abidjan', reservationNumber: '10'},
    {   name: 'Immeuble Bogo5',  place: 'Aquaville, Abidjan', reservationNumber: '11'},
    {   name: 'Immeuble Bogo6',  place: 'Yopougon, Abidjan', reservationNumber: '25'},
    {   name: 'Immeuble Bogo7',  place: 'Treicheville, Abidjan', reservationNumber: '01'},
];


function Calendar() {

    const { width, height } : ScaledSize = useWindowDimensions();

    // Définition des breakpoints
    const isSmallMobile = width >= 320 && width < 374;
    const isMediumMobile = width >= 375 && width < 424;
    const isLargeMobile = width >= 425 && width < 1024;

    const navigation = useNavigation<CalendarNavigationProp>();

    const renderReservationCard = () => (
        <View 
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                columnGap: isSmallMobile ? 5 : 10,
                padding: isSmallMobile ? 5 : 10,
                borderRadius: 8,
                elevation: 3,
                shadowColor: '#d3d3d3'
            }}
        >
            <Image
                source={require('../../assets/images/login.jpeg')}
                style={{
                    width: isSmallMobile ? width/5 : isMediumMobile ? width/3.5 : isLargeMobile ? width/3 : width/2.5,
                    height: isSmallMobile ? height/9 : isMediumMobile ? height/9 : isLargeMobile ? height/8 : height/7,
                    borderRadius: 16
                }}
                resizeMode="cover"
            />
            <View style={{padding: isSmallMobile ? 3 : 5}}>
                <Text
                    variant={isSmallMobile ? 'bodySmall' : isMediumMobile ? 'bodyMedium' : 'bodyLarge'}
                    style={{
                        fontWeight: 'bold'
                    }}
                >
                    Residence Meublee
                </Text>
    
                <Text variant={isSmallMobile ? 'labelSmall' : isMediumMobile ? 'labelMedium' : 'labelLarge'}>
                    2 plateaux d'abidjan
                </Text>
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: isSmallMobile ? 10 : 20,
                        columnGap: isSmallMobile ? 20 : 40,
                        padding: isSmallMobile ? 3 : 5 
                    }}
                >
                    <Text
                        variant={isSmallMobile ? 'labelSmall' : isMediumMobile ? 'labelMedium' : 'labelLarge'}
                        style={{
                            color: '#a3a3a3'
                        }}
                    >
                        Reservation 04
                    </Text>
                    <Button
                        mode="text"
                        style={{
                            backgroundColor: '#2E8B57',
                            borderRadius: 8,
                            height: isSmallMobile ? height/16 : isMediumMobile ? height/22 : isLargeMobile ? height/24 : height/26
                        }}
                        labelStyle={{
                            color: '#ffffff',
                            fontWeight: 'bold',
                            fontSize: isSmallMobile ? 11 : isMediumMobile ? 16 : isLargeMobile ? 18 : 22
                        }}
                        onPress={()=> navigation.navigate('DetailMode')}
                    >
                        Voir
                    </Button>
                </View>
                
            </View>
        </View>
    );

    return(
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: '#fcfcfc',
            }}
        >
            
            <CalendarStrip
                updateWeek={true}
                style={{
                    height:isSmallMobile ? height/6.5 : isMediumMobile ? height/6 : isLargeMobile ? height/5.5 : height/5, 
                    paddingTop: isSmallMobile ? 10 : 20, 
                    paddingBottom: isSmallMobile ? 5 : 10
                }}
                calendarColor={'#2E8B57'}
                calendarHeaderStyle={{color: 'white'}}
                dateNumberStyle={{color: 'white'}}
                dateNameStyle={{color: 'white'}}
                iconContainer={{flex: 0.1}}
            />
            <FlatList
                data={DATA}
                renderItem={renderReservationCard}
                keyExtractor={(item) => item.name}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    marginHorizontal: isSmallMobile ? 5 : 10
                }}
            />
        </SafeAreaView>
    );
}

export default Calendar;