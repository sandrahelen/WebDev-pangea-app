import {ApolloServer, gql} from "apollo-server-express";
import typeDefs from "./typeDefs/index.ts";
import resolvers from "./resolvers/index.ts";
const express = require("express");
import mongoose from "mongoose";
const cors = require("cors");
import { APP_PORT, DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME} from "./config.ts";



(async () => {
    try {
         await mongoose.connect(
            `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
            { useNewUrlParser: true } // fikser advarsel om deprecated url string parser
        )
        //url skal være it2810-70.idi.ntnu.no
        const db = mongoose.connection;
        const app = express();
        app.use(cors());
        const server = new ApolloServer({
            typeDefs, resolvers, playground: true, introspection: true, //mocks:true
        });

        server.applyMiddleware({app});
        app.use(cors());

        db.on("error", console.error.bind(console, "connection error:"))
        db.once("open", function (){
            console.log("connected to mongobd");
        });

        app.listen({ port: APP_PORT}, () =>
            console.log(`server is running at http://localhost:${APP_PORT}`)
        )

    } catch (e){
        console.error(e);
    }

})()



