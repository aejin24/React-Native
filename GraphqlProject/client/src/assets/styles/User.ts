import { StyleSheet } from "react-native";

export default StyleSheet.create({
    info: {
        padding: 25,
        height: 100,
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    text: {
        fontSize: 20
    },
    title : {
        fontSize: 20
    },
    container: {
        padding: 25,
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    refreshBtn: {
        width: 30,
        height: 30,
        marginLeft: 25
    }
});