import axios from 'axios';

const API = 'https://crudclientes-8owr.onrender.com/api/cliente';

export const getClientes = () => axios.get(API);
export const createCliente = (cliente) => axios.post(API, cliente);
export const updateCliente = (id, cliente) => axios.put(`${API}/${id}`, cliente);
export const deleteCliente = (id) => axios.delete(`${API}/${id}`);
