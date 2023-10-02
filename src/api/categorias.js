import axios from 'axios';
export default class CategoriasApi {
  async buscarTodasAsCategorias() {
    const { data } = await axios.get('/api/garagem/categorias/');
    return data;
  }
  async adicionarCategoria(categoria) {
    const { data } = await axios.post('/api/garagem/categorias/', categoria);
    return data;
  }
  async atualizarCategoria(categoria) {
    const { data } = await axios.put(`/api/garagem/categorias/${categoria.id}/`, categoria);
    return data;
  }
  async excluirCategoria(id) {
    const { data } = await axios.delete(`/api/garagem/categorias/${id}/`);
    return data;
  }
}
