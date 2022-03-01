import React, { ReactElement } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useQuery } from "@apollo/react-hooks";

import styles from "@assets/styles/pages/View";
import { UserData } from "@interface/User";
import query from "@graphql/query";

export default (): ReactElement => {
    const { loading, error, data, refetch } = useQuery<UserData>(query.GET_USER);

    if (loading) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }

    if (error) {
        console.log(error);
        return (
            <View>
                <Text>Error :(</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>User list</Text>

            <View style={styles.scView}>
                <ScrollView>
                    {
                        data?.getUser.map(user => (
                            <View key={user.id} style={styles.infoContainer}>
                                <Text style={styles.info}>id: {user.id}</Text>
                                <Text style={styles.info}>{user.email}</Text>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>

            <TouchableOpacity
                onPress={() => refetch()}
                activeOpacity={0.8}
            >
                <Text style={styles.btn}>REFRESH</Text>
            </TouchableOpacity>
        </View>
    );
}