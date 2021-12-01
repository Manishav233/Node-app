const os= require("os");
console.log("os version",os.version());
console.log("Free memory",os.freemem());
console.log("total memory",os.totalmem());
console.log("CPU",os.cpus());

//code before simplifing 

//   router.get("/",async(request,response)=>{
//     console.log(request.query);
//     // const {language,rating}=request.query;
//     const filter=request.query;
//     console.log(filter);
//     if(filter.rating){
//     filter.rating=+filter.rating;
//     }
//     const FilterMovie=await getMovies(filter);
//     response.send(FilterMovie);
//     console.log(FilterMovie);
//     });
        
//     router.post("/",async(request,response)=>{
//     const data=request.body;
//     const result=await createMovies(data);
//     //console.log(result);
//     response.send(result);
//     });
    
//     router.get("/:id",async(request,response)=>{
//     console.log(request.params);
//     const {id}=request.params;
//     const movie=await getMovieById(id);
//     // const movie = movies.find((mv) => mv.id===id);
//     console.log(movie);
//     movie?
//     response.send(movie)
//     : response.status(404).send({message:"No matching movie found"});
//     });
                 
//     router.delete("/:id",async(request,response)=>{
//     console.log(request.params);
//     const {id}=request.params;
//     const result=await deleteMovieById(id);
//     // const movie = movies.find((mv) => mv.id===id);
//     console.log(result);
//     console.log(result.deletedCount);
//     result.deletedCount>0
//     ?response.send(result)
//     :response.status(404).send({message:"No matching movie found"});
//     });
                   
//     router.put("/:id",async(request,response)=>{
//     console.log(request.params);
//     const {id}=request.params;
//     const data=request.body;
//     const result=await updateMovieById(id, data);
//     const movie=await getMovieById(id);
//     // const movie = movies.find((mv) => mv.id===id);
//     //console.log(result);
//     response.send(movie);               
//     });