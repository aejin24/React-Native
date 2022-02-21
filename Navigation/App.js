import "react-native-gesture-handler";
import React from "react";
import { getFocusedRouteNameFromRoute, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Detail, Settings } from "./components/pages";
import { TabNav, Main, Register, Login } from "./components";
import { Image, TouchableOpacity } from "react-native";

/**
 * 생성한 액션과 리듀서를 애플리케이션에 사용할 수 있도록 루트 컴포넌트에서 설정해주어야한다
 * redux 모듈에 있는 createStore를 통해 스토어를 생성할 수 있다
 * 생성된 store를 사용하기 위해 react-redux 모듈에서 provider를 사용한다
 */

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

const Stack = createStackNavigator();

//stack nav header change function
function getHeaderTitle(route){
    const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";

    switch(routeName) {
        case "Home":
            return "홈";
        case "Market":
            return "마켓";
        case "Counter":
            return "카운터 예제";
    }
}

function setBackArrow(){
    return(
        <Image
            source={require("./assets/icons/back.png")}
            style={{marginLeft: 10, width: 22, height: 22}}
        />
    );
}

const App = () => {
    return (
        <Provider store={createStore(reducers)}>
            <NavigationContainer>
                <Stack.Navigator 
                    headerMode="float"
                    //initialRouteName="Main"
                    initialRouteName="Home"
                >
                    <Stack.Screen
                        name="Main"
                        component={Main}
                        options={{
                            animationEnabled: false,
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="Home"
                        component={TabNav}
                        options={({route, navigation}) => ({
                            headerTitle: getHeaderTitle(route),
                            animationEnabled: false,
                            headerRight: () => (
                                <TouchableOpacity
                                    onPress={() => navigation.navigate("Settings")}
                                >
                                    <Image
                                        source={require("./assets/icons/settings.png")}
                                        resizeMode="contain"
                                        style={{
                                            width: 24,
                                            height: 24,
                                            marginRight: 20,
                                            tintColor: "#000000"
                                        }}
                                    />
                                </TouchableOpacity>
                            ),
                            headerStyle: {
                                shadowColor: "#222222"
                            }
                        })}
                    />
                    <Stack.Screen
                        name="Detail"
                        component={Detail}
                        options={{
                            animationEnabled: false,
                            headerStyle: {
                                shadowColor: "#222222"
                            }
                        }}
                    />
                    <Stack.Screen
                        name="Settings"
                        component={Settings}
                        options={{
                            animationEnabled: false,
                            headerStyle: {
                                shadowColor: "#222222"
                            }
                        }}
                    />
                    <Stack.Screen
                        name="Register"
                        component={Register}
                        options={{
                            animationEnabled: false,
                            headerTitle: "",
                            headerBackImage: setBackArrow,
                            headerStyle: {
                                shadowColor: "#222222"
                            }
                        }}
                    />
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{
                            animationEnabled: false,
                            headerTitle: "",
                            headerBackImage: setBackArrow,
                            headerStyle: {
                                shadowColor: "#222222"
                            }
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;