<template>
  <form action="">
    <div class="form-group">
      <label for="productName">Product name</label>
      <input type="text" v-model="product.name" id="productName" class="form-control">
    </div>
    <div class="form-group">
      <label for="productDescription">Description</label>
      <textarea class="form-control" v-model="product.description" id="productDescription" rows="3"></textarea>
    </div>
    <div class="form-group">
      <label for="price">Price</label>
      <input type="number" class="form-control" v-model="product.price" id="price" number>
    </div>
    <button type="submit" @click.prevent="onSubmit" class="btn btn-primary">Save product</button>
  </form>
</template>

<script>
  export default {
    props: ['product'],
    methods: {
      onSubmit() {
        this.$emit('submit', this.product);
      },
    },
  };
</script>