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
    return await User.find();
}

const registerUser = async(RegisterUserRequest) => {
    await User.create({
        email: RegisterUserRequest.email
    });

    return RegisterUserRequest;
}

module.exports = UserResolver;