import React from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";
import { Button, IconButton, Text, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/FontAwesome';

function DetailTontineScreen() {
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
                    
                    <View 
                        style={[
                            styles.subContainer,
                            {
                                display: 'flex',
                                justifyContent: 'flex-end'
                            }
                        ]}
                    >

                        <View style={[
                            styles.subContainer, 
                            {
                                flex: 0.9, 
                                backgroundColor: '#ffffff', 
                                paddingTop: 10, 
                                paddingHorizontal: 40,
                                display: 'flex',
                                justifyContent: 'space-around'                       
                            }
                            ]}
                        >
                            <View 
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}
                            >
                                <Text 
                                    style={{
                                        fontWeight: 'bold'
                                    }}
                                    variant="titleLarge"
                                >
                                    Tontine Maison
                                </Text >
                                <Text
                                    variant="bodySmall"
                                    style={{
                                        color: '#2E8B57',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    03 PLACES
                                </Text>
                            </View>

                            <View 
                                style={{
                                    display: "flex",
                                    rowGap: 10
                                }}
                            >
                                <Text 
                                    style={{
                                        fontWeight: 'bold',
                                        textTransform: "uppercase"
                                    }}
                                    variant="titleMedium"
                                >
                                    Description
                                </Text>
                                <Text variant="bodyMedium" style={{textAlign: "justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, iure. Fugiat rem id tenetur, officia voluptas beatae? At excepturi voluptatibus delectus. Ipsa iusto id deserunt corporis aperiam vel eligendi labore?</Text>
                            </View>

                            <View 
                                style={{
                                    
                                    display: "flex",
                                    rowGap: 10
                                }}
                            >
                                <Text 
                                    style={{
                                        fontWeight: 'bold',
                                        textTransform: "uppercase",
                                        textAlign: "justify"
                                    }}
                                    variant="titleMedium"
                                >
                                    Participants
                                </Text>

                                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <View
                                        style={{
                                            width: '50%',
                                            display: 'flex', 
                                            flexDirection: 'row', 
                                            columnGap: 15,
                                            alignItems: 'center'
                                        }}
                                    >
                                        <Icon name="camera" size={20}/>
                                        <Text variant="bodyMedium" style={{textAlign: "justify"}}>10 places</Text>
                                    </View>
                                    <Text variant="bodyMedium" style={{textAlign: "justify"}}>10 000 / Mois</Text>
                                </View>

                                <View style={{display: 'flex', flexDirection: 'row', columnGap: 15, alignItems: 'center'}}>
                                    <Icon name="camera" size={20}/>
                                    <Text variant="bodyMedium" style={{textAlign: "justify"}}>Cliquez ici pour voir les conditions</Text>    
                                </View>

                                <View style={{display: 'flex', flexDirection: 'row', columnGap: 15, alignItems: 'center'}}>
                                    <Icon name="camera" size={20}/>
                                    <Text variant="bodyMedium" style={{textAlign: "justify"}}>BOBO 2010 en face de NIBA TIC 300m Mosquee de Hadja</Text>    
                                </View>
                                
                            </View>

                        </View>

                        <View
                            style={{
                                
                                backgroundColor: '#ffffff',
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-around',
                                width: '100%',
                                height: '15%',
                                borderTopWidth: 2,
                                borderTopColor: '#f1f1f1',
                                elevation: 2,
                                paddingHorizontal: 30
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
                                        paddingHorizontal: 16
                                    }}
                                    textColor="#fff"
                                    style={{borderRadius: 5}}
                                    labelStyle={{fontWeight: 'bold'}}
                                >
                                    Participer
                                </Button>
                            </View>
                        </View>
                        
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

export default DetailTontineScreen;

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