import React, { FC } from "react";
import { SafeAreaView, View } from "react-native";
import { Header, Card } from "../components";
import styles from "../styles/screens/App"

const App: FC = () => { // App은 Function Component 타입을 가진다
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Header title="Hello Todo List"></Header>
                <Card />
            </View>
        </SafeAreaView>
    );
}

export default App;