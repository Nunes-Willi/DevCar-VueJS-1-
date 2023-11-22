<template>
  <div>
    <h1>Carros em Destaque</h1>
    <section class="cards">
      <div class="card" v-for="index in 12" :key="index">
        <div class="card-content">
          <div class="card-placeholder"></div>
          <div class="card-placeholder"></div>
          <div class="card-placeholder"></div>
          <div class="card-placeholder"></div>
          <p class="card-description">{{ generateLoremDescription() }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    generateLoremDescription() {
      // Função para gerar descrição lorem simples
      const loremIpsum =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
      return loremIpsum;
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
}

.card-placeholder {
  background-color: #f0f0f0;
  height: 20px;
  margin-bottom: 10px;
}

.card-placeholder:last-child {
  margin-bottom: 0;
}

.card-description {
  margin-top: 10px;
  color: #555;
}
h1 {
  color: black;
}
</style>
