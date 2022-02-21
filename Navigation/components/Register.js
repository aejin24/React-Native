import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Register = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
                <Text style={styles.title}>Register</Text>
                <Text style={styles.subtitle}>회원가입이 어쩌구 저쩌구해서 이러쿵 저러쿵</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        paddingHorizontal: 30,
        paddingVertical: 30
    },
    headerView: {
        flex: 1,
    },
    title: {
        fontSize: 30
    },
    subtitle: {
        marginTop: 5
    }
});

export default Register;