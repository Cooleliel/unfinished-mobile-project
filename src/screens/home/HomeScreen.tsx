import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { IconButton, Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeTopTabComponent from "../../components/hometoptab/HomeTopTabComponent";

function HomeScreen() {
    return(
        <SafeAreaView
            style={{
                flex: 1, 
                backgroundColor: '#fcfcfc',
                display: 'flex',
                paddingVertical: 30,
                rowGap: 25,
            }}
        >
            <View
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    flexDirection: 'row',
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
                <Dropdown
                    data={[
                        { label: 'Item 1', value: '1' },
                        { label: 'Item 2', value: '2' },
                        { label: 'Item 3', value: '3' },
                        { label: 'Item 4', value: '4' },
                        { label: 'Item 5', value: '5' },
                        { label: 'Item 6', value: '6' },
                        { label: 'Item 7', value: '7' },
                        { label: 'Item 8', value: '8' },
                        { label: 'Item 11', value: '1' },
                        { label: 'Item 21', value: '2' },
                        { label: 'Item 31', value: '3' },
                        { label: 'Item 41', value: '4' },
                        { label: 'Item 51', value: '5' },
                        { label: 'Item 61', value: '6' },
                        { label: 'Item 71', value: '7' },
                        { label: 'Item 81', value: '8' },
                    ]}
                    labelField="label"
                    onChange={() => console.log()}
                    valueField={'value'}
                    style={{
                        backgroundColor: '#ffffff',
                        width: 80,
                        height: 45,
                        elevation: 3
                    }}
                    placeholder="Pays"
                    placeholderStyle={{
                        textAlign: 'center'
                    }}
                    selectedTextStyle={{
                        color: '#2E8B57',
                        textAlign: 'center',
                        fontWeight: 'bold',
                    }}
                    activeColor="#2E8B57"
                    search
                    searchField="label"
                    searchPlaceholder="Rechercher"
                    inputSearchStyle={{
                        borderRadius: 8,
                        color: '#d3d3d3',
                        textAlign: 'center'
                    }}
                    showsVerticalScrollIndicator={false}
                />
            </View>

            <View
                style={{}}
            >
                <Image 
                    source={require('../../assets/images/banner.jpg')} 
                    style={{
                        width: '100%',
                        height: 200 
                    }} 
                    resizeMode="cover"
                />
            </View>

            <View style={styles.searchInputContainer}>
                <Searchbar
                    value={""}
                    placeholder="Que cherchez-vous ...???"
                    elevation={3}
                    inputMode="search"
                    inputStyle={{ textAlign: 'center' }}
                    style={{ backgroundColor: '#fff', borderRadius: 15, padding: 5, width: '90%' }}
                    right={() => <IconButton
                        icon={"tune-vertical"}
                        iconColor="#fff"
                        containerColor="#2E8B57"
                        size={30}
                        style={{ borderRadius: 15 }} />
                    }                 
                />
            </View>
            <HomeTopTabComponent/>
        </SafeAreaView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    searchInputContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        top: '36%',
        zIndex: 5
    }
});