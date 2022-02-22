 import React from "react"
import BasicRating from "./BasicRating"
 import ModalEdit from "./ModalEdit"
 import {Card,Button,Col,Row} from "react-bootstrap"
import ShowMoreText from "react-show-more-text";
import { Link } from "react-router-dom";

const MovieCard=({el,movie,setMovie})=>{
    const handleDelete=(a)=>setMovie(movie.filter(al => al.id !== a))
    return(
        <div className="movieCard">   
            <Card className="img" border="light" bg='light' style={{ width: '18rem'  }}>
                <Card.Img  variant="top" src={el.image} width="250" height="400" />
                <Card.Body>
                    <Link to={`/Movies/${el.id}`}><Card.Title>{el.title}</Card.Title></Link>
                    <Card.Text>
                        <ShowMoreText lines={3} more="Show more" less="Show less">
                            {el.description}
                        </ShowMoreText>
                        </Card.Text>
                    <BasicRating rat={el.rating}/>
                    <Row>
                        <Col><Button variant="warning" onClick={()=>handleDelete(el.id)}>Delete</Button></Col>
                        <Col xs={4}></Col>
                        <Col><ModalEdit el={el} movie={movie} setMovie={setMovie}/></Col>
                    </Row>
                </Card.Body>
            </Card>
            
        </div>
    )
}
export default MovieCard