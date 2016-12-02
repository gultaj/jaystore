<template>
  <div>
    <div class="container">
      <header class="app-header">
        <app-nav></app-nav>
      </header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppNav from './components/AppNav';

export default {
  components: {
    AppNav,
  },
};
</script>
