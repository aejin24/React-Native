import React, { FC, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../styles/components/TodoInsert";

interface InsertProps {
    onAddTodo(text: string): void
}

const TodoInsert: FC<InsertProps> = ({ onAddTodo }) => {
    const [newTodoItem, setNewTodoItem] = useState<string>("");
    const todoInputHandler = (newTodo: string) => {
        setNewTodoItem(newTodo);
    }

    const addTodoHandler = () => {
        onAddTodo(newTodoItem);
        setNewTodoItem("");
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                placeholder="Add an item"
                style={styles.input}
                placeholderTextColor={"#999"}
                autoCorrect={false} 
                onChangeText={todoInputHandler}   
            />

            <View>
                <TouchableOpacity>
                    <Text style={styles.button} onPress={addTodoHandler}>ADD</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default TodoInsert;