import { StyleSheet } from "react-native";

export default StyleSheet.create({
    inputContainer: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginBottom: 30,
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    input: {
        paddingTop: 20,
        paddingBottom: 10,
        borderBottomColor: "#bbb",
        borderBottomWidth: 1,
        fontSize: 20,
        marginLeft: 20,
        marginRight: 20,
        flex: 1
    },
    button: {
        marginTop: 20,
        marginRight: 10,
        fontSize: 20,
        color: "#000"
    }
});