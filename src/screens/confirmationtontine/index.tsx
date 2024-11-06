import React from "react";
import { Image, ImageBackground, ScaledSize, StyleSheet, useWindowDimensions, View } from "react-native";
import { Button, IconButton, Text, Icon } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomContainedButton } from "../../components/customButton";
import { CustomTextInput } from "../../components/customTextInput";
import { COLORS, FONTS, LAYOUT } from "../../constants/themes";
import { baseStyles } from "../../styles/baseStyles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

type RootStackParamList = {
    Congratulations: undefined;
    ConfirmationTontine: undefined
};

type ConfirmationTontineNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'ConfirmationTontine'
>;

function ConfirmationTontine() {

    const navigation = useNavigation<ConfirmationTontineNavigationProp>();

    const { width, height } : ScaledSize = useWindowDimensions();

    // Définition des breakpoints
    const isSmallMobile = width >= 320 && width < 374;
    const isMediumMobile = width >= 375 && width < 424;
    const isLargeMobile = width >= 425 && width < 1024;
    
    return(
        <SafeAreaView style={baseStyles.container}>
            <ImageBackground
                source={require('../../assets/images/login.jpeg')}
                style={{flex: 1 }}
                imageStyle={{resizeMode: 'contain', top: '-45%'}}
            >
                <View style={styles.container}>
                    <IconButton
                        mode="contained"
                        containerColor={COLORS.background}
                        icon={"arrow-left"}
                        iconColor={COLORS.text}
                        size={isSmallMobile ? 16 : isMediumMobile ? 22 : isLargeMobile ? 28 : 36}
                        onPress={() => navigation.goBack()}
                        style={{
                            marginTop: '15%',
                            marginLeft: '10%'
                        }}
                    />
                    <View 
                        style={[
                            styles.subContainer,
                            {
                                flex: 0.78,
                                justifyContent: 'flex-end'
                            }
                        ]}
                    >

                        <View style={[
                            styles.subContainer,
                            {
                                flexGrow: 0.83, 
                                backgroundColor: COLORS.gray[50], 
                                paddingTop: LAYOUT.spacing.xl, 
                                paddingHorizontal: LAYOUT.spacing.xxl,
                            }
                            ]}
                        >
                            <View
                                style={{
                                    flexGrow: 0.5,
                                    borderWidth: LAYOUT.border.width.thick,
                                    borderColor: COLORS.primary,
                                    padding: isSmallMobile ? 8 : 16,
                                    borderRadius: 40,
                                    rowGap: 20,
                                    paddingTop: 20,
                                    paddingHorizontal: 20
                                }}
                            >

                                <View 
                                    style={[baseStyles.flexRow, {
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }]}
                                >
                                    <Text 
                                        style={{
                                            fontWeight: FONTS.weights.bold
                                        }}
                                        variant={isSmallMobile ? 'labelLarge' : isMediumMobile ? 'titleLarge' : 'headlineLarge'}
                                    >
                                        Tontine Maison
                                    </Text >

                                    <Text
                                        variant={isSmallMobile ? 'labelSmall' : isMediumMobile ? 'labelMedium' : 'labelLarge'}
                                        style={{
                                            color: COLORS.primary,
                                            fontWeight: FONTS.weights.bold
                                        }}
                                    >
                                        03 places disponible
                                    </Text>
                                </View>

                                <View 
                                    style={{
                                        rowGap: isSmallMobile ? 7 : 15
                                    }}
                                >
                                    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>

                                        <View
                                            style={[baseStyles.flexRow, {
                                                width: '50%',
                                                columnGap: isSmallMobile ? 7 : 15,
                                                alignItems: 'center'
                                            }]}
                                        >
                                            <Icon source="account" size={isSmallMobile ? 20 : isMediumMobile ? 26 : isLargeMobile ? 32 : 40}/>
                                            <Text variant={isSmallMobile ? 'bodySmall' : isMediumMobile ? 'bodyMedium' : 'bodyLarge'} style={{textAlign: "justify"}}>10 places</Text>
                                        </View>
                                        <Text variant={isSmallMobile ? 'bodySmall' : isMediumMobile ? 'bodyMedium' : 'bodyLarge'} style={{textAlign: "justify"}}>10 000 / Mois</Text>
                                    </View>
                                    <Text variant={isSmallMobile ? 'bodySmall' : isMediumMobile ? 'bodyMedium' : 'bodyLarge'} style={{textAlign: "center"}}>Choisissez le nombre de places que vous souhaitez pour cette tontine</Text> 
                                </View>

                                <View 
                                    style={{
                                        rowGap: isSmallMobile ? 10 : 20
                                    }}
                                >
                                    <CustomTextInput
                                        icon="account"
                                        placeholder="Nombre de place"
                                        containerStyle={{height: isSmallMobile ? height/16 : isMediumMobile ? height/14 : isLargeMobile ? height/16 : height/18,}}
                                        iconSize={isSmallMobile ? 20 : isMediumMobile ? 26 : isLargeMobile ? 32 : 40}
                                        contentStyle={{fontSize: isSmallMobile ? 12 : isMediumMobile ? 18 : isLargeMobile ? 20 : 24}}
                                    />
                                    <CustomContainedButton
                                        label="Confirmer"
                                        uppercase={true}
                                        onPress={() => navigation.replace('Congratulations')}
                                        styles={{height: isSmallMobile ? height/16 : isMediumMobile ? height/14 : isLargeMobile ? height/12 : height/10}}
                                        labelStyle={{fontSize: isSmallMobile ? 14 : isMediumMobile ? 20 : isLargeMobile ? 18 : 26}}
                                    />
                                </View>

                            </View>

                        </View>

                    </View>

                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

export default ConfirmationTontine;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'space-between'
    },
    subContainer: {
        backgroundColor: '#2E8B57',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
    },
    formContainer: {
        flex: 1,
        marginVertical: 5
    }
});