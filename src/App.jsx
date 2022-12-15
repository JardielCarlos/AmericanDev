import { useEffect, useState } from 'react';
import { Col, Form } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import { Footer } from './components/Footer';

import { ModalAddClient } from './components/ModalAddClient';
import { NavBar } from './components/NavBar';

function App() {
  
  const [clients, setClients] = useState([])
  const [input, setInput] = useState("")
  
  useEffect(()=> {
    fetch("http://localhost:3001/Clients")
    .then((resp) => resp.json())
    .then((data) => setClients(data))
  }, [])


  const handleChangeSearch = (e) => {
    setInput(e.target.value)
  }

  const searchClient = () => {
    fetch(`http://localhost:3001/Clients?q=${input}`)
    .then((resp) => resp.json())
    .then((data) => setClients(data))
  }
  return (
    <>
      <NavBar />
      <h1 className='d-flex justify-content-center mt-3'>Clientes</h1>
      <div className='d-flex justify-content-center flex-column align-items-center mt-3'>
        <Col sm="4">
          <Form.Control
            type="text" 
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={handleChangeSearch}
          />
        </Col>
        <Button variant="primary" size='lg' className='mt-3 px-5' onClick={searchClient}>Buscar</Button>
      </div>
      
      <ModalAddClient clients={clients} setClients={setClients}/>
      <Footer />
    </>
  );
}

export default App;
