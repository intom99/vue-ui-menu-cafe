<template>
  <!-- <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <a class="navbar-brand" href="/">Coffee Shop</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/drinks">Drinks</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/foods">Foods</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/cart">
              Cart
              <b-icon-basket3></b-icon-basket3>
              <span class="badge badge-primary ml-2">
                {{ updateCart ? updateCart.length : amount.length }}</span
              >
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav> -->
  <div>
    <b-navbar toggleable="lg" type="light">
      <div class="container">
        <b-navbar-brand href="/">Coffee Shop</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
             <router-link class="nav-link" to="/">Home</router-link>
            <router-link class="nav-link" to="/drinks">Drinks</router-link>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            
<router-link class="nav-link" to="/cart">
              Cart
              <b-icon-basket3></b-icon-basket3>
              <span class="badge badge-primary ml-2">
                {{ updateCart ? updateCart.length : amount.length }}</span
              >
            </router-link>
                     
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Navbar",
  data() {
    return {
      amount: [],
    };
  },
  props: ["updateCart"],
  methods: {
    setAmount(data) {
      this.amount = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/cart")
      .then((response) => this.setAmount(response.data))
      .catch((error) => console.log("Gagal : ", error));
  },
};
</script>

<style>
</style>