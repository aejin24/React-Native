import React, { FC } from "react";
import { ApolloProvider } from "@apollo/client";

import client from "@util/apollo/client";
import { User } from "./components";

const App: FC = () => {
    return (
        <ApolloProvider client={client}>
            <User/>
        </ApolloProvider>
    );
}

export default App;