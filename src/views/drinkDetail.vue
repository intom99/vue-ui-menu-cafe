<template>
  <div class="drink-detail">
    <Navbar />
    <div class="container">
      <!-- breadcrumb -->
      <div class="row">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb mt-5 bg-white pl-0">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/drinks" class="text-dark">Drinks</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                <strong class="text-dark">Detail Order</strong>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <!-- main-content -->
      <div class="row">
        <div class="col-md-5">
          <img :src="'../assets/img/' + product.img" class="img-fluid shadow" />
        </div>
        <div class="col-md-7">
          <h2 class="font-weight-bold text-center">{{ product.name }}</h2>
          <hr />
          <h4 class="mt-5">
            Price : <strong>Rp. {{ product.price }}</strong>
          </h4>

          <form class="mt-5">
              <div class="form-group">
                  <label for="amount" class="font-weight-bold">Amount</label>
                  <input type="number" class="form-control">
              </div>
              <div class="form-group">
                  <label for="notes" class="font-weight-bold">Notes</label>
                  <textarea name="note" class="form-control" cols="10" rows="5" placeholder="notes : extra sugar, extra ice, etc"></textarea>
              </div>
              <button type="submit" class="btn btn-primary mt-2"><b-icon-cart class="mr-2"></b-icon-cart>Order Proses</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
  name: "drinkDetail",
  components: {
    Navbar,
  },
  data() {
    return {
      product: {},
    };
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/drink/" + this.$route.params.id)
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log("Gagal : ", error));
  },
};
</script>

<style>
</style>