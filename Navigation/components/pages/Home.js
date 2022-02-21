import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate("Detail")}
            >
                <Text style={styles.detailBtn}>GO TO DETAIL</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    detailBtn: {
        marginTop: 30,
        backgroundColor: "#89216B",
        color: "#ffffff",
        fontWeight: "500",
        width: 150,
        height: 30,
        textAlignVertical: "center",
        textAlign: "center",
        borderRadius: 30
    }
});

export default Home;