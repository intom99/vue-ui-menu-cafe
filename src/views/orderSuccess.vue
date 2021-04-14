<template>
  <div class="order-success">
      <Navbar />
<div class="container">
    <div class="row justify-content-center mt-5">
<div class="col text-center">
    <img src="../assets/images/success.png" width="300px" alt="">
    <h2><strong>SUCCESS!!!</strong></h2>
    <h4>your order on processed, please wait.</h4>
</div>
    </div>
</div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
    name: "orderSuccess",
    components: { Navbar },

}
</script>

<style>

</style>