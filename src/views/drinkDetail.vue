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

          <form class="mt-5" v-on:submit.prevent>
            <div class="form-group">
              <label for="amount" class="font-weight-bold">Amount</label>
              <input
                name="amount"
                type="number"
                class="form-control"
                v-model="order.amount"
              />
            </div>
            <div class="form-group">
              <label for="note" class="font-weight-bold">Notes</label>
              <textarea
                name="note"
                v-model="order.note"
                class="form-control"
                cols="10"
                rows="5"
                placeholder="notes : extra sugar, extra ice, etc"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary mt-2">
              <b-icon-cart class="mr-2" @click="orderHere"></b-icon-cart>Order
              Proses
            </button>
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
      order: {},
    };
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
    orderHere() {
      if (this.order.amount) {
        this.order.products = this.product;
        axios
          .post("http://localhost:3000/cart", this.order)
          .then(() => {
            this.$router.push({ path: "/cart" })
            this.$toast.success("Order Entries in Cart", {
              type: "success",
              position: "top-right",
              duration: 3000,
              dismissible: true,
            });
           
          })
          .catch((err) => console.log("Error", err));
      } else {
        this.$toast.error("Please enter the order amount", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      }
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