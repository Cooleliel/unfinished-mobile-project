import React from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";
import { Button, IconButton, Text, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/FontAwesome';

function DetailMaTontineScreen() {
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
                                backgroundColor: '#FCFCFC', 
                                paddingTop: 10, 
                                paddingHorizontal: 40,
                                display: 'flex',
                                justifyContent: 'center'                    
                            }
                            ]}
                        >
                            <View
                                style={{
                                    flex: 0.9,
                                    borderWidth: 2,
                                    borderColor: '#2E8B57',
                                    padding: 16,
                                    borderRadius: 40,
                                    display: 'flex',
                                    rowGap: 10
                                }}
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
                                        EN COURS
                                    </Text>
                                </View>

                                <View 
                                    style={{
                                        
                                        display: "flex",
                                        rowGap: 15
                                    }}
                                >
                                    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>

                                        <View>
                                            <Text 
                                                style={{
                                                    fontWeight: 'bold',
                                                    textAlign: "justify"
                                                }}
                                                variant="bodyMedium"
                                            >
                                                Debut le
                                            </Text>

                                            <Text 
                                                style={{
                                                    textAlign: "justify"
                                                }}
                                                variant="bodySmall"
                                            >
                                                25 Jul 2024 / 13:39PM
                                            </Text>
                                        </View>

                                        <View>
                                            <Text 
                                                style={{
                                                    fontWeight: 'bold',
                                                    textAlign: "justify"
                                                }}
                                                variant="bodyMedium"
                                            >
                                                Fin le
                                            </Text>

                                            <Text 
                                                style={{
                                                    textAlign: "justify"
                                                }}
                                                variant="bodySmall"
                                            >
                                                25 Jul 2024 / 13:39PM
                                            </Text>
                                        </View>

                                    </View>

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
                                    <Text variant="bodyMedium" style={{textAlign: "center"}}>Veuillez a respecter les conditions de la tontine</Text> 
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

                            </View>

                        </View>

                        <View
                            style={{
                                
                                backgroundColor: '#ffffff',
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '100%',
                                height: '15%',
                                paddingHorizontal: 30
                            }}
                        >
                            <View 
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    columnGap: 20
                                }}
                            >
                                <Icon name="camera" size={25}/>

                                <Icon name="camera" size={25}/>
                            </View>

                        </View>

                    </View>

                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

export default DetailMaTontineScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        display: 'flex',
        justifyContent: 'space-between'
    },
    subContainer: {
        flex: 0.78,
        backgroundColor: '#2E8B57',
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