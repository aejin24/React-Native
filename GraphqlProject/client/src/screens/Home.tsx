import React, { ReactElement } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import styles from "@assets/styles/pages/Main";
import { HomeScreenProp } from "@interface/Navigation";
import { Screens, ScreensType } from "@client_types/Stack";

export default ({ navigation }: HomeScreenProp): ReactElement => {
    const action: string[] = ["Register", "Update", "Select", "Delete"];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>React Native + Realm + GraphQL Example</Text>
            {
                action.map((a, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.btn}
                        activeOpacity={0.8}
                        onPress={() => { navigation.navigate(Screens[a as ScreensType]) }}
                    >
                        <Text style={styles.text}>{a}</Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    );
}