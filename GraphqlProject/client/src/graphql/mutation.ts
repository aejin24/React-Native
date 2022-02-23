import { gql } from "@apollo/client";

export default {
    REGISTER_USER: gql`
        mutation registerUser ($RegisterUserRequest: RegisterUserRequest){
            registerUser(RegisterUserRequest: $RegisterUserRequest) {
                email
            }
        }
    `
}