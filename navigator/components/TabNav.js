import "react-native-gesture-handler";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Counter, Market } from "./pages";
import { Image, StyleSheet, Text, View } from "react-native";

const Tab = createBottomTabNavigator();

const TabNav = () => {
    return(
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                showLabel: false,
                style: styles.tabContainer
            }}
        >
            <Tab.Screen
                name="Counter"
                component={Counter}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: "center", top: 10}}>
                            <Image
                                source={require("../assets/icons/link.png")}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: focused ? "#e32f45" : "#748c94"
                                }}
                            />
                            <Text style={{
                                color: focused ? "#e32f45" : "#748c94",
                                fontSize: 12
                            }}>카운터</Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: "center", top: 10}}>
                            <Image
                                source={require("../assets/icons/home.png")}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? "#e32f45" : "#748c94"
                                }}
                            />
                            <Text style={{
                                color: focused ? "#e32f45" : "#748c94",
                                fontSize: 12
                            }}>홈</Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Market"
                component={Market}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: "center", top: 10}}>
                            <Image
                                source={require("../assets/icons/shopping.png")}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? "#e32f45" : "#748c94"
                                }}
                            />
                            <Text style={{
                                color: focused ? "#e32f45" : "#748c94",
                                fontSize: 12
                            }}>마켓</Text>
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabContainer: {
        height: 60,
        paddingBottom: 15
    }
})

export default TabNav;