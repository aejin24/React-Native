import React  from "react";
import { StyleSheet, Text, View } from "react-native";

const Market = () => {
    return (
        <View style={styles.container}>
            <Text>Market</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default Market;