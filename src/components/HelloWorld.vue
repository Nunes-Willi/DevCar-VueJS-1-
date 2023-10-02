<template>
  <div>
    <SearchBar @search="performSearch" />
    <ul>
      <li v-for="item in filteredItems" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import SearchBar from './SearchBar.vue';

export default {
  components: {
    SearchBar
  },
  data() {
    return {
      items: [...], // Sua lista de itens
      filteredItems: []
    };
  },
  methods: {
    performSearch(query) {
      this.filteredItems = this.items.filter(item => item.name.includes(query));
    }
  }
};
</script>
