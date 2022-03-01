import React, { ReactElement } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Screens, StackParamList } from "@client_types/Stack";
import { Register, Home, Select, Update, Delete } from "@screens/index";

const Stack = createStackNavigator<StackParamList>();

export default (): ReactElement => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={Screens.Home}>
                <Stack.Screen name={Screens.Home} component={Home}/>
                <Stack.Screen name={Screens.Register} component={Register}/>
                <Stack.Screen name={Screens.Select} component={Select}/>
                <Stack.Screen name={Screens.Update} component={Update}/>
                <Stack.Screen name={Screens.Delete} component={Delete}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}