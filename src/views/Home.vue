<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <Header />

      <div class="row mt-4">
        <div class="col">
          <h2>Best <strong>Drink</strong></h2>
        </div>
        <div class="col">
          <router-link to="/drinks" class="btn btn-primary float-right"
            ><b-icon-eye></b-icon-eye> See All</router-link
          >
        </div>
      </div>

      <div class="row mb-3">
        <div
          class="col-md-4 mt-4"
          v-for="product in products"
          :key="product.id"
        >
          <Product :product="product" />
        </div>

      </div>
      <!-- end of container -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Header from "@/components/Header.vue";
import Product from "@/components/Product.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Navbar,
    Header,
    Product,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    setProduct(data) {
      this.products = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/best-drink")
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log("Gagal : ", error));
  },
};
</script>
