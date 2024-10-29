import React from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";
import { Button, IconButton, Text, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/FontAwesome';
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
                        size={15}
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
                                justifyContent: 'flex-end'
                            }
                        ]}
                    >

                        <View style={[
                            styles.subContainer,
                            {
                                flex: 0.93, 
                                backgroundColor: COLORS.gray[50], 
                                paddingTop: LAYOUT.spacing.xl, 
                                paddingHorizontal: LAYOUT.spacing.xxl,
                            }
                            ]}
                        >
                            <View
                                style={{
                                    flex: 0.68,
                                    borderWidth: LAYOUT.border.width.thick,
                                    borderColor: COLORS.primary,
                                    padding: 16,
                                    borderRadius: 40,
                                    rowGap: 20
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
                                        variant="titleLarge"
                                    >
                                        Tontine Maison
                                    </Text >

                                    <Text
                                        variant="labelSmall"
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
                                        rowGap: 15
                                    }}
                                >
                                    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>

                                        <View
                                            style={[baseStyles.flexRow, {
                                                width: '50%',
                                                columnGap: 15,
                                                alignItems: 'center'
                                            }]}
                                        >
                                            <Icon name="" size={30}/>
                                            <Text variant="bodyMedium" style={{textAlign: "justify"}}>10 places</Text>
                                        </View>
                                        <Text variant="bodyMedium" style={{textAlign: "justify"}}>10 000 / Mois</Text>
                                    </View>
                                    <Text variant="bodyMedium" style={{textAlign: "center"}}>Choisissez le nombre de places que vous souhaitez pour cette tontine</Text> 
                                </View>

                                <View 
                                    style={{
                                        rowGap: 20
                                    }}
                                >
                                    <CustomTextInput
                                        icon="account"
                                        placeholder="Nombre de place"
                                    />
                                    <CustomContainedButton
                                        label="Confirmer"
                                        uppercase={true}
                                        onPress={() => navigation.replace('Congratulations')}
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
        flex: 0.78,
        backgroundColor: '#2E8B57',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
    },
    formContainer: {
        flex: 1,
        marginVertical: 5
    }
});