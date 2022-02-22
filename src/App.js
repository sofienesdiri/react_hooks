
import './App.css';
import MovieList from './component/MovieList';
import NavBar from './component/NavBar'; 
import { Route, Routes } from 'react-router-dom';
import Home from "./component/Home"
import { useState } from "react"
import CardsDescription from './component/CardsDescription';
function App() {
  const [movie,setMovie]= useState([
    {title:"Interstellar", description:"In a post-apocalyptic and famine-stricken world, a team of explorers search for a new habitable planet for the human species",
   image:"/interstellar.jpg",rating: 1,id:Math.random(),video:"https://www.youtube.com/embed/zSWdZVtXT7E"},
{title: "The Irishman", description: "A mob hitman suspected of having been involved in the murder of Jimmy Hoffa recalls the events.",
image:"/irishman.jpg",rating:4,id:Math.random(),video:"https://www.youtube.com/embed/WHXxVmeGQUc"},
{title:"Limitless",description:"With the help of a mysterious pill that grants access to 100% of his optional abilities, a failed writer becomes a financial guru, but that too puts him in a dangerous world.",
image:"/limitless.jpg",rating: 5 ,id:Math.random(),video:"https://www.youtube.com/embed/4TLppsfzQH8"},
{title:"Mad max: Fury Roads",description:"In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the help of a group of prisoners, a psychotic worshiper, and a drifter named Max.",
image:"/madmax.jpg",rating: 2,id:Math.random(),video:"https://www.youtube.com/embed/hEJnMQG9ev8"},
{title:"Lucy",description:"As a result of circumstances beyond her control, a young student sees her intellectual abilities develop to infinity. She colonizes his brain, and acquires unlimited powers.",
image:"/lucy.jpg",rating: 3,id:Math.random(),video:"https://www.youtube.com/embed/MVt32qoyhi0"},
{title:"Split",description:"Kevin has already revealed 23 personalities, each with different physical attributes, to his dedicated psychiatrist Dr. Fletcher, but one remains buried deep within him. It will soon manifest itself and take precedence over all the others. Tricked into kidnapping three teenage girls, including young Casey",
image:"/split.jpg",rating: 3,id:Math.random(),video:"https://www.youtube.com/embed/84TouqfIsiI"}])
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Movies' element={<MovieList movie={movie} setMovie={setMovie}/>}/>
        <Route path='/Movies/:id' element={<CardsDescription movie={movie}/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
