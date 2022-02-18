import React, { FC } from "react";
import { TextInput, View } from "react-native";
import styles from "../styles/components/Card";

interface CardProps {}

const Card: FC<CardProps> = props => {
    return (
        <View style={styles.card}>
            <TextInput placeholder="Add an item" style={styles.input}/>
        </View>
    );
}

export default Card;