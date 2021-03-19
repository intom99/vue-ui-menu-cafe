<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="mt-4">List of <strong>Drink</strong> :</h2>
        </div>
      </div>

      <div class="row mb-4">
        <div
          class="col-md-4 mt-4"
          v-for="product in products"
          :key="product.id"
        >
          <Product :product="product" />
        </div>
      </div>   

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Product from "@/components/Product.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Navbar,
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
      .get("http://localhost:3000/drink")
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log("Gagal : ", error));
  },
};
</script>

<style>
</style>