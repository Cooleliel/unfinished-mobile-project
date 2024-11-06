import { createMaterialTopTabNavigator, MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import { Text } from 'react-native-paper';
import { FlatList, Pressable, ScaledSize, StyleSheet, useWindowDimensions, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import GenericScreen from '../generics';
import { useCallback } from 'react';
import { Route } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Generic from '../generics';
import { baseStyles } from '../../styles/baseStyles';

const Tab = createMaterialTopTabNavigator();

interface TabData {
    name: string;
    label: string;
    iconName: string;
}

interface TabBarIconProps {
    focused: boolean;
    color: string;
}

interface RenderItemProps {
    item: Route<string>;
    index: number;
}

const CustomTabBar: React.FC<MaterialTopTabBarProps> = ({ state, descriptors, navigation }) => {

    const { width, height } : ScaledSize = useWindowDimensions();

    // Définition des breakpoints
    const isSmallMobile = width >= 320 && width < 374;
    const isMediumMobile = width >= 375 && width < 424;
    const isLargeMobile = width >= 425 && width < 1024;
    
    const renderItem = useCallback(({ item, index }: RenderItemProps) => {
        const { options } = descriptors[item.key];
        const label = options.tabBarLabel || options.title || item.name;
        const isFocused = state.index === index;

        const onPress = () => {
            const event = navigation.emit({
                type: 'tabPress',
                target: item.key,
                canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(item.name);
            }
        };

        const tabStyle = isFocused ? styles.activeTab : styles.inactiveTab;
        const textStyle = isFocused ? styles.activeTabText : styles.inactiveTabText;
        const iconColor = isFocused ? '#FFFFFF' : '#000000';

        const IconComponent = options.tabBarIcon ? 
            options.tabBarIcon({ focused: isFocused, color: iconColor }) :
            <Icon name="ios-information-circle" size={isSmallMobile ? 20 : isMediumMobile ? 26 : isLargeMobile ? 32 : 40} color={iconColor} />;

        return (
            <Pressable
                key={item.key}
                onPress={onPress}
                style={[baseStyles.flexRow, baseStyles.flexCenter, styles.tab, tabStyle, {
                    width: isSmallMobile ? width/3 : isMediumMobile ? width/2.2 : isLargeMobile ? height/2 : height/1.8,
                    height: isSmallMobile ? height/16.5 : isMediumMobile ? height/17 : isLargeMobile ? height/19 : height/21,
                    paddingHorizontal: 10, 
                    borderRadius: 12,
                }]}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
            >
                {IconComponent}
                <Text style={[textStyle, {fontSize: isSmallMobile ? 10 : 16}]}>
                    {label as string}
                </Text>
            </Pressable>
        );
    }, [state, descriptors, navigation]);

    return (
        <SafeAreaView>
            <FlatList
                data={state.routes}
                renderItem={renderItem}
                keyExtractor={item => item.key}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.tabBar}
                contentContainerStyle={styles.tabBarContent}
            />
        </SafeAreaView>
    );
};

const DynamicTopTab: React.FC<{ tabs: TabData[] }> = ({ tabs }) => {

    const { width, height } : ScaledSize = useWindowDimensions();

    // Définition des breakpoints
    const isSmallMobile = width >= 320 && width < 374;
    const isMediumMobile = width >= 375 && width < 424;
    const isLargeMobile = width >= 425 && width < 1024;
    
    return (
        <Tab.Navigator
            initialRouteName={tabs[0].name}
            tabBar={props => <CustomTabBar {...props} />}
        >
            {tabs.map((tab, index) => (
                <Tab.Screen
                    key={tab.name}
                    name={tab.name}
                    options={{
                        tabBarLabel: tab.label,
                        tabBarIcon: ({ focused, color }: TabBarIconProps) => (
                            <Icon name={tab.iconName} color={color} size={isSmallMobile ? 20 : isMediumMobile ? 26 : isLargeMobile ? 32 : 40} style={styles.icon} />
                        ),
                    }}
                >
                    {() => <Generic item={tab} />}
                </Tab.Screen>
            ))}
        </Tab.Navigator>
    );
};

function HomeTopTab() {
    const tabs: TabData[] = [
        { name: 'Ecran 1', label: 'Immeubles', iconName: 'city' },
        { name: 'Ecran 2', label: 'Residences', iconName: 'city' },
        { name: 'Ecran 3', label: 'Hotels', iconName: 'city' },
        { name: 'Ecran 4', label: 'Appartements', iconName: 'city' },
        { name: 'Ecran 5', label: 'Cours unique', iconName: 'city' },
        { name: 'Ecran 6', label: 'Cours commune', iconName: 'city' }
    ];
    
    return <DynamicTopTab tabs={tabs} />;
}

export default HomeTopTab;

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#fcfcfc',

    },
    tabBarContent: {
        marginTop: 30,
        marginBottom: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,

    },
    tab: {
        marginHorizontal: 15,
        elevation: 3,
        shadowColor: "#000",
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