import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Button, Icon, Text, TextInput } from "react-native-paper";
import { CustomHeader } from "../../components/customHeader";
import { COLORS, LAYOUT } from "../../constants/themes";
import { baseStyles } from "../../styles/baseStyles";
import { CustomTextInput } from "../../components/customTextInput";
import { CustomContainedButton } from "../../components/customButton";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

type RootStackParamList = {
    Account: undefined;
    Profile: undefined;
};

type OnBoardingNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'Profile'
>;

function Profile() {
    
    const navigation = useNavigation<OnBoardingNavigationProp>();

    const [profilePhotoUri, setProfilePhotoUri] = useState<string | null>(null);

    const handlePhotoSelected = (uri: string) => {
        setProfilePhotoUri(uri);
        // Ici, vous pouvez ajouter la logique pour envoyer la nouvelle photo à votre backend
        console.log('Nouvelle photo de profil sélectionnée:', uri);
    };

    return(
        <SafeAreaView style={[baseStyles.container, {
            paddingVertical: 30,
            rowGap: 25
        }]}>
            <CustomHeader
                title="Profil"
                icon="arrow-left"
                iconColor={COLORS.text}
                onPress={() => navigation.goBack()}
            />
            <View
                style={[baseStyles.flexRow, {
                    paddingVertical: 20,
                    paddingHorizontal: 50,
                    alignItems: 'center',
                    columnGap: 20
                }]}
            >
                <TouchableOpacity
                    style={{
                        borderWidth: 3,
                        borderColor: COLORS.primary,
                        borderRadius: 999
                    }}
                >
                    <Avatar.Image
                        source={require('../../assets/images/avatar.webp')}
                        size={100}
                    />
                    <View
                        style={[{
                            backgroundColor: COLORS.background,
                            width: 30,
                            height: 30,
                            borderRadius: 999,
                            position: 'absolute',
                            right: 0,
                            bottom: 0,
                        }, baseStyles.flexCenter]}
                    >
                        <Icon 
                            source='camera'
                            size={25}

                        />
                    </View>
                </TouchableOpacity>

                {/*<CustomTextInput
                    placeholder="Noella DABIRE"
                    icon=""
                    containerStyle={{
                        borderWidth: 0,
                        borderColor: 'transparent',
                        marginTop: LAYOUT.spacing.sm,
                        borderTopRightRadius: 0,
                        borderTopLeftRadius: 0,
                        borderBottomRightRadius: 0,
                        borderBottomLeftRadius: 0,
                        backgroundColor: COLORS.gray[50]
                    }}
                    placeholderColor={COLORS.text}
                    contentStyle={{fontSize: 20, fontWeight: 'bold'}}
                />*/}
                
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
                        backgroundColor: COLORS.background,
                        padding: 10,
                        elevation: 0.5,
                        borderRadius: 8
                    }}
                >
                    <CustomTextInput
                        placeholder="+226065675937" 
                        icon="phone"
                        iconColor={COLORS.text}
                        containerStyle={{
                            borderWidth: 0,
                            borderColor: 'transparent',
                            marginTop: LAYOUT.spacing.sm,
                            borderTopRightRadius: 0,
                            borderTopLeftRadius: 0,
                            borderBottomRightRadius: 0,
                            borderBottomLeftRadius: 0,
                            backgroundColor: COLORS.gray[50]
                        }}
                        placeholderColor={COLORS.text}                
                    />
                    <CustomTextInput
                        placeholder="sangimmo@gmail.com" 
                        icon="email"
                        iconColor={COLORS.text}
                        containerStyle={{
                            borderWidth: 0,
                            borderColor: 'transparent',
                            marginTop: LAYOUT.spacing.sm,
                            borderTopRightRadius: 0,
                            borderTopLeftRadius: 0,
                            borderBottomRightRadius: 0,
                            borderBottomLeftRadius: 0,
                            backgroundColor: COLORS.gray[50]
                        }}
                        placeholderColor={COLORS.text}                
                    />
                    <CustomTextInput
                        placeholder="Mot de passe" 
                        secureTextEntry
                        icon="lock"
                        iconColor={COLORS.text}
                        containerStyle={{
                            borderWidth: 0,
                            borderColor: 'transparent',
                            marginTop: LAYOUT.spacing.sm,
                            borderTopRightRadius: 0,
                            borderTopLeftRadius: 0,
                            borderBottomRightRadius: 0,
                            borderBottomLeftRadius: 0,
                            backgroundColor: COLORS.gray[50]
                        }}
                        placeholderColor={COLORS.text}                
                    />
                </View>
                <CustomContainedButton
                    label="Modifier"
                    icon="pencil"
                />
            </View>
        </SafeAreaView>
    );
}

export default Profile;

const   styles = StyleSheet.create({
    inputCommonStyles: {
        marginTop: 10,
        backgroundColor: "#fcfcfc"
    }
});