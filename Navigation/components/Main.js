import React  from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Main = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.btnView}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text style={styles.login}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={()=>navigation.navigate("Register")}
                >
                    <Text style={styles.register}>REGISTER</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff"
    },
    btnView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    login: {
        width: 300,
        height: 40,
        borderRadius: 5,
        color: "#000000",
        textAlign: "center",
        lineHeight: 35,
        marginBottom: 30,
        borderStyle: "solid",
        borderColor: "#000000",
        borderWidth: 2
    },
    register: {
        width: 300,
        height: 40,
        borderRadius: 5,
        backgroundColor: "#000000",
        color: "#ffffff",
        textAlign: "center",
        lineHeight: 35
    }
});

export default Main;