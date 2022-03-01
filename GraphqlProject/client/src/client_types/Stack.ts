// 필요한 스크린에 대해 enum 타입을 정의한다
export enum Screens {
    Home = "Home",
    Register = "Register",
    Select = "Select",
    Update = "Update",
    Delete = "Delete"
}

export type ScreensType = keyof typeof Screens;

export type StackParamList = {
    "Home": undefined; // 전달할 파라미터가 없음을 의미
    "Register": undefined;
    "Select": undefined;
    "Update": undefined;
    "Delete": undefined;
};