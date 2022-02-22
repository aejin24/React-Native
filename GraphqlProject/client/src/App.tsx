import React, { FC } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { ApolloProvider } from "@apollo/client";

import client from "./util/apollo/client";

const App: FC = () => {
    return (
        <ApolloProvider client={client}>
            <SafeAreaView>
                <View>
                    <Text>Hello</Text>
                </View>
            </SafeAreaView>
        </ApolloProvider>
    );
}

export default App;