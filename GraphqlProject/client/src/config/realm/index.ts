import Realm from "realm";

const UserSchema = {
    name: "User",
    primaryKey: "id",
    properties: {
        id: "string",
        email: "string"
    }
}

let realm =  new Realm({schema: [UserSchema]});

export default realm;