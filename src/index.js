import express from 'express';
import { success, error } from 'consola';
import  { ApolloServer, gql }  from 'apollo-server-express';
import { PORT, IN_PROD, DB } from './config';
import mongoose from 'mongoose'
import { typeDefs, resolvers } from './graphql'
import * as AppModels from './models'

const app = express();

  
const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: IN_PROD,
    context: {
        ...AppModels
    }
})  


const startApp = async ()=> {
try {
    await mongoose.connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true
    });
    success({
        badge: true,
        message: 'Database conmected '
    })
    server.applyMiddleware({app})
    app.listen(PORT, ()=> success({ 
        message: `server started on port: ${PORT}`,
        badge: true
    }))
} catch (err) { 
    error({
        badge: true,
        message: err.message
    })
}
}

startApp();