import express from "express";
const router=express.Router();

import{
    updateMovieById,
    createMovies,
    getMovies,
    deleteMovieById,
    getMovieById
  } from "../helper.js";

// .. because we need to go one folder up to ftech data from helper.js

//we change app.get......... to router.get.....
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
        
        
    router
    .route("/")
    .get(async(request,response)=>{
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
    })
        
    .post(async(request,response)=>{
    const data=request.body;
    const result=await createMovies(data);
    //console.log(result);
    response.send(result);
    });
    
    router
    .route("/:id")
    .get(async(request,response)=>{
    console.log(request.params);
    const {id}=request.params;
    const movie=await getMovieById(id);
    // const movie = movies.find((mv) => mv.id===id);
    console.log(movie);
    movie?
    response.send(movie)
    : response.status(404).send({message:"No matching movie found"});
    })
                 
    .delete(async(request,response)=>{
    console.log(request.params);
    const {id}=request.params;
    const result=await deleteMovieById(id);
    // const movie = movies.find((mv) => mv.id===id);
    console.log(result);
    console.log(result.deletedCount);
    result.deletedCount>0
    ?response.send(result)
    :response.status(404).send({message:"No matching movie found"});
    })
                   
    .put(async(request,response)=>{
    console.log(request.params);
    const {id}=request.params;
    const data=request.body;
    const result=await updateMovieById(id, data);
    const movie=await getMovieById(id);
    // const movie = movies.find((mv) => mv.id===id);
    //console.log(result);
    response.send(movie);               
    });
    
    
    export const moviesRouter=router;