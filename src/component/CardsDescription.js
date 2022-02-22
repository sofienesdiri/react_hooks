import { useNavigate, useParams } from "react-router-dom"
const CardsDescription=({movie})=>{
    const {id} = useParams()
    const navigate = useNavigate()
    const userToFind = movie.find(el => el.id == id)
    return(
        <div>
            
            <h1>{userToFind.title}</h1>
            <h2>{userToFind.description}</h2>
            <img src={userToFind.image}/>
            <iframe width="560" height="315" src={userToFind.video}/>        
            <button onClick={()=>navigate('/users')}>Go Back</button>    
        </div>
    )
}
export default CardsDescription