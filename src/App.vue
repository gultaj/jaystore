<template>
  <div class="container">
    <product-list></product-list>
  </div>
</template>

<script>
import ProductList from './components/ProductList';

export default {
  name: 'app',
  components: {
    ProductList,
  },
};
</script>
