import React, { FC, useState } from "react";
import { StyleSheet, View } from "react-native";
import { TodoInsert, TodoList } from ".";

interface Todo {
    id: number,
    textValue: string,
    checked: boolean
}

const Card: FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const addTodo = (text: string) => {
        setTodos([
            ...todos,
            {
                id: Math.random(),
                textValue: text,
                checked: false
            }
        ]);
    }

    const removeTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const toggleTodo = (id: number) => {
        setTodos(
            todos.map(todo => (
                todo.id === id ? {...todo, checked: !todo.checked} : todo
            ))
        );
    }

    return (
        <View style={styles.card}>
            <TodoInsert onAddTodo={addTodo} />
            <TodoList todos={todos} onRemove={removeTodo} onToggle={toggleTodo}/>
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