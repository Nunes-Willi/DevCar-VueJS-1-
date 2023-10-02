import axios from 'axios';

export default class VeiculosApi {
  async buscarTodosOsVeiculos() {
    const { data } = await axios.get('/api/garagem/veiculos/');
    return data;
  }
}