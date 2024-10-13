import React from "react";
import { FlatList, Image, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import CalendarStrip from 'react-native-calendar-strip';


interface DataProps {
    name: string;
    place: string;
    reservationNumber: string;
}

const DATA: DataProps[] = [
    {   name: 'Residence Meublee',  place: '2 plateaux, Abidjan', reservationNumber: '04'},
    {   name: 'Immeuble Bogo2',  place: 'Abobo, Abidjan', reservationNumber: '02'},
    {   name: 'Immeuble Bogo3',  place: 'Riverra, Abidjan', reservationNumber: '32'},
    {   name: 'Immeuble Bogo4',  place: 'Cocody, Abidjan', reservationNumber: '10'},
    {   name: 'Immeuble Bogo5',  place: 'Aquaville, Abidjan', reservationNumber: '11'},
    {   name: 'Immeuble Bogo6',  place: 'Yopougon, Abidjan', reservationNumber: '25'},
    {   name: 'Immeuble Bogo7',  place: 'Treicheville, Abidjan', reservationNumber: '01'},
];

const renderReservationCard = () => (
    <View 
        style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            columnGap: 10,
            padding: 10,
            borderRadius: 8,
            elevation: 3,
            shadowColor: '#d3d3d3'
        }}
    >
        <Image
            source={require('../../assets/images/login.jpeg')}
            style={{
                width: 80,
                height: 80,
                borderRadius: 16
            }}
            resizeMode="cover"
        />
        <View style={{padding: 5}}>
            <Text
                variant="bodyLarge"
                style={{
                    fontWeight: 'bold'
                }}
            >
                Residence Meublee
            </Text>

            <Text>
                2 plateaux d'abidjan
            </Text>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 20,
                    columnGap: 40,
                    padding: 5 
                }}
            >
                <Text
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
                        borderRadius: 8
                    }}
                    labelStyle={{
                        color: '#ffffff',
                        fontWeight: 'bold'
                    }}
                >
                    Voir
                </Button>
            </View>
            
        </View>
    </View>
);

function HistoricsScreen() {
    return(
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: '#fcfcfc',
            }}
        >
            
            <CalendarStrip
                updateWeek={true}
                style={{height:200, paddingTop: 20, paddingBottom: 10}}
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
                    marginHorizontal: 10
                }}
            />
        </SafeAreaView>
    );
}

export default HistoricsScreen;