import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { TodoInsert, TodoList } from ".";

interface CardProps {}

const Card: FC<CardProps> = props => {
    return (
        <View style={styles.card}>
            <TodoInsert />
            <TodoList/>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#ffffff",
        flex: 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginLeft: 20,
        marginRight: 20
    }
})

export default Card;