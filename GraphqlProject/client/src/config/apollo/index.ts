import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const httpLink = createHttpLink({
    uri: "http://10.0.2.2:5000/api/graphql", // 안드로이드 애뮬레이터는 localhost로 접근할 수 없다
});

export default new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});