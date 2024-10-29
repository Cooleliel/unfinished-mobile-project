import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, View } from "react-native";
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
    
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#2E8B57'}}>

            <View style={styles.whiteContainer}>

                <View style={{flex:0.35, padding: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
                    <Icon source={"check-decagram"} size={50} color={COLORS.primary}/>
                    <Text variant="headlineLarge" style={{fontWeight: 'bold', color: '#2E8B57'}}>Felicitations</Text>
                    <View style={{width: 250, height: 110, backgroundColor: '#f5f5f5', borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{width: '40%'}}><Icon source="set-all" size={30} color={COLORS.primary}/></View>
                        
                            <Text variant="headlineLarge" style={{fontWeight: 'bold', color: '#2E8B57'}}>01</Text>
                            <Text variant="bodyLarge" style={{fontWeight: 'bold', color: '#2E8B57'}}>Reservation</Text>
                        
                    </View>
                </View>
    
                <View style={{flex: 0.4, width: '70%', display: 'flex', justifyContent: 'space-between'}}>

                    <View>
                        <Text style={{fontWeight: 'bold'}}>Immeuble GOGO / BOBO DSS</Text>
                        <Text style={{fontWeight: 'bold'}}>Balance : <Text>12 000 FCFA/mois</Text></Text>
                    </View>

                    <View>
                        <Text style={{fontWeight: 'bold'}}>Consignes : <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt cum ratione a quaerat laborum nisi distinctio, repellat aperiam reiciendis dolore ipsam sunt ea enim officia velit et porro repellendus ex?</Text></Text>
                    </View>

                    <View>
                        <Text style={{fontWeight: 'bold'}}>Date et heure</Text>
                        <Text>25 Jul 2024 / 15.30P;</Text>
                    </View>

                </View>

                <View style={{flex: 0.10, width: '70%', display: 'flex', justifyContent: 'center'}}>
                    <Button 
                        mode="contained-tonal" 
                        buttonColor="#2E8B57" 
                        textColor="#ffffff" 
                        onPress={() => navigation.replace('BottomTab')} 
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