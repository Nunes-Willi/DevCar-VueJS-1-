<template>
  <div>
    <h1>Estoque de Veículos</h1>
    <hr />
    <div class="search-bar" @click="enableInput">
      <input
        type="text"
        placeholder="Clique para digitar"
        :disabled="!inputEnabled"
        v-model="searchTerm"
        @input="search"
      />
    </div>
    <div class="veiculos-list">
      <div v-for="veiculo in filteredVeiculos" :key="veiculo.id" class="veiculo-card">
        <div class="veiculo-image">
          <img :src="veiculo.image" alt="Imagem do Veículo" class="veiculo-img" />
        </div>
        <div class="veiculo-details">
          <h3 class="veiculo-name">{{ veiculo.name }}</h3>
          <p><strong>Modelo:</strong> {{ veiculo.modelo }}</p>
          <p><strong>Cor:</strong> {{ veiculo.cor }}</p>
          <p><strong>Ano:</strong> {{ veiculo.ano }}</p>
          <p><strong>Preço:</strong> R$ {{ veiculo.preco }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VeiculosApi from "@/api/veiculo";
const veiculosApi = new VeiculosApi();

export default {
  data() {
    return {
      veiculos: [],
      inputEnabled: false,
      searchTerm: "",
    };
  },
  async created() {
    try {
      this.veiculos = await veiculosApi.buscarTodosOsVeiculos();
    } catch (error) {
      console.error("Erro ao buscar veículos:", error);
    }
  },
  computed: {
    filteredVeiculos() {
      const term = this.searchTerm.toLowerCase();
      return this.veiculos.filter((veiculo) =>
        veiculo.name.toLowerCase().includes(term)
      );
    },
  },
  methods: {
    enableInput() {
      this.inputEnabled = true;
    },
    search() {
    },
  },
};
</script>

<style scoped>

.veiculos-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.veiculo-card {
  border: 1px solid #ccc;
  margin: 10px;
  padding: 10px;
  width: calc(33.33% - 20px);
  box-sizing: border-box;
  background-color: #f9f9f9;
  height: 400px; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.veiculo-image {
  height: 200px; 
  overflow: hidden;
}

.veiculo-image img {
  max-width: 100%;
  height: auto;
  width: 100%;
  object-fit: cover; 
}

.veiculo-details {
  text-align: center;
}

.veiculo-name {
  margin-top: 0;
}

.search-bar {
  text-align: center;
  margin-bottom: 20px;
  cursor: pointer;
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>
