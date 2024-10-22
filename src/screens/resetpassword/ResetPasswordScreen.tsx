import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

function ResetPasswordScreen() {
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#f5f5f5', padding: 50}}>
            <View style={{flex: 0.3}}>
                <Text variant="displaySmall" style={{color: '#2E8B57', fontWeight: 'bold'}}>
                    Reset Password
                </Text>
                <Image source={require('../../assets/images/sangimmo.webp')} style={{width: 200, height: 45, marginBottom: 20}} resizeMode="contain"/>
                <Text variant="titleLarge" style={{fontWeight: 'bold'}}>code d'authentification</Text>
                <View style={{
                    marginVertical: 10,
                    width: 70, 
                    height: 8, 
                    borderWidth: 2, 
                    borderColor: '#2E8B57', 
                    borderRadius: 999, 
                    backgroundColor: '#2E8B57'
                    }}
                ></View>
            </View>

            <View style={{flex: 0.3}}>
                <Text style={{textAlign: 'center'}} variant="bodyMedium">
                    Saisissez le code d'authentification envoyé sur votre adresse mail
                </Text>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 50, marginBottom: 15}}>
                    <TextInput
                        inputMode="numeric"
                        underlineColor="transparent"
                        activeUnderlineColor="transparent"
                        style={{
                            width: 50,
                            height: 50,
                            borderTopRightRadius: 15,
                            borderTopLeftRadius: 15,
                            borderBottomRightRadius: 15,
                            borderBottomLeftRadius: 15,
                            fontSize: 25,
                            fontWeight: 'bold'
                        }}
                    />
                    <TextInput
                        inputMode="numeric"
                        underlineColor="transparent"
                        activeUnderlineColor="transparent"
                        style={{
                            width: 50,
                            height: 50,
                            borderTopRightRadius: 15,
                            borderTopLeftRadius: 15,
                            borderBottomRightRadius: 15,
                            borderBottomLeftRadius: 15,
                            fontSize: 25,
                            fontWeight: 'bold'
                        }}
                    />
                    <TextInput
                        inputMode="numeric"
                        underlineColor="transparent"
                        activeUnderlineColor="transparent"
                        style={{
                            width: 50,
                            height: 50,
                            borderTopRightRadius: 15,
                            borderTopLeftRadius: 15,
                            borderBottomRightRadius: 15,
                            borderBottomLeftRadius: 15,
                            fontSize: 25,
                            fontWeight: 'bold'
                        }}
                    />
                    <TextInput
                        inputMode="numeric"
                        underlineColor="transparent"
                        activeUnderlineColor="transparent"
                        style={{
                            width: 50,
                            height: 50,
                            borderTopRightRadius: 15,
                            borderTopLeftRadius: 15,
                            borderBottomRightRadius: 15,
                            borderBottomLeftRadius: 15,
                            fontSize: 25,
                            fontWeight: 'bold'
                        }}
                    />
                </View>
                <Text style={{textAlign: 'center', fontWeight: 'bold'}} variant="bodyMedium">
                    Renvoyez le code dans 45 secondes
                </Text>
            </View>

            <View style={{flex: 0.5, display: "flex", rowGap: 5, justifyContent: 'center'}}>
                <TextInput 
                    style={styles.inputCommonStyles}
                    underlineColor="transparent"
                    activeUnderlineColor="transparent"
                    autoCapitalize="none" 
                    autoComplete="off" 
                    autoCorrect={false} 
                    left={
                        <TextInput.Icon icon="camera"/>
                    }
                    contentStyle={{textAlign: "center"}}
                    mode="flat" 
                    placeholder="Nouveau mot de passe" 
                    placeholderTextColor={'#d3d3d3'}
                />
                <TextInput 
                    style={styles.inputCommonStyles}
                    underlineColor="transparent"
                    activeUnderlineColor="transparent"
                    autoCapitalize="none" 
                    autoComplete="off" 
                    autoCorrect={false} 
                    left={
                        <TextInput.Icon icon="camera"/>
                    }
                    contentStyle={{textAlign: "center"}}
                    mode="flat" 
                    placeholder="Confrimer le mot de passe" 
                    placeholderTextColor={'#d3d3d3'}
                />
                <Button
                    mode="contained" 
                    buttonColor="#2E8B57"
                    textColor="#fff"
                    uppercase={true}
                    style={{borderRadius: 10, height: 50, justifyContent: 'center', marginTop: 30}}
                    labelStyle={{fontWeight: 'bold'}}
                    onPress={() => console.log("Connexion")}
                >
                    Enregistrer
                </Button>
            </View>
        </SafeAreaView>
    );
}

export  default ResetPasswordScreen;

const styles = StyleSheet.create({
    inputCommonStyles: {
        borderWidth: 2,
        borderColor: "#2E8B57",
        marginTop: 10,
        backgroundColor: "transparent",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10
    }
});