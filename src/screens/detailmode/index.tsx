import React from "react";
import { Image, ImageBackground, ScaledSize, StyleSheet, useWindowDimensions, View } from "react-native";
import { Button, IconButton, Text, Icon } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { COLORS } from "../../constants/themes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

type RootStackParamList = {
    Congratulations: undefined;
    DetailMode: undefined
};

type DetailModeNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'DetailMode'
>;


function DetailMode() {

    const navigation = useNavigation<DetailModeNavigationProp>();

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
                        size={isSmallMobile ? 20 : isMediumMobile ? 26 : isLargeMobile ? 32 : 40}
                        onPress={() => navigation.goBack()}
                        style={{
                            marginTop: '15%',
                            marginLeft: '10%'
                        }}
                    />
                    
                    <View style={styles.subContainer}>
                        <View style={{flex: 0.2, marginVertical: 15, marginHorizontal: 40, display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                            <Image
                                source={require('../../assets/images/banner.jpg')}
                                style={{
                                    width: isSmallMobile ? width/4 : isMediumMobile ? width/3.9 : isLargeMobile ? width/3.7 : width/3.5,
                                    height: isSmallMobile ? height/11 : isMediumMobile ? height/10 : isLargeMobile ? height/9 : height/8,
                                    borderWidth: 2,
                                    borderColor: '#2E8B57', 
                                    borderRadius: 16
                                }}
                                resizeMode="cover"
                            />
                            <Image
                                source={require('../../assets/images/banner.jpg')}
                                style={{
                                    width: isSmallMobile ? width/4 : isMediumMobile ? width/3.9 : isLargeMobile ? width/3.7 : width/3.5,
                                    height: isSmallMobile ? height/11 : isMediumMobile ? height/10 : isLargeMobile ? height/9 : height/8,
                                    borderWidth: 2,
                                    borderColor: '#2E8B57', 
                                    borderRadius: 16
                                }}
                                resizeMode="cover"
                            />
                            <View
                                style={{
                                    width: isSmallMobile ? width/4 : isMediumMobile ? width/3.9 : isLargeMobile ? width/3.7 : width/3.5,
                                    height: isSmallMobile ? height/11 : isMediumMobile ? height/10 : isLargeMobile ? height/9 : height/8,
                                    borderRadius: 16,
                                    backgroundColor: 'orange'
                                }}
                            >
                                <Text variant={isSmallMobile ? 'bodyLarge' : isMediumMobile ? 'headlineLarge' : 'displayLarge'} style={{margin: 'auto', fontWeight: 'bold', color: '#ffffff'}}>
                                    +10
                                </Text>
                            </View>
                        </View>

                        <View style={[
                            styles.subContainer, 
                            {
                                flex: 1, 
                                backgroundColor: '#ffffff', 
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
                                    variant={isSmallMobile ? 'labelSmall' : isMediumMobile ? 'bodyLarge' : 'headlineLarge'}
                                >
                                    Immeuble BOGO / BOBO DSS | BF
                                </Text >
                                <Text
                                    variant={isSmallMobile ? 'labelSmall' : isMediumMobile ? 'labelMedium' : 'labelLarge'}
                                    style={{
                                        color: '#2E8B57',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    Disponible
                                </Text>
                            </View>

                            <View>
                                <Text 
                                    style={{
                                        fontWeight: 'bold',
                                        textTransform: "uppercase"
                                    }}
                                    variant={isSmallMobile ? 'labelSmall' : isMediumMobile ? 'bodyLarge' : 'headlineLarge'}
                                >
                                    Description
                                </Text>
                                <Text variant={isSmallMobile ? 'bodySmall' : isMediumMobile ? 'bodyMedium' : 'bodyLarge'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, iure. Fugiat rem id tenetur, officia voluptas beatae? At excepturi voluptatibus delectus. Ipsa iusto id deserunt corporis aperiam vel eligendi labore?</Text>
                            </View>

                            <View>
                                <Text 
                                    style={{
                                        fontWeight: 'bold',
                                        textTransform: "uppercase"
                                    }}
                                    variant={isSmallMobile ? 'labelSmall' : isMediumMobile ? 'bodyLarge' : 'headlineLarge'}
                                >
                                    Adresse
                                </Text>
                                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', columnGap: 20}}>
                                    <Icon source="map" size={isSmallMobile ? 20 : isMediumMobile ? 26 : isLargeMobile ? 32 : 40} color={COLORS.primary}/>
                                    <Text variant={isSmallMobile ? 'bodySmall' : isMediumMobile ? 'bodyMedium' : 'bodyLarge'}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                                </View>
                                <View style={{display: 'flex'}}>
                                    <Text 
                                        variant={isSmallMobile ? 'labelSmall' : isMediumMobile ? 'labelMedium' : 'labelLarge'}
                                        style={{
                                            color: '#2E8B57',
                                            fontWeight: 'bold',
                                            alignSelf: 'flex-end'
                                        }}
                                    >
                                        Cliquez ici
                                    </Text>
                                    <Image
                                        source={require('../../assets/images/maps.webp')}
                                        style={{
                                            width: isSmallMobile ? width/1.28 : isMediumMobile ? width/1.25 : isLargeMobile ? width/1.23 : width/1.21,
                                            height: isSmallMobile ? height/7 : isMediumMobile ? height/6 : isLargeMobile ? height/5 : height/4,
                                            borderRadius: 8
                                        }}
                                        resizeMode="cover"
                                    />
                                </View>
                            </View>

                            <View
                                style={{
                                    position: 'absolute',
                                    bottom: 20,
                                    backgroundColor: '#ffffff',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-around',
                                    width: isSmallMobile ? width/1.15 : isMediumMobile ? width/1.13 : isLargeMobile ? width/1.11 : width/1.09,
                                    height: isSmallMobile ? height/14 : isMediumMobile ? height/16 : isLargeMobile ? height/18 : height/20,
                                    elevation: 3,
                                    padding: 8,
                                    borderRadius: 8,
                                    marginHorizontal: 25
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
                                        onPress={() => navigation.replace('Congratulations')}
                                    >
                                        Reserver
                                    </Button>
                                </View>
                            </View>

                        </View>
                        
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

export default DetailMode;

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