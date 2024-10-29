import React from "react";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Button, Icon, Text } from "react-native-paper";
import { baseStyles } from "../../styles/baseStyles";
import { CustomHeader } from "../../components/customHeader";
import { COLORS } from "../../constants/themes";
import { CustomTextButton } from "../../components/customButton";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

type RootStackParamList = {
    Account: undefined;
    Profile: undefined;
};

type OnBoardingNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'Account'
>;

function Account() {

    const navigation = useNavigation<OnBoardingNavigationProp>();
    
    return(
        <SafeAreaView style={[baseStyles.container, {
            paddingVertical: 30,
            rowGap: 25
        }]}>
            <CustomHeader
                icon="arrow-left"
                iconColor={COLORS.text}
                title="Parametres"
            />

            <View
                style={[baseStyles.flexRow, {
                    paddingVertical: 20,
                    paddingHorizontal: 50,
                    alignItems: 'center',
                    columnGap: 20
                }]}
            >
                <View
                    style={{
                        borderWidth: 2,
                        borderColor: COLORS.primary,
                        borderRadius: 999
                    }}
                >
                    <Avatar.Image
                        source={require('../../assets/images/avatar.webp')}
                        size={70}
                    />
                </View>
                
                <View>
                    <Text 
                        variant="bodyLarge"
                        style={{
                            fontWeight: 'bold',
                            color: COLORS.text, 
                            
                        }}
                    >
                        Noella DABIRE
                    </Text>
                    <View style={{backgroundColor: COLORS.primary, width: '115%', height: 5, borderRadius: 99}}></View>

                </View>

            </View>

            <View
                style={{
                    marginTop: '-10%',
                    paddingVertical: 20,
                    paddingHorizontal: 50,
                    rowGap: 10
                }}
            >

                <View>
                    <Text
                        style={{
                            fontWeight: 'bold'
                        }}
                    >
                        Support
                    </Text>
                    <View
                        style={{
                            backgroundColor: COLORS.background,
                            padding: 10,
                            elevation: 0.5,
                            borderRadius: 8
                        }}
                    >
                        <CustomTextButton
                            label="Appelez le service client"
                            icon="phone"
                            contentStyle={{cursor: 'pointer', alignItems: 'center', justifyContent: 'flex-start', columnGap: 20}}
                            labelStyle={{fontWeight: 'bold', color: COLORS.text}}
                        />
                        <CustomTextButton
                            label="Ecrivez au service client"
                            icon="message"
                            contentStyle={{cursor: 'pointer', alignItems: 'center', justifyContent: 'flex-start', columnGap: 20}}
                            labelStyle={{fontWeight: 'bold', color: COLORS.text}}
                        />
                        
                    </View>

                </View>

                <View>
                    <Text
                        style={{
                            fontWeight: 'bold'
                        }}
                    >
                        Profil d'utilisateur
                    </Text>
                    <View
                        style={{
                            backgroundColor: COLORS.background,
                            padding: 10,
                            elevation: 0.5,
                            borderRadius: 8
                        }}
                    >
                        <CustomTextButton
                            label="Voir le profil"
                            icon="account"
                            contentStyle={{cursor: 'pointer', alignItems: 'center', justifyContent: 'flex-start', columnGap: 20}}
                            labelStyle={{fontWeight: 'bold', color: COLORS.text}}
                            onPress={() => navigation.navigate('Profile')}
                        />
                    </View>

                </View>

                <View>
                    <Text
                        style={{
                            fontWeight: 'bold'
                        }}
                    >
                        Termes et conditions
                    </Text>
                    <View
                        style={{
                            backgroundColor: COLORS.background,
                            padding: 10,
                            elevation: 0.5,
                            borderRadius: 8
                        }}
                    >
                        <CustomTextButton
                            label="Termes d'utlisations"
                            icon="book-open-variant"
                            contentStyle={{cursor: 'pointer', alignItems: 'center', justifyContent: 'flex-start', columnGap: 20}}
                            labelStyle={{fontWeight: 'bold', color: COLORS.text}}
                        />
                        <CustomTextButton
                            label="Confidentialite de l'application"
                            icon="shield-account-variant"
                            contentStyle={{cursor: 'pointer', alignItems: 'center', justifyContent: 'flex-start', columnGap: 20}}
                            labelStyle={{fontWeight: 'bold', color: COLORS.text}}
                        />
                        
                    </View>

                </View>

            </View>

        </SafeAreaView>
    );
}

export default Account;