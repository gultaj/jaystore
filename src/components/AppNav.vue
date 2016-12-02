<template>
  <nav class="navbar navbar-full navbar-light navbar-jw">
    <a href="#" class="navbar-brand">
      <img src="../assets/jay.svg" class="d-inline-block align-top" width="30" height="30" alt="Jayway logo"> Jaystore
    </a>
    <div class="nav navbar-nav">
      <router-link to="home" class="nav-item nav-link" active-class="active" exact>Home</router-link>
      <router-link to="manage-products" class="nav-item nav-link" active-class="active" exact>Manage Products</router-link>
    </div>
  </nav>
</template>