import { Container, Nav, Navbar } from "react-bootstrap";

export function NavBar(){
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">🏪 AmericanDev</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Produtos">Produtos</Nav.Link>
            <Nav.Link href="#Ofertas">Ofertas</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}