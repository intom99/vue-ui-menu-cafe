<template>
  <div class="home">
  <Navbar/>
  <div class="container">
    <Header/>
    <div class="row mt-4">
      <h2>Best <strong>Drink</strong></h2>
      <div class="col">
      <router-link to="/foods" class="btn btn-primary float-right"><b-icon-eye></b-icon-eye> See All</router-link>
    </div>

    </div>
 
  <div class="row mb-3">

    <div class="col-md-4 mt-4">
      <Product/>
    </div>
    <div class="col-md-4 mt-4">
      <h2>Food</h2>
    </div>
    <div class="col-md-4 mt-4">
      <h2>Food</h2>
    </div>

  </div>

 </div>
      </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Header from '@/components/Header.vue'
import Product from '@/components/Product.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Header,
    Product
  }
}
</script>
