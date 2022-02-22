import { useState } from "react"


import MovieCard from "./MovieCard"
import AddModal from "./AddModal"
import {Form,FormControl} from "react-bootstrap"
import ControlledRating from "./ControlledRating"

const MovieList=({movie,setMovie})=>{
    

const[rate,setRate]=useState(0)
const[lawj,setLawj]=useState("")
const x = movie.filter(el=> el.title.toUpperCase().includes(lawj.toUpperCase())&& el.rating>=rate).map(el=> <MovieCard el={el} movie={movie} setMovie={setMovie}/>)
    return(
        <div>
            <Form className="d-flex">
                        <FormControl
                        onChange={(e)=>setLawj(e.target.value)}
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        
                    </Form>
                    <ControlledRating  className="searchRate" setMovie={setMovie} rate={rate} setRate={setRate}/>
            <div  className="body">
                <br/>
                <AddModal movie={movie} setMovie={setMovie} rate={rate} setRate={setRate}/>
                <br/>
                <div className="movieList">
                
                {
                    
                    x.length ?   x : <img src="https://www.brainpop.com/conceptmap/img/img_noresults_movies.png" width="700" heigth="700"/>   
                    
            
                }
                </div>
            </div>
            
            {/* if(lawj===""){return el} 
                        else if (el.title.toLocaleLowerCase().includes(lawj.toLocaleLowerCase())) {return el} */}
            
            
            

        </div>
    )
}
export default MovieList