import { createMaterialTopTabNavigator, MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import { Text } from 'react-native-paper';
import { Pressable, ScaledSize, StyleSheet, useWindowDimensions, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import OffersTontine from '../../screens/offersTontine';
import MyTontine from '../../screens/myTontine';
import { baseStyles } from '../../styles/baseStyles';

const Tab = createMaterialTopTabNavigator();

const CustomTabBar: React.FC<MaterialTopTabBarProps> = ({ state, descriptors, navigation }) => {

    const { width, height } : ScaledSize = useWindowDimensions();

    // Définition des breakpoints
    const isSmallMobile = width >= 320 && width < 374;
    const isMediumMobile = width >= 375 && width < 424;
    const isLargeMobile = width >= 425 && width < 1024;
    
    return (
        <View style={[styles.tabBar, {paddingHorizontal: isSmallMobile ? 50 : 40}]}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label = options.tabBarLabel || options.title || route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                // Définir l'icône en fonction de l'onglet
                const iconName = route.name === 'OffersTontine' ? 'wallet' : 'account-group';

                // Styles personnalisés pour l'onglet actif/inactif
                const tabStyle = isFocused ? styles.activeTab : styles.inactiveTab;
                const textStyle = isFocused ? styles.activeTabText : styles.inactiveTabText;

                return (
                    <Pressable
                        key={route.key}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        style={[baseStyles.flexRow, baseStyles.flexCenter, styles.tab, tabStyle, {
                            width: isSmallMobile ? width/3.5 : isMediumMobile ? width/2.6 : isLargeMobile ? height/2.4 : height/2.2,
                            height: isSmallMobile ? height/16.5 : isMediumMobile ? height/17 : isLargeMobile ? height/19 : height/21,
                            paddingHorizontal: isSmallMobile ? 5 : 10, marginHorizontal: isSmallMobile ? 15 : 7,
                            borderRadius: 12,
                        }]}
                    >
                        <Icon name={iconName} size={isSmallMobile ? 20 : isMediumMobile ? 26 : isLargeMobile ? 32 : 40} color={isFocused ? '#FFFFFF' : '#000000'} style={styles.icon} />
                        <Text style={[textStyle, {fontSize: isSmallMobile ? 10 : 16}]}>
                            {label as string}
                        </Text>
                    </Pressable>
                );
            })}
        </View>
    );
};

function TontineTopTab() {
    return(
        <Tab.Navigator
            initialRouteName='OffersTontine'
            tabBar={props => <CustomTabBar {...props} />}
        >
            <Tab.Screen 
                name='OffersTontine' 
                component={OffersTontine}
                options={{ tabBarLabel: 'Offres' }}
            />
            <Tab.Screen 
                name='MyTontine' 
                component={MyTontine}
                options={{ tabBarLabel: 'Mes tontines' }}
            />
        </Tab.Navigator>
    );
}


export default TontineTopTab;

const styles = StyleSheet.create({
    tabBar: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'transparent',
        paddingVertical: 5,
        
    },
    tab: {
        elevation: 3, // Ajoute une élévation pour l'ombre sur Android
        shadowColor: "#000", // Ajoute une ombre pour iOS
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    activeTab: {
        backgroundColor: '#2E8B57',
    },
    inactiveTab: {
        backgroundColor: '#FFFFFF',
    },
    activeTabText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    inactiveTabText: {
        color: '#000000',
        fontWeight: 'bold',
    },
    icon: {
        marginRight: 10,
    },
});