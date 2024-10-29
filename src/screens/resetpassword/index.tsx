import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { baseStyles } from "../../styles/baseStyles";
import { COLORS } from "../../constants/themes";
import { Brand } from "../../components/brand";
import { CustomTextInput } from "../../components/customTextInput";
import { CustomContainedButton } from "../../components/customButton";
import { CustomNumericInput } from "../../components/customNumericInput";

type RootStackParamList = {
    ResetPassword: undefined;
    SignIn: undefined
};

type ResetPasswordNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'ResetPassword'
>;

function ResetPassword() {

    const navigation = useNavigation<ResetPasswordNavigationProp>();

    return(
        <SafeAreaView style={[baseStyles.container, {padding: 50}]}>
            <View style={{flex: 0.3}}>
                <Text variant="displaySmall" style={{color: COLORS.primary, fontWeight: 'bold'}}>
                    Reset Password
                </Text>
                <Brand/>                
                <Text variant="titleLarge" style={{fontWeight: 'bold'}}>code d'authentification</Text>
                <View style={{
                    marginVertical: 10,
                    width: 70, 
                    height: 8, 
                    borderWidth: 2, 
                    borderColor: COLORS.primary, 
                    borderRadius: 999, 
                    backgroundColor: COLORS.primary
                    }}
                ></View>
            </View>

            <View style={{flex: 0.3}}>
                <Text style={{textAlign: 'center'}} variant="bodyMedium">
                    Saisissez le code d'authentification envoyé sur votre adresse mail
                </Text>
                <View style={[baseStyles.flexRow, {justifyContent: 'space-around', alignItems: 'center', marginTop: 50, marginBottom: 15}]}>
                    <CustomNumericInput/>
                    <CustomNumericInput/>
                    <CustomNumericInput/>
                    <CustomNumericInput/>
                </View>
                <Text style={{textAlign: 'center', fontWeight: 'bold'}} variant="bodyMedium">
                    Renvoyez le code dans 45 secondes
                </Text>
            </View>

            <View style={{flex: 0.5, rowGap: 5, justifyContent: 'center'}}>
                <CustomTextInput
                    placeholder="Nouveau mot de passe" 
                    icon="lock-reset"
                />
                <CustomTextInput
                    placeholder="Confrimer le mot de passe" 
                    icon="lock-reset"
                />
                <CustomContainedButton
                    label="Enregistrer"
                    uppercase={true}
                    styles={{marginTop: 30}}
                    onPress={() => navigation.navigate('SignIn')}
                />
            </View>
        </SafeAreaView>
    );
}

export  default ResetPassword;