import {Modal,Button} from "react-bootstrap"
import { useState } from "react";
import ControlledRating from "./ControlledRating";
const AddModal=({movie,setMovie,rate,setRate})=>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const[name,setName] = useState("")
    const[desc,setDesc] = useState("")
    const[link,setLink] = useState("")
    // const[rate,setRate]=useState(2)
    const handleAdd=()=>setMovie([...movie,{title:name,description:desc,image:link,rating:rate,id:Math.random()}])

    return(
        <div>
            <>
                <Button variant="warning" onClick={handleShow}>Add a Movie</Button>

                <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input placeholder="name" onChange={(e)=>setName(e.target.value)}/>
                    <br/><br/>
                    <input placeholder="description" onChange={(e)=>setDesc(e.target.value)}/>
                    <br/><br/>
                    <input placeholder="@link" onChange={(e)=>setLink(e.target.value)}/>
                    <ControlledRating rate={rate} setRate={setRate}/>
                </Modal.Body>
                
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Close
                </Button>
                <Button variant="primary" onClick={handleClose,handleAdd} >
                    Save Changes
                </Button>
                </Modal.Footer>
                </Modal>
            </>
        </div>
    )
}
export default AddModal