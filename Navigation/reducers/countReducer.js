import types from "../actions/types";

const defaultCount = {
    value: 0
};

export default (state = defaultCount, action) => {
    switch(action.type){
        case types.COUNT_UP:
            return state = {
                ...state,
                value: state.value + action.payload
            };
        case types.COUNT_DOWN:
            return state = {
                ...state,
                value: state.value - action.payload
            };
        default:
            return state;
    }
}

/*
 * 액션을 전달받은 스토어가 상태를 변경하기 위해 
 * 리듀서에게 어떠한 상태변환을 해야하는지 요청한다
 * 첫 번째 인자로 이전의 state를 전달받고, 두 번째 인자로 action을 전달받음
 * 전달받은 액션의 type을 통해 새로운 state를 반환하는것이 리듀서의 역할임
 * 애플리케이션 실행 후 redux는 처음에 리듀서를 undefined 상태로 호출하기 때문에 
 * default인 상태에서 초기 상태를 설정한다
 */