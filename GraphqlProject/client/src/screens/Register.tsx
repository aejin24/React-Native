import React, { ReactElement, useState } from "react";
import { Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import { useMutation } from "@apollo/client";

import styles from "@assets/styles/pages/Register";
import mutation from "@graphql/mutation";
import { User, RegisterUserRequest } from "@interface/User";

export default (): ReactElement => {
    const [newUser, setNewUser] = useState<string>("");
    const userInputHandler = (newUser: string) => {
        setNewUser(newUser);
    }

    const [registerUser] = useMutation<{ registerUser: User }, { RegisterUserRequest: RegisterUserRequest }>(
        mutation.REGISTER_USER, {
            onError: (error) => {
                console.log(error);
            },
            onCompleted: () => {
                Alert.alert(
                    "Success :)",
                    "등록 완료",
                    [{ text: "OK" }]
                );
            }
        }
    );

    const onSumbitHandler = () => {
        if (!newUser) {
            Alert.alert(
                "Error :(",
                "등록하실 user 정보를 입력해주세요",
                [{ text: "OK" }]
            );
        } else {
            registerUser({variables: { RegisterUserRequest: { email: newUser }}});
        }
    }

    return (
        // 빈공간 클릭 시 키보드 사라지게 하는 component
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
            <View style={styles.container}>
                <TextInput 
                    placeholder="Add New User"
                    style={styles.input}
                    placeholderTextColor={"#999"}
                    autoCorrect={false}
                    onChangeText={userInputHandler}
                />

                <View>
                    <TouchableOpacity activeOpacity={0.8} onPress={onSumbitHandler}>
                        <Text style={styles.button}>REGISTER</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}