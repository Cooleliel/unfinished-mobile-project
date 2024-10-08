import React from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";
import { Button, IconButton, Text, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

function DetailModeScreen() {
    return(
        <SafeAreaView style={{flex: 1}}>
            <ImageBackground
                source={require('../../assets/images/login.jpeg')}
                style={{flex: 1 }}
                imageStyle={{resizeMode: 'contain', top: '-45%'}}
            >
                <View style={styles.container}>
                    
                    <IconButton
                        mode="outlined"
                        icon="arrow-left-thin"
                        size={30}
                        containerColor="#ffffff"
                        iconColor="#000000"
                        style={{
                            marginTop: '15%',
                            marginLeft: '10%'
                        }}
                    />
                    
                    <View style={styles.subContainer}>
                        <View style={{flex: 0.2, marginVertical: 15, marginHorizontal: 40, display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                            <Image
                                source={require('../../assets/images/banner.jpg')}
                                style={{
                                    width: '30%', 
                                    height: '80%',
                                    borderWidth: 2,
                                    borderColor: '#2E8B57', 
                                    borderRadius: 16
                                }}
                                resizeMode="cover"
                            />
                            <Image
                                source={require('../../assets/images/banner.jpg')}
                                style={{
                                    width: '30%', 
                                    height: '80%',
                                    borderWidth: 2,
                                    borderColor: '#2E8B57', 
                                    borderRadius: 16
                                }}
                                resizeMode="cover"
                            />
                            <View
                                style={{
                                    width: '30%', 
                                    height: '80%', 
                                    borderRadius: 16,
                                    backgroundColor: 'orange'
                                }}
                            >
                                <Text variant="headlineMedium" style={{margin: 'auto', fontWeight: 'bold', color: '#ffffff'}}>
                                    +10
                                </Text>
                            </View>
                        </View>

                        <View style={[
                            styles.subContainer, 
                            {
                                flex: 1, 
                                backgroundColor: '#ffffff', 
                                paddingTop: 10, 
                                paddingHorizontal: 40,
                                display: 'flex',
                                justifyContent: 'space-around'                       
                            }
                            ]}
                        >

                            <Text 
                                style={{
                                    fontWeight: 'bold'
                                }}
                                variant="titleMedium"
                            >
                                Immeuble BOGO / BOBO DSS | BF
                            </Text>

                            <View>
                                <Text 
                                    style={{
                                        fontWeight: 'bold',
                                        textTransform: "uppercase"
                                    }}
                                    variant="titleMedium"
                                >
                                    Description
                                </Text>
                                <Text variant="bodyMedium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, iure. Fugiat rem id tenetur, officia voluptas beatae? At excepturi voluptatibus delectus. Ipsa iusto id deserunt corporis aperiam vel eligendi labore?</Text>
                            </View>

                            <View>
                                <Text 
                                    style={{
                                        fontWeight: 'bold',
                                        textTransform: "uppercase"
                                    }}
                                    variant="titleMedium"
                                >
                                    Adresse
                                </Text>
                                <View style={{display: 'flex', flexDirection: 'row', columnGap: 20}}>
                                    <Icon name="camera" size={20}/>
                                    <Text variant="bodyMedium">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                                </View>
                                <View style={{display: 'flex'}}>
                                    <Text 
                                        variant="bodyLarge" 
                                        style={{
                                            color: '#2E8B57',
                                            fontWeight: 'bold',
                                            alignSelf: 'flex-end'
                                        }}
                                    >
                                        Cliquez ici
                                    </Text>
                                    <Image
                                        source={require('../../assets/images/maps.webp')}
                                        style={{
                                            width: '100%', 
                                            height: 125,
                                            borderRadius: 8
                                        }}
                                        resizeMode="cover"
                                    />
                                </View>
                            </View>

                            <View
                                style={{
                                    position: 'absolute',
                                    bottom: 20,
                                    backgroundColor: '#ffffff',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-around',
                                    width: '110%',
                                    elevation: 3,
                                    padding: 8,
                                    borderRadius: 8,
                                    marginVertical: 0,
                                    marginHorizontal: 25
                                }}
                            >
                                <Text 
                                    style={{
                                        fontWeight: 'bold',
                                    }}
                                    variant="bodyLarge"
                                >
                                    120.000 / Mois
                                </Text>

                                <View 
                                    style={{
                                        width: '55%',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between'
                                    }}
                                >
                                    <Icon name="camera" size={25}/>
                                    <Icon name="camera" size={25}/>
                                    <Button
                                        mode="text" 
                                        buttonColor="#2E8B57"
                                        compact
                                        contentStyle={{
                                            width: '100%',
                                            height: '100%'
                                        }}
                                        textColor="#fff"
                                        style={{borderRadius: 5}}
                                        labelStyle={{fontWeight: 'bold'}}
                                    >
                                        Reserver
                                    </Button>
                                </View>
                            </View>

                        </View>
                        
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

export default DetailModeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        display: 'flex',
        justifyContent: 'space-between'
    },
    subContainer: {
        flex: 0.78,
        backgroundColor: '#000C1F',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
    },
    formContainer: {
        flex: 1,
        marginVertical: 5
    },
    inputCommonStyles: {
        borderWidth: 2,
        borderColor: "#2E8B57",
        marginTop: 10,
        backgroundColor: "#fff",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10
    }
});