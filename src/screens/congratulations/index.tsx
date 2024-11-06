import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { ScaledSize, StyleSheet, useWindowDimensions, View } from "react-native";
import { Button, Icon, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../constants/themes";

type RootStackParamList = {
    Congratulations: undefined;
    BottomTab: undefined
};

type CongratulationsNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'Congratulations'
>;

function Congratulations() {

    const navigation = useNavigation<CongratulationsNavigationProp>();

    const { width, height } : ScaledSize = useWindowDimensions();

    // Définition des breakpoints
    const isSmallMobile = width >= 320 && width < 374;
    const isMediumMobile = width >= 375 && width < 424;
    const isLargeMobile = width >= 425 && width < 1024;
    
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#2E8B57'}}>

            <View style={styles.whiteContainer}>

                <View style={{flex:0.35, padding: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
                    <Icon source={"check-decagram"} size={isSmallMobile ? 24 : isMediumMobile ? 30 : isLargeMobile ? 36 : 44} color={COLORS.primary}/>
                    <Text variant={isSmallMobile ? 'headlineSmall' : isMediumMobile ? 'headlineMedium' : 'headlineLarge'} style={{fontWeight: 'bold', color: '#2E8B57'}}>Felicitations</Text>
                    <View style={{
                        width: isSmallMobile ? width/1.6 : isMediumMobile ? width/1.5 : isLargeMobile ? width/1.4 : width/1.3,
                        height: isSmallMobile ? height/8 : isMediumMobile ? height/9 : isLargeMobile ? height/10 : height/11,
                        backgroundColor: '#f5f5f5', 
                        borderRadius: 20, 
                        justifyContent: 'center', 
                        alignItems: 'center'
                        }}
                    >
                        <View style={{
                            width: isSmallMobile ? width/7 : isMediumMobile ? width/8 : isLargeMobile ? width/9 : width/10,
                            }}
                        >
                            <Icon source="set-all" size={isSmallMobile ? 20 : isMediumMobile ? 26 : isLargeMobile ? 32 : 40} color={COLORS.primary}/>
                        </View>
                        
                            <Text variant={isSmallMobile ? 'bodySmall' : isMediumMobile ? 'bodyMedium' : 'bodyLarge'} style={{fontWeight: 'bold', color: '#2E8B57'}}>01</Text>
                            <Text variant={isSmallMobile ? 'labelSmall' : isMediumMobile ? 'labelMedium' : 'labelLarge'} style={{fontWeight: 'bold', color: '#2E8B57'}}>Reservation</Text>
                        
                    </View>
                </View>
    
                <View style={{
                    flex: 0.4, 
                    width: isSmallMobile ? width/1.6 : isMediumMobile ? width/1.5 : isLargeMobile ? width/1.4 : width/1.3,
                    justifyContent: 'space-between'
                    }}
                >

                    <View style={{rowGap: 5}}>
                        <Text variant={isSmallMobile ? 'bodySmall' : isMediumMobile ? 'bodyMedium' : 'bodyLarge'} style={{fontWeight: 'bold'}}>Immeuble GOGO / BOBO DSS</Text>
                        <Text variant={isSmallMobile ? 'bodySmall' : isMediumMobile ? 'bodyMedium' : 'bodyLarge'} style={{fontWeight: 'bold'}}>Balance : <Text>12 000 FCFA/mois</Text></Text>
                    </View>

                    <View>
                        <Text variant={isSmallMobile ? 'bodySmall' : isMediumMobile ? 'bodyMedium' : 'bodyLarge'} style={{fontWeight: 'bold'}}>Consignes : <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt cum ratione a quaerat laborum nisi distinctio, repellat aperiam reiciendis dolore ipsam sunt ea enim officia velit et porro repellendus ex?</Text></Text>
                    </View>

                    <View>
                        <Text variant={isSmallMobile ? 'bodySmall' : isMediumMobile ? 'bodyMedium' : 'bodyLarge'} style={{fontWeight: 'bold'}}>Date et heure</Text>
                        <Text variant={isSmallMobile ? 'bodySmall' : isMediumMobile ? 'bodyMedium' : 'bodyLarge'}>25 Jul 2024 / 15.30P;</Text>
                    </View>

                </View>

                <View style={{
                    flex: 0.1, 
                    width: isSmallMobile ? width/1.6 : isMediumMobile ? width/1.5 : isLargeMobile ? width/1.4 : width/1.3, 
                    justifyContent: 'center'
                    }}
                >
                    <Button 
                        mode="contained-tonal" 
                        buttonColor="#2E8B57" 
                        textColor="#ffffff" 
                        onPress={() => navigation.replace('BottomTab')}
                        style={{height: isSmallMobile ? height/16 : isMediumMobile ? height/20 : isLargeMobile ? height/22 : height/24}}
                        labelStyle={{fontSize: isSmallMobile ? 14 : isMediumMobile ? 20 : isLargeMobile ? 18 : 26}}
                    >
                        Fermer
                    </Button>
                </View>
            </View>

        </SafeAreaView>
    );
}

export default Congratulations;

const styles=StyleSheet.create({
    whiteContainer: {
        flex: 0.8, 
        backgroundColor: '#ffffff', 
        marginHorizontal: 'auto', 
        marginVertical: 'auto', 
        width: '90%', 
        borderRadius: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
});