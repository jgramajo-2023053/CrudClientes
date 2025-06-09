import React, { useState } from 'react'
import { ModalContainer, ModalButton, Input } from './ModalStyles'

const ModalAgregarCliente = ({ onClose, onSave }) => {
  const [cliente, setCliente] = useState({ nombre: '', correo: '', telefono: '' })

  const handleChange = e => {
    setCliente({ ...cliente, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    onSave(cliente);
  }

  return (
    <ModalContainer>
      <h2>Agregar Cliente</h2>
      <Input name="nombre" placeholder="Nombre" onChange={handleChange} />
      <Input name="correo" placeholder="Correo" onChange={handleChange} />
      <Input name="telefono" placeholder="Teléfono" onChange={handleChange} />
      <ModalButton save onClick={handleSubmit}>Guardar</ModalButton>
      <ModalButton onClick={onClose}>Cancelar</ModalButton>
    </ModalContainer>
  )
}

export default ModalAgregarCliente

