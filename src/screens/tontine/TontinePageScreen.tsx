import React from "react";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Button, Icon, Text } from "react-native-paper";
import TontineTopTabComponent from "../../components/tontinetoptab/TontineTopTabComponent";

function TontinePageScreen() {
    return(
        <SafeAreaView style={{
            flex: 1, 
            backgroundColor: 'transparent',
            display: 'flex',
            paddingVertical: 30,
            rowGap: 25
        }}>
            <View
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: "center"
                }}
            >
                <Image 
                    source={require('../../assets/images/sangimmo.webp')} 
                    style={{
                        width: 200, 
                        height: 45
                    }} 
                    resizeMode="contain"
                />
            </View>

            <View
                style={{
                    backgroundColor: '#2E8B57',
                    paddingVertical: 20,
                    paddingHorizontal: 50,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    columnGap: 20
                }}
            >
                <Icon
                    source="camera"
                    size={25}
                />
                <Text 
                    variant="titleLarge"
                    style={{
                        fontWeight: 'bold',
                        color: '#ffffff',
                    }}
                >
                    Tontine
                </Text>
            </View>
            <TontineTopTabComponent/>
        </SafeAreaView>
    );
}

export default TontinePageScreen;