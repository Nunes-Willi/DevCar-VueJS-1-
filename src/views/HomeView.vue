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
import axios from 'axios';

export default {
  data() {
    return {
      carros: [],
    };
  },
  async created() {
    this.fetchVeiculos();
  },
  methods: {
    async fetchVeiculos() {
      try {
        const { data } = await axios.get('http://127.0.0.1:8000/api/veiculos/');
        this.carros = data;
        console.log('Dados da API:', this.carros);
      } catch (error) {
        console.error('Erro ao buscar veículos:', error.message);
      }
    },
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
