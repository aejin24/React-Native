import { combineReducers } from "redux";
import countReducer from "./countReducer";

export default combineReducers({
    count: countReducer
});

/* 
 * 여러개의 리듀서를 묶어 컴포넌트 파일에서
 * 쉽게 사용할 수 있도록 해주는 역할임
 * redux 모듈의 combineReducer는 트리 구조로 분리된 여러 개의 상태를 하나의 단일 상태 트리로 조합함
 */