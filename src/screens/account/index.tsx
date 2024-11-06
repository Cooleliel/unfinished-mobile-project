import React from "react";
import { Image, ScaledSize, useWindowDimensions, View } from "react-native";
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
                icon="arrow-left"
                iconColor={COLORS.text}
                title="Parametres"
            />

            <View
                style={[baseStyles.flexRow, {
                    paddingVertical: 15,
                    paddingHorizontal: 50,
                    alignItems: 'center',
                    columnGap: 10
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
                        size={isSmallMobile ? 40 : isMediumMobile ? 60 : 80}
                    />
                </View>
                
                <View>
                    <Text 
                        variant={isSmallMobile ? 'bodySmall' : isMediumMobile ? 'bodyMedium' : 'bodyLarge'}
                        style={{
                            fontWeight: 'bold',
                            color: COLORS.text, 
                            
                        }}
                    >
                        Noella DABIRE
                    </Text>
                    <View 
                        style={{
                            backgroundColor: COLORS.primary, 
                            width: '115%', 
                            height: 5, 
                            borderRadius: 99
                        }}
                    ></View>

                </View>

            </View>

            <View
                style={{
                    marginTop: '-10%',
                    paddingVertical: isSmallMobile ? 25 : 50,
                    paddingHorizontal: 40,
                    rowGap: isSmallMobile ? 10 : 30
                }}
            >

                <View>
                    <Text
                        variant={isSmallMobile ? 'labelSmall' : isMediumMobile ? 'labelMedium' : 'labelLarge'}
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
                            borderRadius: 8,
                            rowGap: isSmallMobile ? 10 : 20
                        }}
                    >
                        <CustomTextButton
                            label="Appelez le service client"
                            icon="phone"
                            contentStyle={{alignItems: 'center', justifyContent: 'flex-start', columnGap: 10}}
                            labelStyle={{fontWeight: 'bold', color: COLORS.text, fontSize: isSmallMobile ? 12 : isMediumMobile ? 18 : isLargeMobile ? 20 : 24}}
                        />
                        <CustomTextButton
                            label="Ecrivez au service client"
                            icon="message"
                            contentStyle={{ alignItems: 'center', justifyContent: 'flex-start', columnGap: 10}}
                            labelStyle={{fontWeight: 'bold', color: COLORS.text, fontSize: isSmallMobile ? 12 : isMediumMobile ? 18 : isLargeMobile ? 20 : 24}}
                        />
                        
                    </View>

                </View>

                <View>
                    <Text
                        variant={isSmallMobile ? 'labelSmall' : isMediumMobile ? 'labelMedium' : 'labelLarge'}
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
                            borderRadius: 8,
                            rowGap: isSmallMobile ? 10 : 20
                        }}
                    >
                        <CustomTextButton
                            label="Voir le profil"
                            icon="account"
                            contentStyle={{alignItems: 'center', justifyContent: 'flex-start', columnGap: 10}}
                            labelStyle={{fontWeight: 'bold', color: COLORS.text, fontSize: isSmallMobile ? 12 : isMediumMobile ? 18 : isLargeMobile ? 20 : 24}}
                            onPress={() => navigation.navigate('Profile')}
                        />
                    </View>

                </View>

                <View>
                    <Text
                        variant={isSmallMobile ? 'labelSmall' : isMediumMobile ? 'labelMedium' : 'labelLarge'}
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
                            borderRadius: 8,
                            rowGap: isSmallMobile ? 10 : 20
                        }}
                    >
                        <CustomTextButton
                            label="Termes d'utlisations"
                            icon="book-open-variant"
                            contentStyle={{alignItems: 'center', justifyContent: 'flex-start', columnGap: 10}}
                            labelStyle={{fontWeight: 'bold', color: COLORS.text, fontSize: isSmallMobile ? 12 : isMediumMobile ? 18 : isLargeMobile ? 20 : 24}}
                        />
                        <CustomTextButton
                            label="Confidentialite de l'application"
                            icon="shield-account-variant"
                            contentStyle={{alignItems: 'center', justifyContent: 'flex-start', columnGap: 10}}
                            labelStyle={{fontWeight: 'bold', color: COLORS.text, fontSize: isSmallMobile ? 12 : isMediumMobile ? 18 : isLargeMobile ? 20 : 24}}
                        />
                        
                    </View>

                </View>

            </View>

        </SafeAreaView>
    );
}

export default Account;