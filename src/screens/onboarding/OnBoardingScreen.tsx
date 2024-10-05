import * as React from 'react';
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

export default function OnBoardingScreen() {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <View 
                    style={[
                        styles.circle, 
                        {
                            top: '-15%', 
                            left: '-25%', 
                            width: width * 0.7, 
                            height: width * 0.7
                        }
                    ]}
                ></View>
                <Image 
                    source={require('../../assets/images/sangimmo.png')}
                    style={{
                        width: width * 0.9, 
                        height: width * 0.9, 
                        marginHorizontal: 0, 
                        marginVertical: 'auto'
                    }} 
                />
                <View 
                    style={[
                        styles.circle, 
                        {
                            bottom: '-15%', 
                            right: '-25%', 
                            width: width * 0.7, 
                            height: width * 0.7
                        }
                    ]}
                ></View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        borderColor: 'green',
        flex: 1,
        borderWidth: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    circle: {
        padding: 50, 
        borderRadius: 999,
        backgroundColor: 'green',
        position: 'absolute'
    }
});
