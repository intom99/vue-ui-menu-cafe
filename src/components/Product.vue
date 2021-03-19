<template>
  <div class="">
    <div class="card shadow">
      <img
        :src="'assets/img/' + product.img"
        class="card-img-top"
        height="260px"
        alt="images"
      />
      <div class="card-body">
        <h4 class="card-title">{{ product.name }}</h4>
        <p class="card-text">
          Rp. {{ product.price }}
        </p>
        <a href="#" class="btn btn-primary"><b-icon-basket class="mr-2"></b-icon-basket>  Order</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: ["product"],
};
</script>

<style>
</style>