// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

//Views
import AlleLand from "./AlleLand";
import MineLand from "./MineLand";

const Tab = createBottomTabNavigator();

export default function TabNav() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName:string;

                        if (route.name === 'Home') {
                            iconName = focused ? 'world' : 'world-o';
                            return <Fontisto name={iconName} size={size} color={color} />
                        } else if (route.name === 'Visited') {
                            iconName = focused ? 'pin' : 'pin-outline';
                            return <MaterialCommunityIcons name={iconName} size={size} color={color} />
                        }

                        // You can return any component that you like here!
                        //return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'black',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="Home" component={AlleLand} />
                <Tab.Screen name="Visited" component={MineLand} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
