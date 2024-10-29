import React, { useState } from "react";

import {View, StyleSheet, Image, ImageBackground} from 'react-native';
import {Text } from 'react-native-paper';
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomContainedButton } from "../../components/customButton";
import { CustomTextInput } from "../../components/customTextInput";
import { Brand } from "../../components/brand";
import { baseStyles } from "../../styles/baseStyles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

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

    return(
        <SafeAreaView style={[baseStyles.container]}>
            <ImageBackground
                source={require('../../assets/images/login.jpeg')}
                style={{flex: 1 }}
                imageStyle={{resizeMode: 'contain', top: -350}}
            >
                <View style={[baseStyles.container, {justifyContent: 'flex-end', backgroundColor: 'transparent'}]}>
                    <View style={styles.subContainer}>
                        <View style={styles.formContainer}>
                            <View style={[{flex: 0.25}, baseStyles.flexCenter]}>
                                <Brand/>
                            </View>

                            <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
                                Veuillez saisir votre adresse mail pour la recuperation de votre code de reinitialisation
                            </Text>
                            <CustomTextInput
                                icon="email-outline"
                                placeholder="sangimmo@gmail.com"
                            />
                            <CustomContainedButton
                                label="Recevoir le code"
                                onPress={() => navigation.navigate('ResetPassword')}
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