
const { ApolloServer, gql } = require('apollo-server')

const movies = [
    {title: "Spiderman", genre: "Action"}, 
    {title: "Finding Nemo", genre: "Kids"}
]

const typeDefs = gql`

    type Movie {
        title: String! 
        genre: String! 
    }

    type Query {
        movies: [Movie]
    }

`

const resolvers = {
    Query: {
        movies: () => movies 
    }
}

const server = new ApolloServer({typeDefs, resolvers})

server.listen().then(({url}) => {
    console.log(`Server is running at ${url}`)
})