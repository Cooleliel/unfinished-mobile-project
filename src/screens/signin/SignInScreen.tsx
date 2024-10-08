import React, { useState } from "react";

import {View, StyleSheet, Image, ImageBackground} from 'react-native';
import {Button, Text, TextInput } from 'react-native-paper';
import { SafeAreaView } from "react-native-safe-area-context";

function SignInScreen() {

    const [password, setPassword] = useState<string>("");
    const onChangePassword = (password: string) => setPassword(password);
    const [checked, setChecked] = useState<boolean>(false);

    const toggleChecked = () => {
        setChecked(prevState => !prevState);
    };

    return(
        <SafeAreaView style={{flex: 1}}>
            <ImageBackground
                source={require('../../assets/images/login.jpeg')}
                style={{flex: 1 }}
                imageStyle={{resizeMode: 'contain', top: '-45%'}}
            >
                <View style={styles.container}>
                    <View style={styles.screentitleContainer}>
                        <Text variant="headlineLarge" style={styles.screenTitleText}>Connexion</Text>
                    </View>
                    
                    <View style={styles.subContainer}>
                        <View style={styles.formContainer}>
                            <View style={styles.logoContainer}>
                                <Image
                                    source={require('../../assets/images/sangimmo.png')}
                                    style={{width: 250, height: 250}}
                                />
                            </View>
                            
                            <TextInput 
                                style={styles.inputCommonStyles}
                                underlineColor="transparent"
                                activeUnderlineColor="transparent"
                                autoCapitalize="none" 
                                autoComplete="off" 
                                autoCorrect={false} 
                                left={
                                    <TextInput.Icon icon={() => (
                                        <View style={{borderBottomWidth: 2, borderBottomColor: "#2E8B57"}}>
                                            <Text style={{fontWeight: "bold", color: "#2E8B57", fontSize: 24}}>***</Text>
                                        </View>)
                                    }/>
                                }
                                contentStyle={{textAlign: "center"}}
                                mode="flat" 
                                placeholder="Telephone" 
                                placeholderTextColor={'#d3d3d3'}
                                value={password}
                                onChangeText={onChangePassword}
                            />

                            <TextInput 
                                style={styles.inputCommonStyles}
                                underlineColor="transparent"
                                activeUnderlineColor="transparent"
                                autoCapitalize="none" 
                                autoComplete="off" 
                                autoCorrect={false} 
                                left={
                                    <TextInput.Icon icon={() => (
                                        <View style={{borderBottomWidth: 2, borderBottomColor: "#2E8B57"}}>
                                            <Text style={{fontWeight: "bold", color: "#2E8B57", fontSize: 24}}>***</Text>
                                        </View>)
                                    }/>
                                }
                                contentStyle={{textAlign: "center"}}
                                mode="flat" 
                                placeholder="Code de sécurité" 
                                placeholderTextColor={'#d3d3d3'}
                                value={password}
                                onChangeText={onChangePassword}
                            />

                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between'}}>
                                <Button
                                    mode="text"
                                    compact={true}
                                    contentStyle={{cursor: 'pointer'}}
                                    icon="checkbox-blank"
                                    labelStyle={{fontWeight: 'bold'}}
                                >
                                    Se souvenir de moi
                                </Button>
                                
                                <Button
                                    mode="text"
                                    compact={true}
                                    contentStyle={{cursor: 'pointer'}}
                                    labelStyle={{fontWeight: 'bold'}}
                                >
                                    Mot de passe oublie
                                </Button>
                            </View>

                            <Button
                                mode="contained" 
                                buttonColor="#2E8B57"
                                textColor="#fff"
                                uppercase={true}
                                style={{borderRadius: 10, height: 50, justifyContent: 'center'}}
                                labelStyle={{fontWeight: 'bold'}}
                                onPress={() => console.log("Connexion")}
                            >
                                Connexion
                            </Button>

                            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                                <Text style={{fontWeight: "bold"}}>Pas de compte ?</Text>
                                <Button
                                    mode="text" 
                                    textColor="#2E8B57"
                                    labelStyle={{fontWeight: "bold"}}
                                    rippleColor="transparent"
                                >
                                    Créez-en un maintenant.
                                </Button>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
        
        
    );
}

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    subContainer: {
        flex: 0.8,
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 80,
        borderTopRightRadius: 80,
        paddingHorizontal: 30,
        paddingVertical: 10
    },
    screentitleContainer: {
        flex: 0.6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    screenTitleText: {
        fontWeight: "bold",
        color: '#FFFFFF'
    },
    formContainer: {
        flex: 1,
        marginVertical: 5
    },
    logoContainer: {
        flex: 0.5,
        alignItems: "center", 
        justifyContent: "center", 
        marginBottom: 20
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