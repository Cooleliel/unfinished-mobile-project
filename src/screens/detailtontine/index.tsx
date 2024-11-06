import React from "react";
import { Image, ImageBackground, ScaledSize, StyleSheet, useWindowDimensions, View } from "react-native";
import { Button, IconButton, Text, Icon } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../constants/themes";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";


type RootStackParamList = {
    DetailTontine: undefined;
    ConfirmationTontine: undefined
};

type DetailTontineNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'DetailTontine'
>;

function DetailTontine() {

    const navigation = useNavigation<DetailTontineNavigationProp>();

    const { width, height } : ScaledSize = useWindowDimensions();

    // Définition des breakpoints
    const isSmallMobile = width >= 320 && width < 374;
    const isMediumMobile = width >= 375 && width < 424;
    const isLargeMobile = width >= 425 && width < 1024;
    
    return(
        <SafeAreaView style={{flex: 1}}>
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
                                display: 'flex',
                                justifyContent: 'flex-end'
                            }
                        ]}
                    >

                        <View style={[
                            styles.subContainer, 
                            {
                                flex: 0.9, 
                                backgroundColor: '#FCFCFC', 
                                paddingTop: 10, 
                                paddingHorizontal: 40,
                                display: 'flex',
                                justifyContent: 'space-around'                       
                            }
                            ]}
                        >
                            <View 
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}
                            >
                                <Text 
                                    style={{
                                        fontWeight: 'bold'
                                    }}
                                    variant={isSmallMobile ? 'labelLarge' : isMediumMobile ? 'titleLarge' : 'headlineLarge'}
                                >
                                    Tontine Maison
                                </Text >
                                <Text
                                    variant={isSmallMobile ? 'labelSmall' : isMediumMobile ? 'labelMedium' : 'labelLarge'}
                                    style={{
                                        color: '#2E8B57',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    03 PLACES
                                </Text>
                            </View>

                            <View 
                                style={{
                                    rowGap: isSmallMobile ? 5 : 10
                                }}
                            >
                                <Text 
                                    style={{
                                        fontWeight: 'bold',
                                        textTransform: "uppercase"
                                    }}
                                    variant={isSmallMobile ? 'labelLarge' : isMediumMobile ? 'titleLarge' : 'headlineLarge'}
                                >
                                    Description
                                </Text>
                                <Text variant={isSmallMobile ? 'bodySmall' : isMediumMobile ? 'bodyMedium' : 'bodyLarge'} style={{textAlign: "justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, iure. Fugiat rem id tenetur, officia voluptas beatae? At excepturi voluptatibus delectus. Ipsa iusto id deserunt corporis aperiam vel eligendi labore?</Text>
                            </View>

                            <View 
                                style={{
                                    rowGap: isSmallMobile ? 5 : 10
                                }}
                            >
                                <Text 
                                    style={{
                                        fontWeight: 'bold',
                                        textTransform: "uppercase",
                                        textAlign: "justify"
                                    }}
                                    variant={isSmallMobile ? 'labelLarge' : isMediumMobile ? 'titleLarge' : 'headlineLarge'}
                                >
                                    Participants
                                </Text>

                                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <View
                                        style={{
                                            width: '50%',
                                            display: 'flex', 
                                            flexDirection: 'row', 
                                            columnGap: 15,
                                            alignItems: 'center'
                                        }}
                                    >
                                        <Icon source="account" size={isSmallMobile ? 20 : isMediumMobile ? 26 : isLargeMobile ? 32 : 40} color={COLORS.primary}/>
                                        <Text variant={isSmallMobile ? 'bodySmall' : isMediumMobile ? 'bodyMedium' : 'bodyLarge'} style={{textAlign: "justify"}}>10 places</Text>
                                    </View>
                                    <Text variant={isSmallMobile ? 'bodySmall' : isMediumMobile ? 'bodyMedium' : 'bodyLarge'} style={{textAlign: "justify"}}>10 000 / Mois</Text>
                                </View>

                                <View style={{display: 'flex', flexDirection: 'row', columnGap: 15, alignItems: 'center'}}>
                                    <Icon source="book-open-variant" size={isSmallMobile ? 20 : isMediumMobile ? 26 : isLargeMobile ? 32 : 40} color={COLORS.primary}/>
                                    <Text variant={isSmallMobile ? 'bodySmall' : isMediumMobile ? 'bodyMedium' : 'bodyLarge'} style={{textAlign: "justify"}}>Cliquez ici pour voir les conditions</Text>    
                                </View>

                                <View style={{display: 'flex', flexDirection: 'row', columnGap: 15, alignItems: 'center'}}>
                                    <Icon source="map" size={isSmallMobile ? 20 : isMediumMobile ? 26 : isLargeMobile ? 32 : 40} color={COLORS.primary}/>
                                    <Text variant={isSmallMobile ? 'bodySmall' : isMediumMobile ? 'bodyMedium' : 'bodyLarge'} style={{textAlign: "justify"}}>BOBO 2010 en face de NIBA TIC 300m Mosquee de Hadja</Text>    
                                </View>
                                
                            </View>

                        </View>

                        <View
                            style={{
                                
                                backgroundColor: '#ffffff',
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-around',
                                width: isSmallMobile ? width/0.99 : isMediumMobile ? width/0.99 : isLargeMobile ? width/0.99 : width/0.99,
                                height: isSmallMobile ? height/9 : isMediumMobile ? height/10 : isLargeMobile ? height/11 : height/12,
                                paddingHorizontal: 30
                            }}
                        >
                            <Text 
                                style={{
                                    fontWeight: 'bold',
                                }}
                                variant={isSmallMobile ? 'labelSmall' : isMediumMobile ? 'labelMedium' : 'labelLarge'}
                            >
                                120.000 / Mois
                            </Text>

                            <View 
                                style={{
                                    width: isSmallMobile ? width/1.9 : isMediumMobile ? width/2 : isLargeMobile ? width/2.1 : width/2.2,
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <IconButton icon="whatsapp" size={isSmallMobile ? 20 : isMediumMobile ? 26 : isLargeMobile ? 32 : 40} iconColor={COLORS.primary}/>
                                <IconButton icon="phone" size={isSmallMobile ? 20 : isMediumMobile ? 26 : isLargeMobile ? 32 : 40} iconColor={COLORS.primary}/>
                                <Button
                                    mode="text" 
                                    buttonColor="#2E8B57"
                                    compact
                                    contentStyle={{
                                        paddingHorizontal: 16
                                    }}
                                    textColor="#fff"
                                    style={{borderRadius: 5, height: isSmallMobile ? height/16 : isMediumMobile ? height/22 : isLargeMobile ? height/24 : height/26,}}
                                    labelStyle={{fontWeight: 'bold', fontSize: isSmallMobile ? 11 : isMediumMobile ? 16 : isLargeMobile ? 18 : 22}}
                                    onPress={() => navigation.navigate('ConfirmationTontine')}
                                >
                                    Participer
                                </Button>
                            </View>
                        </View>
                        
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

export default DetailTontine;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        display: 'flex',
        justifyContent: 'space-between'
    },
    subContainer: {
        flex: 0.78,
        backgroundColor: '#000C1F',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
    },
    formContainer: {
        flex: 1,
        marginVertical: 5
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