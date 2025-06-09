import React from 'react'
import styled from 'styled-components'

const ClienteTable = ({ clientes, onSelect }) => {
    return (
      < Table>
            <thead>
            <tr>
                <Th>ID</Th><Th>Nombre</Th><Th>Correo</Th><Th>Teléfono</Th><Th>Acciones</Th>
            </tr>
            </thead>
            <tbody>
            {clientes.map(cliente => (
                <tr key={cliente.id}>
                <Td>{cliente.id}</Td>
                <Td>{cliente.nombre}</Td>
                <Td>{cliente.correo}</Td>
                <Td>{cliente.telefono}</Td>
                <Td>
                    <ActionButton onClick={() => onSelect(cliente)}>Ver/Editar</ActionButton>
                </Td>
                </tr>
            ))}
            </tbody>
        </Table>
    )
}

export default ClienteTable;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
`

const Th = styled.th`
    background-color: #007bff;
    color: white;
    padding: 0.75rem;
`

const Td = styled.td`
    padding: 0.75rem;
    text-align: center;
    border-bottom: 1px solid #ccc;
`

const ActionButton = styled.button`
    background-color: #17a2b8;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 4px;

    &:hover {
        background-color: #138496;
    }
`
