import api from '../plugins/axios'

export default class VeiculosApi {
  async buscarTodosOsVeiculos() {
    const { data } = await api.get('/veiculos/');
    return data;
  }
}