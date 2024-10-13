import React from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";
import { Button, IconButton, Text, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/FontAwesome';

function ConfirmationTontineScreen() {
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
                                flex: 0.93, 
                                backgroundColor: '#FCFCFC', 
                                paddingTop: 30, 
                                paddingHorizontal: 40,
                                display: 'flex',
                            }
                            ]}
                        >
                            <View
                                style={{
                                    flex: 0.68,
                                    borderWidth: 2,
                                    borderColor: '#2E8B57',
                                    padding: 16,
                                    borderRadius: 40,
                                    display: 'flex',
                                    rowGap: 20
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
                                        03 PLACES
                                    </Text>
                                </View>

                                <View 
                                    style={{
                                        
                                        display: "flex",
                                        rowGap: 15
                                    }}
                                >
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
                                    <Text variant="bodyMedium" style={{textAlign: "center"}}>Choisissez le nombre de places que vous souhaitez pour cette tontine</Text> 
                                </View>

                                <View 
                                    style={{
                                        display: "flex",
                                        rowGap: 20
                                    }}
                                >
                                    <TextInput
                                        inputMode="numeric"
                                        style={styles.inputCommonStyles}
                                        underlineColor="transparent"
                                        activeUnderlineColor="transparent"
                                        autoCapitalize="none" 
                                        autoComplete="off" 
                                        autoCorrect={false} 
                                        contentStyle={{textAlign: "center"}}
                                        mode="flat" 
                                        placeholder="Nombre de place" 
                                        placeholderTextColor={'#d3d3d3'}
                                    />

                                    <Button
                                        mode="contained" 
                                        buttonColor="#2E8B57"
                                        textColor="#fff"
                                        uppercase
                                        style={{borderRadius: 10, height: 50, display: 'flex', justifyContent: 'center'}}
                                        labelStyle={{fontWeight: 'bold'}}
                                        onPress={() => console.log("Recevoir le code")}
                                    >
                                        Confirmer
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

export default ConfirmationTontineScreen;

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