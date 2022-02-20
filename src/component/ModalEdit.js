import {Modal,Button} from "react-bootstrap"
 import { useState } from "react";
 import Rating from '@mui/material/Rating';

const ModalEdit=({el,movie,setMovie})=>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const[esm,setEsm]= useState(el.title)
    const[about,setAbout]= useState(el.description)
    const[img,setImg]= useState(el.image)
    const[newRate,setNewRate]=useState(el.rating)
    const handleEdit=(a)=> setMovie(movie.map(al=>al.id===a ? {...al,title:esm,description:about,image:img,rating:newRate}:al)) 
    return(
        <div>
            <>
                <Button variant="dark" onClick={handleShow}>Edit</Button>

                <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input placeholder="name" value={esm} onChange={(e)=>setEsm(e.target.value)}/>
                    <br/><br/>
                    <input placeholder="description" value={about} onChange={(e)=>setAbout(e.target.value)}/>
                    <br/><br/>
                    <input placeholder="@link" value={img} onChange={(e)=>setImg(e.target.value)}/>
                    <br/><br/>
                    <Rating name="simple-controlled" value={newRate} onChange={ (e)=>setNewRate(e.target.value)}/>
                </Modal.Body>
                
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Close
                </Button>
                <Button variant="primary" onClick={()=>handleEdit(el.id)} >
                    Save Changes
                </Button>
                </Modal.Footer>
                </Modal>
            </>
        </div>
    )
}
export default ModalEdit