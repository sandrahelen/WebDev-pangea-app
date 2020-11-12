// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons, Fontisto } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


//Views
import AlleLand from "./AlleLand";
import MineLand from "./MineLand";

const Tab = createBottomTabNavigator();

export default function TabNav() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName:string;

                    if (route.name === 'Home') {
                        iconName = focused ? 'world' : 'world-o';
                        return <Fontisto name={iconName} size={size} color={color} />
                    } else if (route.name === 'Info') {
                        iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
                        return <Ionicons name={iconName} size={size} color={color} />
                    }
                },
            })}
            tabBarOptions={{
                activeTintColor: 'black',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Home" component={AlleLand} />
            <Tab.Screen name="Info" component={MineLand} />
        </Tab.Navigator>
    );
}
