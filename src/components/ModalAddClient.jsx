import { useState } from 'react';

import { Button, Modal, Form, Col, Row } from 'react-bootstrap';

import { TableClient } from './TableClient';


export function ModalAddClient({clients, setClients}){
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newClient, setNewClient] = useState({});

  const handleChangeCadastro = (e) => {
    let nome = e.target.name
    let valor = e.target.value

    setNewClient((valores) => ({...valores, [nome]: valor}))
  }

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      fetch("http://localhost:3001/Clients", {
        method:"POST",
        headers: {
          'Content-Type': 'application/json'
      },
        body: JSON.stringify(newClient)
      })
      .then((resp) => resp.json())
      .then((data) => setClients([...clients, data]))

      handleClear()
      handleClose()
    }
    
    setValidated(true);
  };

  const handleClear = () =>{
    setNewClient("");
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="float-end mx-4 my-3">
        (+) Adicionar Cliente
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Cliente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3" controlId="validationCustom01">
              <Form.Label column sm="2">
                Nome
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="Digite seu Nome" className='mx-2' onChange={handleChangeCadastro} value={newClient.nome} name="nome" required />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="validationCustom02">
              <Form.Label column sm="2" >
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control type="email" placeholder="Digite seu Email" className='mx-2' onChange={handleChangeCadastro} value={newClient.Email} name="Email" required />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="validationCustomUsername">
              <Form.Label column sm="2">
                Nascimento
              </Form.Label>
              <Col sm="10">
                <Form.Control type="date" placeholder="Digite sua data de nascimento" className='mx-2' onChange={handleChangeCadastro} value={newClient.Nascimento} name="Nascimento" required/>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="validationCustom03">
              <Form.Label column sm="2">
                CEP
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="Digite seu CEP" className='mx-2' onChange={handleChangeCadastro} value={newClient.CEP} name="CEP" required />
              </Col>
            </Form.Group>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClear} type="reset">
                Limpar
              </Button>
              <Button variant="primary" type="submit">
                Adicionar
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
      <TableClient Clientes={clients}/>
    </>
  )
}

