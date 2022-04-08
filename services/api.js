import axios from 'axios';

const api = axios.create({
  baseURL: 'https://projetos.agenciaade.com.br/agenciaade/wp-json',
});

export default api;
