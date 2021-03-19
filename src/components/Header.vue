<template>
<div class="header">
<!-- Desktop versi -->
<div class="d-none d-md-block">
    <div class="row mt-4">
      <div class="col">
          <div class="d-flex h-100">
              <div class="justify-content-center align-self-center">
              <h2><strong>Delicious Drink and Food, </strong><br> in Your Gadget</h2>
              <p>Choose the menu list </p>
              <router-link to="/" class="btn btn-lg btn-primary">Order Here <b-icon-chevron-double-right></b-icon-chevron-double-right></router-link>
         </div>
          </div>  
      </div>
      <div class="col">
          <img src="../assets/images/coffee.png" width="100%" alt="">
      </div>
  </div>
</div>


<!-- Moblie versi -->
<div class="d-sm-block d-md-none">
    <div class="row mt-4">
        <div class="col-12">
          <img src="../assets/images/coffee.png" width="100%" alt="">
      </div>
      <div class="col">
          <div class="d-flex h-100">
              <div class="justify-content-center align-self-center">
              <h2 class="mt-2 mb-3"><strong>Delicious Drinks and Foods Menu, </strong><br> in Your Gadget</h2>
              <p>Choose the menu list </p>
              <router-link to="/" class="btn btn-lg btn-primary">Order Here <b-icon-chevron-double-right></b-icon-chevron-double-right></router-link>
         </div>
          </div>  
      </div>
      
  </div>
</div>
    
 </div> 
</template>

<script>
export default {
    name:'Header'

}
</script>

<style>

</style>