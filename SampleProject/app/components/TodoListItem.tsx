import React, { FC } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../styles/components/TodoListItem";

interface ItemProps {}

const TodoListItem: FC<ItemProps> = props => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <View>
                    <Image source={require("../img/checked.png")} style={styles.completeCircle}/>
                </View>
            </TouchableOpacity>
            <Text style={[styles.text, styles.strikeText]}>TodoList items will be shown here</Text>
            <TouchableOpacity style={styles.buttonContainer}>
                <Image source={require("../img/delete.png")} style={styles.deleteBtn}/>
            </TouchableOpacity>
        </View>
    );
}

export default TodoListItem;