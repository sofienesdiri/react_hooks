import { useState } from "react"


import MovieCard from "./MovieCard"
import AddModal from "./AddModal"
import { Navbar,Container,Nav,Form,FormControl,Button } from "react-bootstrap"
import ControlledRating from "./ControlledRating"

const MovieList=()=>{
    const [movie,setMovie]= useState([{title:"Interstellar", description:
    "In a post-apocalyptic and famine-stricken world, a team of explorers search for a new habitable planet for the human species",
   image:"/interstellar.jpg",rating: 1,id:Math.random()},
{title: "The Irishman", description: "A mob hitman suspected of having been involved in the murder of Jimmy Hoffa recalls the events.",
image:"/irishman.jpg",rating:4,id:Math.random()},
{title:"Limitless",description:"With the help of a mysterious pill that grants access to 100% of his optional abilities, a failed writer becomes a financial guru, but that too puts him in a dangerous world.",
image:"/limitless.jpg",rating: 5 ,id:Math.random()},
{title:"Mad max: Fury Roads",description:"In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the help of a group of prisoners, a psychotic worshiper, and a drifter named Max.",
image:"/madmax.jpg",rating: 2,id:Math.random()},
{title:"Lucy",description:"As a result of circumstances beyond her control, a young student sees her intellectual abilities develop to infinity. She colonizes his brain, and acquires unlimited powers.",
image:"/lucy.jpg",rating: 3,id:Math.random()},
{title:"Split",description:"Kevin has already revealed 23 personalities, each with different physical attributes, to his dedicated psychiatrist Dr. Fletcher, but one remains buried deep within him. It will soon manifest itself and take precedence over all the others. Tricked into kidnapping three teenage girls, including young Casey",
image:"/split.jpg",rating: 3,id:Math.random()}])
const[rate,setRate]=useState(0)
const[lawj,setLawj]=useState("")
const x = movie.filter(el=> el.title.toUpperCase().includes(lawj.toUpperCase())&& el.rating>=rate).map(el=> <MovieCard el={el} movie={movie} setMovie={setMovie}/>)
    return(
        <div>
            <>
                <Navbar bg="light" variant="light">
                    <Container>
                    <Navbar.Brand href="#home">SOFIENEFLIX</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    {/* <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                    </Nav>
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
                    </Container>
                </Navbar>
            </>
            <div  className="body">
                <br/>
                <AddModal movie={movie} setMovie={setMovie} rate={rate} setRate={setRate}/>
                <br/>
                <div className="movieList">
                
                {
                    
                    x.length ?   x : <img src="https://www.brainpop.com/conceptmap/img/img_noresults_movies.png"/>   
                    
            
                }
                </div>
            </div>
            
            {/* if(lawj===""){return el} 
                        else if (el.title.toLocaleLowerCase().includes(lawj.toLocaleLowerCase())) {return el} */}
            
            
            

        </div>
    )
}
export default MovieList