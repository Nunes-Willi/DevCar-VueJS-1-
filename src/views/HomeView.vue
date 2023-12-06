<template>
  <div>
    <h1>Carros em Destaque</h1>
    <section class="cards">
      <div class="card" v-for="carro in carros" :key="carro.id">
        <div class="card-content">
          <img :src="carro.image" alt="Imagem do Carro" class="card-img" />
          <p class="card-description">{{ carro.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import VeiculosApi from "@/api/veiculo";
const veiculosApi = new VeiculosApi();

export default {
  data() {
    return {
      carros: [],
      veiculos: [],
      inputEnabled: false,
      searchTerm: "",
    };
  },
  async created() {
    try {
      this.carros = await veiculosApi.buscarTodosOsVeiculos();
    } catch (error) {
      console.error("Erro ao buscar carros em destaque:", error);
    }

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
    search() {},
  },
};
</script>

<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px;
}

.card {
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin: 20px;
  width: 300px;
}

.card-content {
  padding: 20px;
  text-align: center; /* Centraliza a imagem */
}

.card-img {
  max-width: 100%; /* Ajusta a largura máxima da imagem */
  height: auto; /* Permite que a altura seja ajustada automaticamente */
}

.card-description {
  margin-top: 10px;
  color: #555;
}

h1 {
  color: black;
}

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
  color: black;
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

p {
  color: black;
}
</style>
