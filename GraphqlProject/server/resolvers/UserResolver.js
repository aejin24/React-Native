const User = require("../models/Users");

const UserResolver = {
    Query: {
        getUser: () => getUser()
    },
    Mutation: {
        registerUser: (parent, args) => registerUser(args.RegisterUserRequest)
    }
}

const getUser = async() => {
    return await User.find({}, { _id: 0 });
}

const registerUser = async(RegisterUserRequest) => {
    let id = Math.floor(Date.now()).toString();
    RegisterUserRequest.id = id;

    await User.create({
        email: RegisterUserRequest.email,
        id: RegisterUserRequest.id
    });

    return RegisterUserRequest;
}

module.exports = UserResolver;