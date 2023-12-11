<template>
  <div>
    <header class="header-background">
      <div class="logo">
        <h1>DevCar</h1>
      </div>
      <nav>
        <ul class="nav-links">
          <li><router-link to="/">Início</router-link></li>
          <li><router-link to="/veiculo">Estoque</router-link></li>
        </ul>
      </nav>
      <div class="login" @click="showModal">Cadastrar</div>
    </header>

    <section class="Resuminho">
      <div class="Resumo">
        <h2>Bem-vindo à DevCar - Sua Revendedora de Carros</h2>
        <p>Encontre o carro dos seus sonhos conosco.</p>
      </div>
    </section>
    
    <main>
      <RouterView />
      <!-- Assuming BuscaView is a component, you can use it like this -->
      <BuscaView />
    </main>

    <!-- Modal -->
    <div v-if="showLoginModal" class="modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <span class="close" @click="closeModal">&times;</span>
        <div class="container">
          <h2>DevCar</h2>
          <!-- Conteúdo do modal de cadastro aqui -->
          <label for="username"><b>Nome Completo</b></label>
          <input type="text" placeholder="Enter Username" v-model="username" required>

          <label for="email"><b>Email</b></label>
          <input type="email" placeholder="Enter Email" v-model="email" required>

          <label for="password"><b>Senha</b></label>
          <input type="password" placeholder="Enter Password" v-model="password" required>

          <label for="confirmPassword"><b>Confirmar Senha</b></label>
          <input type="password" placeholder="Confirm Password" v-model="confirmPassword" required>

          <router-link to="/login">
            <button @click="register">Cadastrar</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

.header-background {
  background-image: url('src/assets/header.jpg'); 
  background-size: cover;
  background-position: center;
  color: white; 
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo h1 {
  margin: 0; 
}

nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-right: 1050px;
}

nav ul li {
  margin-right: 20px;
}

.login {
  background-color: green;
  border: none;
  color: black;
  padding: 1px 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
}

/* Adicione os estilos do modal */
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
}

.modal-content {
  background-color: #fefefe;
  border: 1px solid #888;
  padding: 20px;
  max-width: 400px;
  width: 100%;
}

.close {
  position: absolute;
  right: 25px;
  top: 0;
  color: #000;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
}

.container {
  padding: 16px;
  display: flex;
  flex-direction: column;
}
.container h2{
  font-size: 50px;
}

h2 {
  text-align: center;
  margin-bottom: 16px;
}

label {
  margin-bottom: 8px;
}

input {
  padding: 10px;
  margin-bottom: 16px;
}

button {
  background-color: green;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}

button:hover {
  opacity: 0.8;
}

/* Adicione outros estilos conforme necessário */
</style>

<script>
export default {
  data() {
    return {
      showLoginModal: false,
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  },
  methods: {
    showModal() {
      this.showLoginModal = true;
    },
    closeModal() {
      this.showLoginModal = false;
    },
    register() {
      // Lógica de cadastro aqui
      console.log('Cadastro com:', this.username, this.email, this.password);
      // Fechar o modal após a tentativa de cadastro
      this.closeModal();
    },
  },
};
</script>
