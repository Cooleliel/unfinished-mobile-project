import React from "react";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Button, Icon, Text } from "react-native-paper";

function SettingsScreen() {
    return(
        <SafeAreaView style={{
            flex: 1, 
            backgroundColor: '#FCFCFC',
            display: 'flex',
            paddingVertical: 30,
            rowGap: 25
        }}>
            <View
                style={{
                    //borderWidth: 2,
                    //borderColor: 'red',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: "center"
                }}
            >
                <Image 
                    source={require('../../assets/images/sangimmo.webp')} 
                    style={{
                        width: 200, 
                        height: 45
                    }} 
                    resizeMode="contain"
                />
            </View>

            <View
                style={{
                    backgroundColor: '#2E8B57',
                    paddingVertical: 20,
                    paddingHorizontal: 50,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    columnGap: 20
                }}
            >
                <Icon
                    source="camera"
                    size={25}
                />
                <Text 
                    variant="titleLarge"
                    style={{
                        fontWeight: 'bold',
                        color: '#ffffff'
                    }}
                >
                    Parametres
                </Text>
            </View>

            <View
                style={{
                    paddingVertical: 20,
                    paddingHorizontal: 50,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    columnGap: 20
                }}
            >
                <View
                    style={{
                        borderWidth: 2,
                        borderColor: '#2E8B57',
                        borderRadius: 999
                    }}
                >
                    <Avatar.Image
                        source={require('../../assets/images/avatar.webp')}
                        size={70}
                    />
                </View>
                
                <View>
                    <Text 
                        variant="bodyLarge"
                        style={{
                            fontWeight: 'bold',
                            color: '#000000', 
                            
                        }}
                    >
                        Noella DABIRE
                    </Text>
                    <View style={{backgroundColor: '#2E8B57', width: '115%', height: 5, borderRadius: 99}}></View>

                </View>

            </View>

            <View
                style={{
                    marginTop: '-10%',
                    paddingVertical: 20,
                    paddingHorizontal: 50,
                    display: 'flex',
                    rowGap: 10
                }}
            >

                <View>
                    <Text
                        style={{
                            fontWeight: 'bold'
                        }}
                    >
                        Support
                    </Text>
                    <View
                        style={{
                            backgroundColor: '#ffffff',
                            padding: 10,
                            elevation: 0.5,
                            borderRadius: 8
                        }}
                    >
                        <Button
                            mode="text"
                            compact={true}
                            contentStyle={{cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', columnGap: 20}}
                            icon="phone"
                            labelStyle={{fontWeight: 'bold', color: '#000000'}}
                            
                        >
                            Appelez le service client
                        </Button>

                        <Button
                            mode="text"
                            compact={true}
                            contentStyle={{cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', columnGap: 20}}
                            icon="message"
                            labelStyle={{fontWeight: 'bold', color: '#000000'}}
                            
                        >
                            Ecrivez au service client
                        </Button>
                        
                    </View>

                </View>

                <View>
                    <Text
                        style={{
                            fontWeight: 'bold'
                        }}
                    >
                        Profil d'utilisateur
                    </Text>
                    <View
                        style={{
                            backgroundColor: '#ffffff',
                            padding: 10,
                            elevation: 0.5,
                            borderRadius: 8
                        }}
                    >
                        <Button
                            mode="text"
                            compact={true}
                            contentStyle={{cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', columnGap: 20}}
                            icon="phone"
                            labelStyle={{fontWeight: 'bold', color: '#000000'}}
                            
                        >
                            Voir le profil
                        </Button>
                    </View>

                </View>

                <View>
                    <Text
                        style={{
                            fontWeight: 'bold'
                        }}
                    >
                        Termes et conditions
                    </Text>
                    <View
                        style={{
                            backgroundColor: '#ffffff',
                            padding: 10,
                            elevation: 0.5,
                            borderRadius: 8
                        }}
                    >
                        <Button
                            mode="text"
                            compact={true}
                            contentStyle={{cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', columnGap: 20}}
                            icon="phone"
                            labelStyle={{fontWeight: 'bold', color: '#000000'}}
                            
                        >
                            Termes d'utlisations
                        </Button>

                        <Button
                            mode="text"
                            compact={true}
                            contentStyle={{cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', columnGap: 20}}
                            icon="message"
                            labelStyle={{fontWeight: 'bold', color: '#000000'}}
                            
                        >
                            Confidentialite de l'application
                        </Button>
                        
                    </View>

                </View>

            </View>

        </SafeAreaView>
    );
}

export default SettingsScreen;