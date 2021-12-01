// const { response } = require("express");
//const express=require("express");
import express from "express";
import {MongoClient} from "mongodb";
import dotenv from "dotenv";
import { getMovies, createMovies, getMovieById, deleteMovieById, updateMovieById } from "./helper.js";

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


app.get("/movies",async(request,response)=>{
console.log(request.query);
// const {language,rating}=request.query;
const filter=request.query;
console.log(filter);
if(filter.rating){
filter.rating=+filter.rating;
}
const FilterMovie=await getMovies(filter);
response.send(FilterMovie);
console.log(FilterMovie);
});
    
    // console.log(language,rating);
    
    // let FilterMovie=movies;
    // if(language)
    // {
    //  FilterMovie=FilterMovie.filter((mv)=>mv.language===language);
    // }
    // if(rating)
    // {
    //  FilterMovie=FilterMovie.filter((mv)=>mv.rating===+rating);
    // }
    



app.post("/movies",async(request,response)=>{
const data=request.body;
const result=await createMovies(data);
//console.log(result);
response.send(result);
});

app.get("/movies/:id",async(request,response)=>{
console.log(request.params);
const {id}=request.params;
const movie=await getMovieById(id);
// const movie = movies.find((mv) => mv.id===id);
console.log(movie);
movie?
response.send(movie)
: response.status(404).send({message:"No matching movie found"});
});
       
       
app.delete("/movies/:id",async(request,response)=>{
console.log(request.params);
const {id}=request.params;
const result=await deleteMovieById(id);
// const movie = movies.find((mv) => mv.id===id);
console.log(result);
console.log(result.deletedCount);
result.deletedCount>0
?response.send(result)
:response.status(404).send({message:"No matching movie found"});
});
               
               
app.put("/movies/:id",async(request,response)=>{
console.log(request.params);
const {id}=request.params;
const data=request.body;
const result=await updateMovieById(id, data);
const movie=await getMovieById(id);
// const movie = movies.find((mv) => mv.id===id);
//console.log(result);
response.send(movie);               
});
     
     
app.listen(PORT,()=>console.log("app started at",PORT));


