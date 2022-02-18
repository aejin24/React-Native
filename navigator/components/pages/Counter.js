import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import ActionCreators from "../../actions";

const Counter = (props) => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 20}}>{props.value}</Text>
            <TouchableOpacity
                onPress={() => {props.countUp(1)}}
            >
                <Text style={styles.upButton}>+1</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {props.countUp(2)}}
            >
                <Text style={styles.upButton}>+2</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {props.countDown(1)}}
            >
                <Text style={styles.downButton}>-1</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {props.countDown(2)}}
            >
                <Text style={styles.downButton}>-2</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    upButton: {
        marginLeft: 20,
        backgroundColor: "#ddd6f3",
        padding: 10,
        borderRadius: 20,
        width: 50,
        height: 50,
        textAlign: "center",
        fontSize: 20
    },
    downButton: {
        marginLeft: 20,
        backgroundColor: "#faaca8",
        padding: 10,
        borderRadius: 20,
        width: 50,
        height: 50,
        textAlign: "center",
        fontSize: 20
    }
});

function mapStateToProps(state){
    //countReducer를 넘길 때, index.js에서 count로 이름을 지정함
    return {
        value: state.count.value
    }
}

function mapDispatchToProps(dispatch){
    return {
        countUp: (num)=> {
            dispatch(ActionCreators.countUp(num))
        },
        countDown: (num)=> {
            dispatch(ActionCreators.countDown(num))
        }
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Counter);

/**
 * 생성된 스토어에 view를 연결하기 위해 view 레이어 바인딩이 필요하다
 * connect를 통해 연결한다
 */