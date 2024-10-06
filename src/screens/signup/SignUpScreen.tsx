import React from "react";
import { Image, View } from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

function SignUpScreen() {
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#f5f5f5', padding: 50}}>
            <View style={{borderWidth: 2, borderColor: 'red'}}>
                <Text variant="displaySmall" style={{color: '#2E8B57', fontWeight: 'bold'}}>
                    Akwaba sur
                </Text>
                <Image source={require('../../assets/images/sangimmo.png')} style={{alignSelf: 'flex-start',width: 200, height: 45, borderWidth: 2, borderColor: 'red', paddingHorizontal: 0}}/>
            </View>
        </SafeAreaView>
    );
}

export default SignUpScreen;