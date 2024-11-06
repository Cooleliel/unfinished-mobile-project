import React, { useState } from "react";
import { Image, ScaledSize, StyleSheet, useWindowDimensions, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import RNPickerSelect from 'react-native-picker-select';
import {Picker} from '@react-native-picker/picker';
import { Dropdown } from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { CustomContainedButton, CustomTextButton } from "../../components/customButton";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../constants/themes";
import { baseStyles } from "../../styles/baseStyles";
import { CustomTextInput } from "../../components/customTextInput";
import { Brand } from "../../components/brand";

type RootStackParamList = {
    Check: undefined;
    SignIn: undefined
    SignUp: undefined;
};

type SignUpNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'SignUp'
>;

function SignUp() {

    const navigation = useNavigation<SignUpNavigationProp>();
    const [checkbox, setCheckbox] = useState<boolean>(false);

    const { width, height } : ScaledSize = useWindowDimensions();

    // Définition des breakpoints
    const isSmallMobile = width >= 320 && width < 374;
    const isMediumMobile = width >= 375 && width < 424;
    const isLargeMobile = width >= 425 && width < 1024;

    return(
        <SafeAreaView style={[baseStyles.container, {padding: 50}]}>
            <View style={{flexGrow: 0.2}}>
                <Text variant={isSmallMobile ? 'headlineSmall' : isMediumMobile ? 'headlineLarge' : 'displayLarge'} style={{color: '#2E8B57', fontWeight: 'bold'}}>
                    Akwaba sur
                </Text>
                <Brand
                    style={{
                        width: isSmallMobile ? width/3 : isMediumMobile ? width/2 : isLargeMobile ? width : width*2, 
                        height: isSmallMobile ? height/22 : isMediumMobile ? height/15 : isLargeMobile ? height/12 : height/9,
                        
                    }}
                />
                <Text variant={isSmallMobile ? 'bodyMedium' : isMediumMobile ? 'headlineSmall' : 'displayMedium'} style={{fontWeight: 600}}>Créez  un nouveau compte</Text>
            </View>
            <View style={{flexGrow: 0.6}}>

                <CustomTextInput
                    icon="account"
                    placeholder="Nom complet"
                    containerStyle={{height: isSmallMobile ? height/12 : isMediumMobile ? height/13 : isLargeMobile ? height/15 : height/17,}}
                    iconSize={isSmallMobile ? 20 : isMediumMobile ? 26 : isLargeMobile ? 32 : 40}
                    contentStyle={{fontSize: isSmallMobile ? 12 : isMediumMobile ? 18 : isLargeMobile ? 20 : 24}}
                />

                <View style={[baseStyles.flexRow, {justifyContent: 'center', alignItems: 'center', columnGap: 10}]}>
                    <Dropdown
                        data={[
                            { label: '+220', value: '220' },
                            { label: '+221', value: '221' },
                            { label: '+222', value: '222' },
                            { label: '+223', value: '223' },
                            { label: '+224', value: '224' },
                            { label: '+225', value: '225' },
                            { label: '+226', value: '226' },
                            { label: '+227', value: '227' },
                            { label: '+228', value: '228' },
                            { label: '+229', value: '229' },
                            { label: '+230', value: '230' },
                            { label: '+231', value: '231' },
                            { label: '+232', value: '232' },
                            { label: '+233', value: '233' },
                            { label: '+234', value: '234' },
                            { label: '+235', value: '235' },
                        ]}
                        labelField="label"
                        onChange={() => console.log()}
                        valueField={'value'}
                        style={{
                            backgroundColor: 'transparent',
                            width: isSmallMobile ? width/4 : isMediumMobile ? width/4 : isLargeMobile ? height/6 : height/6,
                            height: isSmallMobile ? height/11.5 : isMediumMobile ? height/13.5 : isLargeMobile ? height/15.5 : height/17.5,
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
                            textAlign: 'center',
                            fontSize: 12
                        }}
                        containerStyle={{
                            borderRadius: 8
                        }}
                        showsVerticalScrollIndicator={false}
                    />
                    <CustomTextInput
                        placeholder="xx xx xx xx" 
                        icon="phone"
                        containerStyle={{width: isSmallMobile ? width/2.3 : isMediumMobile ? width/2 : isLargeMobile ? width/1.77 : width/1.74,
                            height: isSmallMobile ? height/12 : isMediumMobile ? height/13 : isLargeMobile ? height/15 : height/17,}}
                        iconSize={isSmallMobile ? 20 : isMediumMobile ? 26 : isLargeMobile ? 32 : 40}
                        contentStyle={{fontSize: isSmallMobile ? 12 : isMediumMobile ? 18 : isLargeMobile ? 20 : 24}}
                    />
                </View>

                <View>
                    <CustomTextInput
                        icon="email-outline"
                        placeholder="sangimmo@gmail.com"
                        containerStyle={{height: isSmallMobile ? height/12 : isMediumMobile ? height/13 : isLargeMobile ? height/15 : height/17,}}
                        iconSize={isSmallMobile ? 20 : isMediumMobile ? 26 : isLargeMobile ? 32 : 40}
                        contentStyle={{fontSize: isSmallMobile ? 12 : isMediumMobile ? 18 : isLargeMobile ? 20 : 24}}
                    />
                </View>

                <View>
                    <CustomTextInput
                        placeholder="Code de securite" 
                        icon="lock"
                        containerStyle={{height: isSmallMobile ? height/12 : isMediumMobile ? height/13 : isLargeMobile ? height/15 : height/17,}}
                        iconSize={isSmallMobile ? 20 : isMediumMobile ? 26 : isLargeMobile ? 32 : 40}
                        contentStyle={{fontSize: isSmallMobile ? 12 : isMediumMobile ? 18 : isLargeMobile ? 20 : 24}}
                    />
                </View>

                <View style={[baseStyles.flexRow, {
                    margin: 10,
                    alignItems: 'center'
                }]}>
                    <CustomTextButton
                        label="J'ai lu et j'acceptes les termes."
                        icon={checkbox ? 'checkbox-marked' : 'checkbox-blank-outline'}
                        onPress={() => setCheckbox(!checkbox)}
                        labelStyle={{fontSize: isSmallMobile ? 11 : isMediumMobile ? 16 : isLargeMobile ? 18 : 22}}
                    />
                </View>
                <CustomContainedButton
                    label="Inscription"
                    onPress={() => navigation.navigate('Check')}
                    styles={{height: isSmallMobile ? height/13 : isMediumMobile ? height/12 : isLargeMobile ? height/11 : height/10}}
                    labelStyle={{fontSize: isSmallMobile ? 14 : isMediumMobile ? 20 : isLargeMobile ? 18 : 26}}
                />
                <View style={[baseStyles.flexRow, {alignItems: "center", justifyContent: "center"}]}>
                    <Text style={{fontWeight: "bold"}}>Déjà inscrit ?</Text>
                    <CustomTextButton
                        label="Connectez-vous"
                        textColor={COLORS.primary}
                        onPress={() => navigation.navigate('SignIn')}
                        labelStyle={{fontSize: isSmallMobile ? 11 : isMediumMobile ? 16 : isLargeMobile ? 18 : 22}}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

export default SignUp;