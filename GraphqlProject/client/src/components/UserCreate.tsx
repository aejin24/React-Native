import React, { FC, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useMutation } from "@apollo/react-hooks";

import styles from "@assets/styles/UserCreate";
import mutation from "@graphql/mutation";
import { RegisterUserRequest } from "@interface/User";

const UserCreate: FC = () => {
    const [newUser, setNewUser] = useState<string>("");
    const userInputHandler = (newUser: string) => {
        setNewUser(newUser);
    }

    const [registerUser] = useMutation<{ registerUser: RegisterUserRequest }, { RegisterUserRequest: RegisterUserRequest }>(
        mutation.REGISTER_USER, {
            onError: (error) => {
                console.log(error)
            },
            onCompleted: () => {
                console.log("success")
            }
        }
    );

    const onSumbitHandler = () => {
        if (!newUser) {
            console.log("아무것도 입력되지 않았다~")
        } else {
            registerUser({variables: { RegisterUserRequest: { email: newUser }}});
        }
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                placeholder="Add New User Email"
                style={styles.input}
                placeholderTextColor={"#999"}
                autoCorrect={false}
                onChangeText={userInputHandler}
            />

            <View>
                <TouchableOpacity onPress={onSumbitHandler}>
                    <Text style={styles.button}>ADD</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default UserCreate;