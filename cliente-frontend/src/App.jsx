import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getClientes, createCliente, updateCliente, deleteCliente } from './services/clientService'
import ClienteTable from './components/ClienteTable'
import ModalAgregarCliente from './components/ModalAgregarCliente'
import ModalEditarCliente from './components/ModalEditarCliente'

function App() {
  const [clientes, setClientes] = useState([])
  const [modalAgregar, setModalAgregar] = useState(false)
  const [clienteSeleccionado, setClienteSeleccionado] = useState(null)

  const cargarClientes = async () => {
    const res = await getClientes()
    setClientes(res.data)
  }

  useEffect(() => {
    cargarClientes()
  }, [])

  const handleGuardarCliente = async (nuevoCliente) => {
    await createCliente(nuevoCliente)
    setModalAgregar(false)
    cargarClientes()
  }

  const handleActualizarCliente = async (clienteActualizado) => {
    await updateCliente(clienteActualizado.id, clienteActualizado)
    setClienteSeleccionado(null)
    cargarClientes()
  }

  const handleEliminarCliente = async (id) => {
    await deleteCliente(id)
    setClienteSeleccionado(null)
    cargarClientes()
  }

  return (
    <Container>
  <Content>
    <Header>Clientes</Header>
    <AddButton onClick={() => setModalAgregar(true)}>Agregar Cliente</AddButton>
    <ClienteTable clientes={clientes} onSelect={setClienteSeleccionado} />
    {modalAgregar && (
      <ModalAgregarCliente
        onClose={() => setModalAgregar(false)}
        onSave={handleGuardarCliente}
      />
    )}
    {clienteSeleccionado && (
      <ModalEditarCliente
        clienteInicial={clienteSeleccionado}
        onClose={() => setClienteSeleccionado(null)}
        onUpdate={handleActualizarCliente}
        onDelete={handleEliminarCliente}
      />
    )}
  </Content>
</Container>
  )
}

export default App

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;     
  min-height: 100vh;
  width: 100vw;
  padding: 2rem;
  box-sizing: border-box;
`

const Content = styled.div`
  width: 100%;
  max-width: 800px;
  background: #313131;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10pxrgba(0, 0, 0, 0.51);
`

const Header = styled.h1`
  text-align: center;
  color: #f1f1f1;
`

const AddButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`