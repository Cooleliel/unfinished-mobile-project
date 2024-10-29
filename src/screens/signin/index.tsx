import React, { useState } from "react";

import {View, StyleSheet, Image, ImageBackground} from 'react-native';
import {Button, Text, TextInput } from 'react-native-paper';
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomTextInput } from "../../components/customTextInput";
import { CustomContainedButton, CustomTextButton } from "../../components/customButton";
import { COLORS, FONTS, LAYOUT } from "../../constants/themes";
import { baseStyles } from "../../styles/baseStyles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

type RootStackParamList = {
    BottomTab: undefined;
    SignIn: undefined
    SignUp: undefined;
    ForgotPassword: undefined;
};

type SignInNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'SignIn'
>;

function SignIn() {

    const navigation = useNavigation<SignInNavigationProp>();

    const [password, setPassword] = useState<string>("");
    const onChangePassword = (password: string) => setPassword(password);
    const [checked, setChecked] = useState<boolean>(false);

    const toggleChecked = () => {
        setChecked(prevState => !prevState);
    };

    return(
        <SafeAreaView style={baseStyles.container}>
            <ImageBackground
                source={require('../../assets/images/login.jpeg')}
                style={{flex: 1 }}
                imageStyle={{resizeMode: 'contain', top: '-45%'}}
            >
                <View style={styles.container}>
                    <View style={[{flex: 0.6}, baseStyles.flexCenter]}>
                        <Text variant="headlineLarge" style={baseStyles.boldAndWhiteText}>Connexion</Text>
                    </View>
                    
                    <View style={[{flex: 0.8, paddingHorizontal: 30, paddingVertical: 10}, baseStyles.containerBorderTopRadius]}>
                        <View style={styles.formContainer}>
                            <View style={[{flex: 0.5, marginBottom: 20}, baseStyles.flexCenter]}>
                                <Image 
                                    source={require('../../assets/images/sangimmo.webp')} 
                                    style={{
                                        width: LAYOUT.components.brand.width, 
                                        height: LAYOUT.components.brand.height
                                    }} 
                                    resizeMode="contain"
                                />
                            </View>
                            <CustomTextInput
                                icon="phone"
                                placeholder="Telephone"
                            />

                            <CustomTextInput
                                icon="lock"
                                placeholder="Mot de passe"
                            />
                            <View style={[baseStyles.flexRow, {alignItems: "center", justifyContent: 'space-between'}]}>
                            
                                <CustomTextButton
                                    label="Se souvenir de moi."
                                    icon={checked ? 'checkbox-marked' : 'checkbox-blank-outline'}
                                    onPress={() => setChecked(!checked)}
                                />
                                <CustomTextButton
                                    label="Mot de passe oublie."
                                    onPress={() => navigation.navigate('ForgotPassword')}
                                />
                            </View>
                            <CustomContainedButton
                                label="Connexion"
                                onPress={() => navigation.navigate('BottomTab')}
                            />
                            <View style={[baseStyles.flexRow, baseStyles.flexCenter]}>
                                <Text style={{fontWeight: "bold"}}>Pas de compte ?</Text>
                                <CustomTextButton
                                    label="Créez-en un maintenant."
                                    textColor={COLORS.primary}
                                    onPress={() => navigation.navigate('SignUp')}
                                />
                            </View>

                        </View>

                    </View>

                </View>
            </ImageBackground>
        </SafeAreaView>
        
        
    );
}

export default SignIn;

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
    }
});