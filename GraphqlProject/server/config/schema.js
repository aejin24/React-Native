const fs = require("fs");

const loadedTypes = fs.readdirSync(__dirname + "/../graphqls").map(type =>
                        fs.readFileSync(__dirname + `/../graphqls/${type}`, { encoding: "utf-8" })
                    );
const loadedResolvers = fs.readdirSync(__dirname + "/../resolvers").map(resolver =>
                            require(__dirname + `/../resolvers/${resolver}`)
                        );

module.exports = {
    typeDefs: loadedTypes,
    resolvers: loadedResolvers
}