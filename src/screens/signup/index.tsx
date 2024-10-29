import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
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

    return(
        <SafeAreaView style={[baseStyles.container, {padding: 50}]}>
            <View style={{flex: 0.3}}>
                <Text variant="displaySmall" style={{color: '#2E8B57', fontWeight: 'bold'}}>
                    Akwaba sur
                </Text>
                <Brand/>
                <Text variant="titleLarge" style={{fontWeight: 600}}>Créez  un nouveau compte</Text>
            </View>
            <View style={{flex: 0.7}}>

                <View>
                    <CustomTextInput
                        icon="account"
                        placeholder="Nom complet"
                    />
                </View>

                <View style={[baseStyles.flexRow, {justifyContent: 'space-between', alignItems: 'center'}]}>
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
                        containerStyle={{width: 200}}
                    />
                </View>

                <View>
                    <CustomTextInput
                        icon="email-outline"
                        placeholder="sangimmo@gmail.com"
                    />
                </View>

                <View>
                    <CustomTextInput
                        placeholder="Code de securite" 
                        icon="lock"
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
                    />
                </View>
                <CustomContainedButton
                    label="Inscription"
                    onPress={() => navigation.navigate('Check')}
                />
                <View style={[baseStyles.flexRow, {alignItems: "center", justifyContent: "center"}]}>
                    <Text style={{fontWeight: "bold"}}>Déjà inscrit ?</Text>
                    <CustomTextButton
                        label="Connectez-vous"
                        textColor={COLORS.primary}
                        onPress={() => navigation.navigate('SignIn')}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

export default SignUp;