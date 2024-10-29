import { createMaterialTopTabNavigator, MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import { Text } from 'react-native-paper';
import { Pressable, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import OffersTontine from '../../screens/offersTontine';
import MyTontine from '../../screens/myTontine';

const Tab = createMaterialTopTabNavigator();

const CustomTabBar: React.FC<MaterialTopTabBarProps> = ({ state, descriptors, navigation }) => {
    return (
        <View style={styles.tabBar}>
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
                        style={[styles.tab, tabStyle]}
                    >
                        <Icon name={iconName} size={24} color={isFocused ? '#FFFFFF' : '#000000'} style={styles.icon} />
                        <Text style={textStyle}>
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
        paddingHorizontal: 40
    },
    tab: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 12,
        marginHorizontal: 15,
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