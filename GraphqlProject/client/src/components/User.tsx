import React, { FC } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { useQuery } from "@apollo/react-hooks";

import styles from "@assets/styles/User";
import { UserData } from "@interface/User";
import query from "@graphql/query";
import { UserCreate } from ".";

const User: FC = () => {
    // return 되는 object의 type과 넘겨주는 인자가 있다면 그 인자의 type을 그 다음에 작성한다
    const { loading, error, data } = useQuery<UserData>(query.GET_USER);

    if (loading) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View>
                <Text>Error :(</Text>
            </View>
        );
    }

    return (
        <SafeAreaView>
            <UserCreate />

            <Text style={styles.title}>user list</Text>

            <ScrollView>
                {
                    data?.getUser.map(user => (
                        <View key={user._id} style={styles.container}>
                            <Text style={styles.text}>id: {user._id}</Text>
                            <Text style={styles.text}>{user.email}</Text>
                        </View>
                    ))
                }
            </ScrollView>
        </SafeAreaView>
    );
}

export default User;