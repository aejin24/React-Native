import React, { FC } from "react";
import { ScrollView, Text } from "react-native";
import { TodoListItem } from ".";
import styles from "../styles/components/TodoList";

interface ListProps {}

const TodoList: FC<ListProps> = props => {
    return (
        <ScrollView contentContainerStyle={styles.listContainer}>
            <TodoListItem />
        </ScrollView>
    );
}

export default TodoList;