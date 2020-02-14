const express = require('express');
const expressGraphQL = require('express-graphql');
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
} = require('graphql');
const server = express();

const authors = [
    { id: 1, name: 'J.K. Rowling' },
    { id: 2, name: 'J.R.R. Tolkien' },
    { id: 3, name: 'Brent Weeks'}
];

const books = [
    { id: 1, name: 'Harry Potter and the Chamber of Secrets', authorId: 1 },
    { id: 2, name: 'Harry Potter and the Prisoner of Azkaban', authorId: 1 },
    { id: 3, name: 'Happy Potter and the Goblet of Fire', authorId: 1 },
    { id: 4, name: 'The Fellowship of the Ring', authorId: 2 },
    { id: 5, name: 'The Two Towers', authorId: 2 },
    { id: 6, name: 'The Return of the King', authorId: 2 },
    { id: 7, name: 'The Way of the Shadows', authorId: 3 },
    { id: 8, name: 'Beyond the Shadows', authorId: 3 }
];

const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: () => ({
        books: {
            type: BookType
        }
    })
})

// const schema = new GraphQLSchema({
//     query: new GraphQLObjectType({
//         name: 'HelloWorld',
//         fields: () => ({
//             message: { 
//                 type: GraphQLString,
//                 resolve: () => 'Hello World' 
//             }
//         })
//     })
// })

server.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true
}))
server.listen(8000., () => {
    console.log('Server Running')
});