import React, { useState } from 'react'
import { ModalContainer, ModalButton, Input } from './ModalStyles'

const ModalEditarCliente = ({ clienteInicial, onClose, onUpdate, onDelete }) => {
  const [cliente, setCliente] = useState(clienteInicial)

  const handleChange = e => {
    setCliente({ ...cliente, [e.target.name]: e.target.value })
  }

  return (
    <ModalContainer>
      <h2>Editar Cliente</h2>
      <Input name="nombre" value={cliente.nombre} onChange={handleChange} />
      <Input name="correo" value={cliente.correo} onChange={handleChange} />
      <Input name="telefono" value={cliente.telefono} onChange={handleChange} />
      <ModalButton save onClick={() => onUpdate(cliente)}>Guardar Cambios</ModalButton>
      <ModalButton delete onClick={() => onDelete(cliente.id)}>Eliminar</ModalButton>
      <ModalButton onClick={onClose}>Cerrar</ModalButton>
    </ModalContainer>
  )
}

export default ModalEditarCliente