import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Button, Icon, Text, TextInput } from "react-native-paper";

function ProfileScreen() {

    const [profilePhotoUri, setProfilePhotoUri] = useState<string | null>(null);

    const handlePhotoSelected = (uri: string) => {
        setProfilePhotoUri(uri);
        // Ici, vous pouvez ajouter la logique pour envoyer la nouvelle photo à votre backend
        console.log('Nouvelle photo de profil sélectionnée:', uri);
    };

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
                    source="arrow-left-circle"
                    size={30}
                    color="#FFFFFF"
                />
                <Text 
                    variant="titleLarge"
                    style={{
                        fontWeight: 'bold',
                        color: '#ffffff'
                    }}
                >
                    Profil
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
                <TouchableOpacity
                    style={{
                        borderWidth: 3,
                        borderColor: '#2E8B57',
                        borderRadius: 999
                    }}
                >
                    <Avatar.Image
                        source={require('../../assets/images/avatar.webp')}
                        size={100}
                    />
                    <View
                        style={{
                            backgroundColor: '#FFFFFF',
                            width: 30,
                            height: 30,
                            borderRadius: 999,
                            position: 'absolute',
                            right: 0,
                            bottom: 0,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Icon 
                            source='camera'
                            size={25}

                        />
                    </View>
                </TouchableOpacity>
                
                <TextInput
                    inputMode="none"
                    style={styles.inputCommonStyles}
                    underlineColor="transparent"
                    activeUnderlineColor="transparent"
                    autoCapitalize="none" 
                    autoComplete="off" 
                    autoCorrect={false} 
                    contentStyle={{textAlign: "center", fontSize: 20, fontWeight: 'bold'}}
                    mode="flat" 
                    placeholder="Noella DABIRE" 
                />

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

                <View
                    style={{
                        backgroundColor: '#ffffff',
                        padding: 10,
                        elevation: 0.5,
                        borderRadius: 8
                    }}
                >
                    <TextInput
                        inputMode="tel"
                        style={styles.inputCommonStyles}
                        underlineColor="transparent"
                        activeUnderlineColor="transparent"
                        autoCapitalize="none" 
                        autoComplete="off" 
                        autoCorrect={false} 
                        left={
                            <TextInput.Icon icon='phone'/>
                        }
                        contentStyle={{textAlign: "center"}}
                        mode="flat" 
                        placeholder="+226065675937" 
                    />

                    <TextInput
                        inputMode="email" 
                        style={styles.inputCommonStyles}
                        underlineColor="transparent"
                        activeUnderlineColor="transparent"
                        autoCapitalize="none" 
                        autoComplete="off" 
                        autoCorrect={false} 
                        left={
                            <TextInput.Icon icon='email'/>
                        }
                        contentStyle={{textAlign: "center"}}
                        mode="flat" 
                        placeholder="sangimmo@gmail.com" 
                    />

                    <TextInput
                        inputMode="none"
                        style={styles.inputCommonStyles}
                        underlineColor="transparent"
                        activeUnderlineColor="transparent"
                        autoCapitalize="none" 
                        autoComplete="off" 
                        autoCorrect={false} 
                        left={
                            <TextInput.Icon icon='lock'/>
                        }
                        contentStyle={{textAlign: "center"}}
                        mode="flat" 
                        placeholder="Mot de passe" 
                        secureTextEntry
                    />
                </View>

                <Button
                    icon='pencil'
                    mode="contained" 
                    buttonColor="#2E8B57"
                    textColor="#fff"
                    uppercase={true}
                    style={{borderRadius: 10, height: 50, justifyContent: 'center'}}
                    labelStyle={{fontWeight: 'bold'}}
                    onPress={() => console.log("Modifier")}
                >
                    Modifier
                </Button>

            </View>
        </SafeAreaView>
    );
}

export default ProfileScreen;

const   styles = StyleSheet.create({
    inputCommonStyles: {
        marginTop: 10,
        backgroundColor: "#fcfcfc"
    }
});