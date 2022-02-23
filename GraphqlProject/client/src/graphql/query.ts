import { gql } from "@apollo/client";

export default {
    GET_USER: gql`
        query getUser {
            getUser {
                _id
                email
            }
        }
    `
}