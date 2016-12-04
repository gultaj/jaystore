<template>
  <section>
    <product-save-form :product="productInForm" @submit="onFormSave"></product-save-form>
    <product-list 
      :products="products" 
      @edit="onEditProduct"
      @delete="onDeleteProduct"></product-list>
  </section>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import ProductSaveForm from './ProductSaveForm';
  import ProductList from './ProductList';

  const initialData = () => ({
    productInForm: {
      id: null,
      name: '',
      description: '',
      price: null,
    },
  });

  export default {
    name: 'product',
    components: {
      ProductSaveForm,
      ProductList,
    },
    computed: mapGetters({
      products: 'getProducts',
    }),
    data: initialData,
    methods: {
      ...mapActions(['saveProduct', 'deleteProduct']),
      onFormSave(product) {
        this.saveProduct(product);
        this.resetProductInForm();
      },
      onEditProduct(product) {
        this.productInForm = { ...product };
      },
      onDeleteProduct(product) {
        this.deleteProduct(product);

        if (product.id === this.productInForm.id) {
          this.resetProductInForm();
        }
      },
      resetProductInForm() {
        this.productInForm = initialData().productInForm;
      },
    },
  };
</script>