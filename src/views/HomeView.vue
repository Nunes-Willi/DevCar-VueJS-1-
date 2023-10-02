<template>
  <div>
    <h2>Carros em  Destaque</h2>
    <section class="cards">
      <div class="card" v-for="index in 12" :key="index">
        <div class="card-content">
          <div class="card-placeholder"></div>
          <div class="card-placeholder"></div>
          <div class="card-placeholder"></div>
          <div class="card-placeholder"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Se necessário, você pode adicionar dados aqui para preencher os cards
    };
  },
};
</script>

<style scoped>
/* Estilos globais, se necessário */

/* Estilos para os Cards */
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
</style>
