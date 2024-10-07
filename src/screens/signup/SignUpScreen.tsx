import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import RNPickerSelect from 'react-native-picker-select';
import {Picker} from '@react-native-picker/picker';
import { Dropdown } from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function SignUpScreen() {

    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#f5f5f5', padding: 50}}>
            <View style={{flex: 0.3}}>
                <Text variant="displaySmall" style={{color: '#2E8B57', fontWeight: 'bold'}}>
                    Akwaba sur
                </Text>
                <Image source={require('../../assets/images/sangimmo.webp')} style={{width: 200, height: 45, marginBottom: 20}} resizeMode="contain"/>
                <Text variant="titleLarge" style={{fontWeight: 600}}>Créez  un nouveau compte</Text>
            </View>
            <View style={{flex: 0.7}}>

                <View>
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
                        placeholder="Nom complet" 
                        placeholderTextColor={'#d3d3d3'}
                    />
                </View>

                

                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>

                        <Dropdown
                            data={[
                                { label: 'Item 1', value: '1' },
                                { label: 'Item 2', value: '2' },
                                { label: 'Item 3', value: '3' },
                                { label: 'Item 4', value: '4' },
                                { label: 'Item 5', value: '5' },
                                { label: 'Item 6', value: '6' },
                                { label: 'Item 7', value: '7' },
                                { label: 'Item 8', value: '8' },
                                { label: 'Item 11', value: '1' },
                                { label: 'Item 21', value: '2' },
                                { label: 'Item 31', value: '3' },
                                { label: 'Item 41', value: '4' },
                                { label: 'Item 51', value: '5' },
                                { label: 'Item 61', value: '6' },
                                { label: 'Item 71', value: '7' },
                                { label: 'Item 81', value: '8' },
                            ]}
                            labelField="label"
                            onChange={() => console.log()}
                            valueField={'value'}
                            style={{
                                backgroundColor: 'transparent',
                                width: 100,
                                height: 60,
                                borderWidth: 2, 
                                borderColor: '#2E8B57',
                                borderRadius: 8,
                                marginTop: 10,
                            }}
                            placeholder="Indicatif"
                            placeholderStyle={{
                                textAlign: 'center'
                            }}
                            selectedTextStyle={{
                                color: '#2E8B57',
                                textAlign: 'center',
                                fontWeight: 'bold',
                            }}
                            activeColor="#2E8B57"
                            search
                            searchField="label"
                            searchPlaceholder="Rechercher"
                            inputSearchStyle={{
                                borderRadius: 8,
                                color: '#d3d3d3',
                                textAlign: 'center'
                            }}
                            containerStyle={{
                                width: 200,
                                borderRadius: 8
                            }}
                            showsVerticalScrollIndicator={false}
                        />

                    <TextInput 
                        style={[styles.inputCommonStyles, {width: 200}]}
                        underlineColor="transparent"
                        activeUnderlineColor="transparent"
                        autoCapitalize="none" 
                        autoComplete="off" 
                        autoCorrect={false} 
                        contentStyle={{textAlign: "center"}}
                        mode="flat" 
                        placeholder="xx xx xx xx" 
                        placeholderTextColor={'#d3d3d3'}
                    />
                </View>

                <View>
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
                        placeholder="banimartial@gmail.com" 
                        placeholderTextColor={'#d3d3d3'}
                    />
                </View>

                <View>
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
                        placeholder="Code de securite" 
                        placeholderTextColor={'#d3d3d3'}
                    />
                </View>

                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    margin: 10
                }}>
                    <Icon name="flag" size={25}/>
                    <Button
                        mode="text"
                        compact={true}
                        contentStyle={{cursor: 'pointer'}}
                        labelStyle={{fontWeight: 'bold', color: '#000'}}
                    >
                        J'ai lu et j'acceptes les termes.
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
                    Inscription
                </Button>

                <View style={{display: 'flex', flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                    <Text style={{fontWeight: "bold"}}>Déjà inscrit ?</Text>
                    <Button
                        mode="text" 
                        textColor="#2E8B57"
                        labelStyle={{fontWeight: "bold"}}
                        rippleColor="transparent"
                    >
                        Connectez-vous
                    </Button>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default SignUpScreen;

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