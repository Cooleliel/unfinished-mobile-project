import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomContainedButton } from "../../components/customButton";
import { Brand } from "../../components/brand";
import { baseStyles } from "../../styles/baseStyles";
import { COLORS, FONTS, LAYOUT } from "../../constants/themes";
import { CustomNumericInput } from "../../components/customNumericInput";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

type RootStackParamList = {
    BottomTab: undefined;
    Check: undefined
};

type CheckNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'Check'
>;

function Check() {

    const navigation = useNavigation<CheckNavigationProp>();

    return(
        <SafeAreaView style={[baseStyles.container, {padding: LAYOUT.spacing.lg*2}]}>
            <View style={{flex: 0.3}}>
                <Text variant="displaySmall" style={{color: COLORS.primary, fontWeight: FONTS.weights.bold}}>
                    Verification sur
                </Text>
                <Brand/>
                <Text variant="titleLarge" style={{fontWeight: FONTS.weights.bold}}>code d'authentification</Text>
                <View style={{
                    marginVertical: LAYOUT.spacing.sm,
                    width: 70, 
                    height: 8, 
                    borderWidth: LAYOUT.border.width.thick, 
                    borderColor: COLORS.primary, 
                    borderRadius: LAYOUT.zIndex.maximum, 
                    backgroundColor: COLORS.primary
                    }}
                ></View>
            </View>

            <View style={{flex: 0.3}}>
                <Text style={{textAlign: 'center'}} variant="bodyMedium">
                    Saisissez le code d'authentification envoyé sur votre adresse mail
                </Text>
                <View style={[baseStyles.flexRow, {justifyContent: 'space-around', alignItems: 'center', marginTop: LAYOUT.spacing.lg*2, marginBottom: LAYOUT.spacing.md}]}>
                    <CustomNumericInput/>
                    <CustomNumericInput/>
                    <CustomNumericInput/>
                    <CustomNumericInput/>
                </View>
                <CustomContainedButton
                    label="Verification"
                    uppercase={true}
                    styles={{marginTop: LAYOUT.spacing.lg*2}}
                    onPress={() => navigation.replace('BottomTab')}
                />
                <Text style={{textAlign: 'center', fontWeight: FONTS.weights.bold, marginTop: LAYOUT.spacing.sm}} variant="bodyMedium">
                    Renvoyez le code dans 45 secondes
                </Text>
            </View>
        </SafeAreaView>
    );
}

export default Check;