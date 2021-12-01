// const { response } = require("express");
//const express=require("express");
import express from "express";
import {MongoClient} from "mongodb";
import dotenv from "dotenv";
import { getMovies, createMovies, getMovieById, deleteMovieById, updateMovieById } from "./helper.js";
import {moviesRouter} from "./routes/movies.js";
dotenv.config(); //put all keys in process.env
console.log(process.env);

const app=express();
const PORT=9000;
app.use(express.json());
//express.json() -inbuilt middleware-tarnsforms body data to json, it converts every request in app

const MONGO_URL=process.env.MONGO_URL;

//const MONGO_URL="mongodb+srv://manisha:<password>@cluster0.s0ld7.mongodb.net";/myFirstDatabase?retryWrites=true&w=majority

async function createConnection(){
const client=new MongoClient(MONGO_URL);
await client.connect();
console.log("Mongodb Connected");
return client;
}
export const client= await createConnection();


app.get("/",(request,response)=>{
response.send("Hello");
}); 

app.use("/movies",moviesRouter);

app.listen(PORT,()=>console.log("app started at",PORT));


