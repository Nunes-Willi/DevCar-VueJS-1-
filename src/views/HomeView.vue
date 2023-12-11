<template>
  <div>
    <h1>Carros em Destaque</h1>
    <section class="cards">
      <div class="card" v-for="carro in carros" :key="carro.id">
        <div class="card-content">
          <img :src="carro.image" alt="Imagem do Carro" class="card-img" />
          <div class="veiculo-details">
            <h2 class="veiculo-name">{{ carro.name }}</h2>
            <p class="card-description">{{ carro.description }}</p>
            <p>Ano: {{ carro.ano }}</p>
            <p>Cor: {{ carro.cor }}</p>
            <p>Preço: R$ {{ parseFloat(carro.preco).toLocaleString('pt-BR') }}</p>
          </div>
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
  text-align: center;
  /* Centraliza a imagem */
}

.card-img {
  max-width: 100%;
  height: 200px; /* Fixed height for all images */
  object-fit: cover; /* Maintain aspect ratio and cover the container */
}

.card-description {
  margin-top: 10px;
  color: #555;
}

h1 {
  color: black;
  text-align: center;
}

/* Other styles remain unchanged */
</style>
