import React, { FC } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../styles/components/TodoListItem";

interface ItemProps {
    id: number,
    textValue: string,
    checked: boolean,
    onRemove(id: number): void,
    onToggle(id: number): void
}

const TodoListItem: FC<ItemProps> = ({ id, textValue, checked, onRemove, onToggle }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => onToggle(id)}>
                <View>
                    <Image
                        source={
                            checked ? require("../img/checked.png") : require("../img/unchecked.png")
                        }
                        style={styles.completeCircle}
                    />
                </View>
            </TouchableOpacity>
            <Text style={[styles.text, checked && styles.strikeText]}>{textValue}</Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => onRemove(id)}>
                <Image source={require("../img/delete.png")} style={styles.deleteBtn}/>
            </TouchableOpacity>
        </View>
    );
}

export default TodoListItem;