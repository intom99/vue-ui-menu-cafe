<template>
  <div>
    <Navbar />
    <div class="container">
      <h2><strong>Foods</strong></h2>

      <!-- <div class="row mb-4">
        <div
          class="col-md-4 mt-4"
          v-for="product in products"
          :key="product.id"
        >
          <Product :product="product" />
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Home",
  components: {
    Navbar
    
  },
};
</script>

<style>
</style>