<script>
import CategoriasApi from "@/api/categorias";

const categoriasApi = new CategoriasApi();

export default {
  data() {
    return {
      categorias: [],
      categoria: {},
    };
  },
  async created() {
    this.carregarCategorias();
  },
  methods: {
    async carregarCategorias() {
      this.categorias = await categoriasApi.buscarTodasAsCategorias();
    },
    async salvar() {
      if (this.categoria.id) {
        await categoriasApi.atualizarCategoria(this.categoria);
      } else {
        await categoriasApi.adicionarCategoria(this.categoria);
      }
      this.categoria = {};
      this.carregarCategorias();
    },
    editar(categoria) {
      this.categoria = { ...categoria }; // Usar spread operator para evitar referências indesejadas
    },
    async excluir(categoria) {
      await categoriasApi.excluirCategoria(categoria.id);
      this.carregarCategorias();
    },
  },
};
</script>

<template>
  <div>
    <h1 style="color: black; text-align: center">Categoria</h1>
    <hr />
    <div class="form" style="text-align: center">
      <input
        type="text"
        v-model="categoria.descricao"
        placeholder="Descrição"
      />
      <button @click="salvar">Salvar</button>
    </div>
    <hr />
    <ul style="list-style-type: none; padding: 0; text-align: center">
      <li
        v-for="categoria in categorias"
        :key="categoria.id"
        style="margin-bottom: 10px"
      >
        <span @click="editar(categoria)">
          ({{ categoria.id }}) - {{ categoria.descricao }} -
        </span>
        <button @click="excluir(categoria)">X</button>
      </li>
    </ul>
  </div>
</template>
<style>
.form {
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
  text-align: center;
}

li {
  margin-bottom: 10px;
}
span {
  color: black;
}
</style>
