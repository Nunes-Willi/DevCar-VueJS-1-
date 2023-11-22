import api from '../plugins/axios';

export default class CategoriasApi {
  async buscarTodasAsCategorias() {
    const { data } = await api.get('categorias/');
    return data;
  }
  async adicionarCategoria(categoria) {
    const { data } = await api.post('categorias/', categoria);
    return data;
  }
  async atualizarCategoria(categoria) {
    const { data } = await api.put(`categorias/${categoria.id}/`, categoria);
    return data;
  }
  async excluirCategoria(id) {
    const { data } = await api.delete(`categorias/${id}/`);
    return data;
  }
}
