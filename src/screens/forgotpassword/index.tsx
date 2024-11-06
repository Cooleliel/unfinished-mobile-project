import React, { useState } from "react";

import {View, StyleSheet, Image, ImageBackground, ScaledSize, useWindowDimensions} from 'react-native';
import {Text } from 'react-native-paper';
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomContainedButton } from "../../components/customButton";
import { CustomTextInput } from "../../components/customTextInput";
import { Brand } from "../../components/brand";
import { baseStyles } from "../../styles/baseStyles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { scale, verticalScale } from "react-native-size-matters";

type RootStackParamList = {
    ForgotPassword: undefined;
    ResetPassword: undefined
};

type ForgotPasswordNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'ForgotPassword'
>;

function ForgotPassword() {

    const navigation = useNavigation<ForgotPasswordNavigationProp>();

    const [password, setPassword] = useState<string>("");
    const onChangePassword = (password: string) => setPassword(password);
    const [checked, setChecked] = useState<boolean>(false);

    const toggleChecked = () => {
        setChecked(prevState => !prevState);
    };

    const { width, height } : ScaledSize = useWindowDimensions();

    // Définition des breakpoints
    const isSmallMobile = width >= 320 && width < 374;
    const isMediumMobile = width >= 375 && width < 424;
    const isLargeMobile = width >= 425 && width < 1024;

    return(
        <SafeAreaView style={[baseStyles.container]}>
            <ImageBackground
                source={require('../../assets/images/login.jpeg')}
                style={{flex: 1 }}
                imageStyle={{resizeMode: 'contain', top: -350}}
            >
                <View style={[baseStyles.container, {justifyContent: 'flex-end', backgroundColor: 'transparent'}]}>
                    <View style={[{flex: 0.6, paddingHorizontal: scale(20), paddingVertical: verticalScale(10)}, baseStyles.containerBorderTopRadius]}>
                        <View style={[styles.formContainer, {rowGap: 20}]}>
                            <View style={[{flexGrow: 1,  rowGap: 20}, baseStyles.flexCenter]}>
                                <Brand
                                    style={{
                                        width: isSmallMobile ? width/3 : isMediumMobile ? width/2 : isLargeMobile ? width : width*2, 
                                        height: isSmallMobile ? height/22 : isMediumMobile ? height/15 : isLargeMobile ? height/12 : height/9,
                                        
                                    }} 
                                />
                                <Text variant={isSmallMobile ? 'labelSmall' : isMediumMobile ? 'bodyLarge' : 'bodyLarge'} style={{fontWeight: 'bold', textAlign: 'center'}}>
                                    Veuillez saisir votre adresse mail pour la recuperation de votre code de reinitialisation
                                </Text>
                            </View>
                            <CustomTextInput
                                icon="email-outline"
                                placeholder="sangimmo@gmail.com"
                                containerStyle={{height: isSmallMobile ? height/12 : isMediumMobile ? height/13 : isLargeMobile ? height/15 : height/17,}}
                                iconSize={isSmallMobile ? 20 : isMediumMobile ? 26 : isLargeMobile ? 32 : 40}
                                contentStyle={{fontSize: isSmallMobile ? 12 : isMediumMobile ? 18 : isLargeMobile ? 20 : 24}}
                            />
                            <CustomContainedButton
                                label="Recevoir le code"
                                onPress={() => navigation.navigate('ResetPassword')}
                                styles={{height: isSmallMobile ? height/13 : isMediumMobile ? height/12 : isLargeMobile ? height/11 : height/10}}
                                labelStyle={{fontSize: isSmallMobile ? 14 : isMediumMobile ? 20 : isLargeMobile ? 18 : 26}}
                            />
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
        
        
    );
}

export default ForgotPassword;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
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