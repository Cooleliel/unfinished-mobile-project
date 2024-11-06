import React from "react";
import { Image, ScaledSize, StyleSheet, useWindowDimensions, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { IconButton, Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { Brand } from "../../components/brand";
import { baseStyles } from "../../styles/baseStyles";
import { COLORS } from "../../constants/themes";
import HomeTopTab from "../../components/hometoptab";

function Home() {
    const { width, height } : ScaledSize = useWindowDimensions();

    // Définition des breakpoints
    const isSmallMobile = width >= 320 && width < 374;
    const isMediumMobile = width >= 375 && width < 424;
    const isLargeMobile = width >= 425 && width < 1024;
    
    return(
        <SafeAreaView
            style={[baseStyles.container, {
                paddingVertical: 10,
                rowGap: isSmallMobile ? 8 : 20,
            }]}
        >
            <View
                style={[baseStyles.flexRow, {
                    justifyContent: 'space-around',
                    alignItems: "center"
                }]}
            >
                <Brand
                    style={{
                        width: isSmallMobile ? width/3 : isMediumMobile ? width/2 : isLargeMobile ? width : width*2, 
                        height: isSmallMobile ? height/22 : isMediumMobile ? height/15 : isLargeMobile ? height/12 : height/9,
                        
                    }}
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
                        backgroundColor: COLORS.background,
                        width: isSmallMobile ? width/6 : isMediumMobile ? width/6 : isLargeMobile ? height/8 : height/8,
                        height: isSmallMobile ? height/18 : isMediumMobile ? height/20 : isLargeMobile ? height/22 : height/24,
                        elevation: 3
                    }}
                    placeholder="Pays"
                    placeholderStyle={{
                        textAlign: 'center'
                    }}
                    selectedTextStyle={{
                        color: COLORS.primary,
                        textAlign: 'center',
                        fontWeight: 'bold',
                    }}
                    activeColor={COLORS.primary}
                    search
                    searchField="label"
                    searchPlaceholder="Rechercher"
                    inputSearchStyle={{
                        borderRadius: 8,
                        color: COLORS.placeholder,
                        textAlign: 'center'
                    }}
                    showsVerticalScrollIndicator={false}
                />
            </View>

            <View>
                <Image 
                    source={require('../../assets/images/banner.jpg')} 
                    style={{
                        width: width,
                        height: isSmallMobile ? height/3 : isMediumMobile ? height/4 : isLargeMobile ? height/22 : height/24 
                    }} 
                    resizeMode="contain"
                />
            </View>

            <View style={[baseStyles.flexCenter, {
                position: 'absolute', 
                width: width, 
                top: isSmallMobile ? height/2.8 : isMediumMobile ? height/3.3 : isLargeMobile ? height/3.6 : height/3.9,
                zIndex: 5
            }]}>
                <Searchbar
                    value={""}
                    placeholder="Que cherchez-vous ...???"
                    elevation={3}
                    inputMode="search"
                    inputStyle={{ 
                        textAlign: 'center',
                        fontSize: isSmallMobile ? 12 : isMediumMobile ? 18 : isLargeMobile ? 20 : 24
                    }}
                    style={{ 
                        backgroundColor: '#fff', 
                        borderRadius: 15, 
                        padding: 5, 
                        width: isSmallMobile ? width/1.3 : isMediumMobile ? width/1.25 : isLargeMobile ? width/1.2 : width/1.15,
                        height: isSmallMobile ? height/11 : isMediumMobile ? height/12 : isLargeMobile ? height/14 : height/16
                    }}
                    right={() => <IconButton
                        icon={"tune-vertical"}
                        iconColor="#fff"
                        containerColor="#2E8B57"
                        size={isSmallMobile ? 20 : isMediumMobile ? 26 : isLargeMobile ? 32 : 40}
                        style={{ borderRadius: 15 }} />
                    }                 
                />
            </View>
            <HomeTopTab/>
        </SafeAreaView>
    );
}

export default Home;