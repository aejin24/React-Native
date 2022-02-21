import React, { FC } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../styles/components/TodoInsert";

interface InsertProps {}

const TodoInsert: FC<InsertProps> = props => {
    return (
        <View style={styles.inputContainer}>
            <TextInput 
                placeholder="Add an item"
                style={styles.input}
                placeholderTextColor={"#999"}
                autoCorrect={false}    
            />

            <View>
                <TouchableOpacity>
                    <Text style={styles.button}>ADD</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default TodoInsert;