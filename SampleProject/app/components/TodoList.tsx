import React, { FC } from "react";
import { ScrollView, Text } from "react-native";
import { TodoListItem } from ".";
import styles from "../styles/components/TodoList";

interface Todo {
    id: number,
    textValue: string,
    checked: boolean
}

interface ListProps {
    todos: Array<Todo>,
    onRemove(id: number): void,
    onToggle(id: number): void
}

const TodoList: FC<ListProps> = ({ todos, onRemove, onToggle }) => {
    return (
        <ScrollView contentContainerStyle={styles.listContainer}>
            {
                todos.map(todo => (
                    <TodoListItem key={todo.id} {...todo} onRemove={onRemove} onToggle={onToggle} />
                ))
            }
        </ScrollView>
    );
}

export default TodoList;