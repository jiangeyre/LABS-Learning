const express = require('express');
const expressGraphQL = require('express-graphql');
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
} = require('graphql');
const server = express();

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'HelloWorld',
        fields: () => ({
            message: { 
                type: GraphQLString,
                resolve: () => 'Hello World' 
            }
        })
    })
})

server.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true
}))
server.listen(8000., () => {
    console.log('Server Running')
});