import { Table } from 'react-bootstrap';

export function TableClient({  Clientes }){

  return (
    <>
      <Table bordered striped>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Nascimento</th>
            <th>CEP</th>
          </tr>
        </thead>
        <tbody>
          {Clientes.map((cliente) => {
            return (
              <tr key={cliente.id}>
                <td>{cliente.nome}</td>
                <td>{cliente.Email}</td>
                <td>{cliente.Nascimento}</td>
                <td>{cliente.CEP}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </>
  );
}