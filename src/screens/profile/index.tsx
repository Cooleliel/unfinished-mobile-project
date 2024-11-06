import React, { useState } from "react";
import { Image, ScaledSize, StyleSheet, TouchableOpacity, useWindowDimensions, View } from "react-native";
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

    const { width, height } : ScaledSize = useWindowDimensions();

    // Définition des breakpoints
    const isSmallMobile = width >= 320 && width < 374;
    const isMediumMobile = width >= 375 && width < 424;
    const isLargeMobile = width >= 425 && width < 1024;

    return(
        <SafeAreaView style={[baseStyles.container, {
            paddingVertical: 15,
            rowGap: 15
        }]}>
            <CustomHeader
                title="Profil"
                icon="arrow-left"
                iconColor={COLORS.text}
                onPress={() => navigation.goBack()}
            />
            <View
                style={[baseStyles.flexRow, {
                    paddingVertical: 15,
                    paddingHorizontal: 50,
                    alignItems: 'center',
                    columnGap: 5
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
                        size={isSmallMobile ? 60 : isMediumMobile ? 80 : 100}
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
                            size={isSmallMobile ? 20 : isMediumMobile ? 26 : isLargeMobile ? 32 : 40}

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
                    contentStyle={{
                        textAlign: "center", 
                        fontSize: isSmallMobile ? 12 : isMediumMobile ? 18 : isLargeMobile ? 20 : 24,
                        fontWeight: 'bold'
                    }}
                    mode="flat" 
                    placeholder="Noella DABIRE" 
                />

            </View>

            <View
                style={{
                    marginTop: '-10%',
                    paddingVertical: 20,
                    paddingHorizontal: 50,
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
                        contentStyle={{
                            fontSize: isSmallMobile ? 12 : isMediumMobile ? 18 : isLargeMobile ? 20 : 24
                        }}
                        iconSize={isSmallMobile ? 20 : isMediumMobile ? 26 : isLargeMobile ? 32 : 40}
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
                        contentStyle={{
                            fontSize: isSmallMobile ? 12 : isMediumMobile ? 18 : isLargeMobile ? 20 : 24
                        }}
                        iconSize={isSmallMobile ? 20 : isMediumMobile ? 26 : isLargeMobile ? 32 : 40}
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
                        contentStyle={{
                            fontSize: isSmallMobile ? 12 : isMediumMobile ? 18 : isLargeMobile ? 20 : 24
                        }}
                        iconSize={isSmallMobile ? 20 : isMediumMobile ? 26 : isLargeMobile ? 32 : 40}
                        placeholderColor={COLORS.text}                
                    />
                </View>
                <CustomContainedButton
                    label="Modifier"
                    icon="pencil"
                    styles={{height: isSmallMobile ? height/16 : isMediumMobile ? height/14 : isLargeMobile ? height/12 : height/10}}
                    labelStyle={{fontSize: isSmallMobile ? 14 : isMediumMobile ? 20 : isLargeMobile ? 18 : 26}}
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