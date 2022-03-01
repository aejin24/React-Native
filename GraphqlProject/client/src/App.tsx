import "react-native-gesture-handler"; // 다양한 손동작을 처리하기 위함
import React, { FC } from "react";
import { ApolloProvider } from "@apollo/client";

import client from "@config/apollo";
import { RootComponent } from "./components";

const App: FC = () => {
    return (
        <ApolloProvider client={client}>
            <RootComponent />
        </ApolloProvider>
    );
}

export default App;