import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        borderBottomColor: "#bbb",
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    completeCircle: {
        width: 30,
        height: 30,
        marginRight: 10,
        marginLeft: 20
    },
    text: {
        flex: 5,
        fontWeight: "500",
        fontSize: 18,
        marginVertical: 20,
        width: 100,
    },
    strikeText: {
        color: "#bbb",
        textDecorationLine: "line-through"
    },
    unstrickeText: {
        color: "#29323c"
    },
    buttonContainer: {
        marginVertical: 10,
        marginHorizontal: 10,
    },
    deleteBtn: {
        width: 30,
        height: 30,
        marginRight: 10
    }
});