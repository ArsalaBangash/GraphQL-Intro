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

const resolvers = {
    Query: {
        courses: () => courses,
    }
}

const { ApolloServer } = require('apollo-server');
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(() => {
    console.log(`Server is running`);
});
