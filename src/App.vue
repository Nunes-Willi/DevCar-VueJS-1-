<template>
  <div>
    <header>
      <h1>DevCar</h1>
      <nav>
        <ul>
          <li><router-link to="/">Início</router-link></li>
          <li><router-link to="/veiculo">Estoque</router-link></li>
          <li><router-link to="/categorias">Categorias</router-link></li>
        </ul>
      </nav>
    </header>

    <section class="Resuminho">
      <div class="Resumo">
        <h2>Bem-vindo à DevCar - Sua Revendedora de Carros</h2>
        <p>Encontre o carro dos seus sonhos conosco.</p>
      </div>
    </section>
    </div>
  <main>
    <RouterView />
    <BuscaView />
  </main>
</template>


