import { createMaterialTopTabNavigator, MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import OffersTontineScreen from '../../screens/tontine/OffersTontineScreen';
import MyTontineScreen from '../../screens/tontine/MyTontineScreen';
import { Text } from 'react-native-paper';
import { Pressable, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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

                const tabStyle = isFocused ? styles.activeTab : styles.inactiveTab;
                const textStyle = isFocused ? styles.activeTabText : styles.inactiveTabText;
                const iconName = route.name === 'OffersTontine' ? 'camera' : 'camera';

                return (
                    <Pressable
                        key={index}
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

function TontineTopTabComponent() {
    return(
        <Tab.Navigator
            initialRouteName='OffersTontine'
            tabBar={props => <CustomTabBar {...props} />}
        >
            <Tab.Screen 
                name='OffersTontine' 
                component={OffersTontineScreen}
                options={{tabBarLabel: 'Offres'}}
            />
            <Tab.Screen 
                name='MyTontine' 
                component={MyTontineScreen}
                options={{tabBarLabel: 'Mes tontines'}}
            />
        </Tab.Navigator>
    );
}

export default TontineTopTabComponent;

const styles = StyleSheet.create({
    tabBar: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        paddingVertical: 5,
        paddingHorizontal: 40
    },
    tab: {
        flex: 1,
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