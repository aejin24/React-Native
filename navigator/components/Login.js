import React, { useState } from "react";
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

function chkUser(id, pw, navigation){
    if(!id){
        return Alert.alert("아이디를 입력해주세요");
    }else if(id !== "aejin"){
        return Alert.alert("유효하지 않은 아이디입니다", "다시 입력해주세요")
    }else if(!pw){
        return Alert.alert("비밀번호를 입력해주세요");
    }else if(pw !== "1224"){
        return Alert.alert("유효하지 않은 비밀번호입니다", "다시 입력해주세요");
    }else{
        return navigation.reset({routes: [{name: "Home"}]});
    }
}

const Login = ({navigation}) => {
    let [id, setId] = useState("");
    let [pw, setPw] = useState("");
    
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Login</Text>
                <Text style={styles.subtitle}>로그인이 어쩌구 저쩌구해서 이러쿵 저러쿵</Text>
            </View>
            <View style={styles.formView}>
                <View style={styles.inputWrap}>
                    <Image
                        source={require("../assets/icons/login.png")}
                        style={styles.inputImg}
                    />
                    <TextInput
                        placeholder="ID"
                        style={styles.input}
                        defaultValue={id}
                        underlineColorAndroid="transparent"
                        onChangeText={(text) => setId(text)}
                    />
                </View>
                <View style={styles.inputWrap}>
                    <Image
                        source={require("../assets/icons/unlock.png")}
                        style={styles.inputImg}
                    />
                    <TextInput
                        placeholder="PW"
                        style={styles.input}
                        underlineColorAndroid="transparent"
                        secureTextEntry //비밀번호 보안? 타입 지정
                        defaultValue={pw}
                        onChangeText={(text) => setPw(text)}
                    />
                </View>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => chkUser(id, pw, navigation)}
                >
                    <Text style={styles.login}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        paddingHorizontal: 30,
        paddingVertical: 30
    },
    title: {
        fontSize: 30
    },
    subtitle: {
        marginTop: 5
    },
    formView: {
        marginTop: 50
    },
    input: {
        width: "100%",
        flex: 1
    },
    login: {
        width: "100%",
        height: 50,
        textAlign: "center",
        backgroundColor: "#000000",
        color: "#ffffff",
        borderRadius: 5,
        lineHeight: 45
    },
    inputWrap: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#000000",
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15
    },
    inputImg: {
        width: 30,
        height: 30,
        alignItems: "center",
        marginLeft: 5,
        marginRight: 5
    }
});

export default Login;