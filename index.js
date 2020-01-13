/**
 * We're importing and using the gql tag to create a schema. 
 * We're assigning the created schema to a constant named typeDefs.
 */
const { gql } = require('apollo-server');

const courses = [
    { code: "PHL145", title: "Critical Reasoning", term: "Fall 2019" },
    { code: "MAT102", title: "Intro to Mathematical Proofs", term: "Fall 2019" },
    { code: "CSC108", title: "Small chic bedroom", term: "Fall 2019" }
];

/**
 * We create a Course object type that represents the shape of a single Course object.
 * The Course object is to have three string fields. 
 * 
 * we define a Query object type in our schema which represents the root level fields
 *  that can be queried from the client. We've stated courses to be a field that can be 
 * queried and when resolved will return a list of Course object types.
 */
const typeDefs = gql` type Course { code: String! title: String! term: String! }  type Query { courses: [Course!]! } `;

/**
 * Our schema simply represents the shape of data that can be queried. 
 * To define how the fields in the schema get processed, we'll create our 
 * GraphQL resolvers. Resolvers in a GraphQL API are functions responsible 
 * for resolving a GraphQL operation to data.
 * 
 * We'll specify a resolvers map to dictate how the courses field is to resolve.
 *  We'll have the courses field simply return the mock courses array we've created.
 */
const resolvers = {
    Query: {
        courses: () => courses,
    }
}

/**
 * With our schema, resolvers, and mock data defined - we can now create our Apollo 
 * Server instance. To do so, we'll import and use the ApolloServer constructor
 * function from the apollo-server library.
 */
const { ApolloServer } = require('apollo-server');
const server = new ApolloServer({ typeDefs, resolvers });

/**
 * With the Apollo server instance now available to us, we can start 
 * our web server by running the listen() function available as a 
 * property of the Apollo server. 
 * 
 * The server.listen() function is a promise that when resolved receives a 
 * serverInfo object which has the url of the running server. We'll log a 
 * message to the console with this url value.
 */
server.listen().then((serverInfo) => {
    console.log(`Server is running at ${serverInfo.url}`);
});
