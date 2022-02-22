import { Navbar,Container,Nav} from "react-bootstrap"
import {LinkContainer} from 'react-router-bootstrap'
const NavBar=()=>{
    return(
        <>
        <Navbar bg="light" variant="light">
            <Container>
            <Navbar.Brand href="#home">SOFIENEFLIX</Navbar.Brand>
            <Nav className="me-auto">
            <LinkContainer to="/">
            <Nav.Link href="#home">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Movies">
            <Nav.Link href="#movies">Movies</Nav.Link>
            </LinkContainer>
            </Nav>
            
            </Container>
        </Navbar>
    </>
    )
}
export default NavBar