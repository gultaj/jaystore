<template>
  <div class="container">
    <products-manager></products-manager>
  </div>
</template>

<script>
import ProductsManager from './components/ProductsManager';

export default {
  name: 'app',
  components: {
    ProductsManager,
  },
};
</script>
