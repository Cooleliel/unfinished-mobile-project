import React, { useState } from "react";

import {View, StyleSheet, Image, ImageBackground} from 'react-native';
import {Button, Text, TextInput } from 'react-native-paper';
import { SafeAreaView } from "react-native-safe-area-context";

function ForgotPasswordScreen() {

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
                imageStyle={{resizeMode: 'contain', top: -350}}
            >
                <View style={styles.container}>
                    <View style={styles.subContainer}>
                        <View style={styles.formContainer}>
                            <View style={styles.logoContainer}>
                                <Image
                                    source={require('../../assets/images/sangimmo.png')}
                                    style={{width: 250, height: 250}}
                                />
                            </View>

                            <Text style={{fontWeight: 'bold', textAlign: 'center'}}>Veuillez saisir votre adresse mail pour la recuperation de votre code de reinitialisation</Text>
                            
                            <TextInput 
                                style={styles.inputCommonStyles}
                                underlineColor="transparent"
                                activeUnderlineColor="transparent"
                                autoCapitalize="none" 
                                autoComplete="off" 
                                autoCorrect={false} 
                                left={
                                    <TextInput.Icon icon="email-outline"/>
                                }
                                contentStyle={{textAlign: "center"}}
                                mode="flat" 
                                placeholder="sangimmo@gmail.com" 
                                placeholderTextColor={'#d3d3d3'}
                                value={password}
                                onChangeText={onChangePassword}
                            />

                            <Button
                                mode="contained" 
                                buttonColor="#2E8B57"
                                textColor="#fff"
                                style={{borderRadius: 10, height: 50, display: 'flex', justifyContent: 'center'}}
                                labelStyle={{fontWeight: 'bold'}}
                                onPress={() => console.log("Recevoir le code")}
                            >
                                Recevoir le code
                            </Button>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
        
        
    );
}

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        display: 'flex',
        justifyContent: 'flex-end'
    },
    subContainer: {
        flex: 0.55,
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 80,
        borderTopRightRadius: 80,
        paddingHorizontal: 30,
        paddingVertical: 10
    },
    formContainer: {
        flex: 0.75,
        marginVertical: 5,
        justifyContent: 'space-around'
    },
    logoContainer: {
        flex: 0.25,
        alignItems: "center", 
        justifyContent: "center"
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