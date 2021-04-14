<template>
  <div class="Cart">
    <Navbar />
    <div class="container">
      <!-- breadcrumb -->
      <div class="row">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb mt-4 bg-white pl-0">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/drinks" class="text-dark">Drinks</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                <strong class="text-dark">My Cart</strong>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row">
        <h2>My <strong>Cart</strong></h2>
        <div class="table-responsive mt-3">
          <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Note</th>
      <th scope="col">Amount</th>
      <th scope="col">Price</th>
      <th scope="col">Subtotal Price</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(cart,index) in carts" :key="cart.id">
      <th scope="row">{{index+1}}</th>
      <td>
          <img :src="'../assets/img/' + cart.products.img" class="img-cart shadow" height="200px" width="250px" />
      </td>
      <td>{{cart.products.name}}</td>
      <td>{{cart.note ? cart.note : "-"}}</td>
      <td>{{cart.amount}}</td>
      <td align="right">Rp. {{cart.products.price}}</td>
      <td align="right"><strong>Rp. {{cart.products.price*cart.amount}}</strong> </td>
      <td align="right" class="text-danger">
        <b-icon-trash></b-icon-trash>
      </td>
    </tr>

    <tr>
<td colspan="6" align="right">
  <strong>Total Price : </strong>
</td>
<td align="right">Rp. {{totalPrice}}</td><td></td>
    </tr>

  </tbody>
</table>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import axios from 'axios'
export default {
  name: "Cart",
  components: { 
    Navbar 
    },
  data(){
    return{
      carts:[]
    }
  },
  methods:{
    setCarts(data){
      this.carts = data
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/cart/")
      .then((response) => this.setCarts(response.data))
      .catch((error) => console.log("Gagal : ", error));
  },
  computed:{
    totalPrice(){
      return this.carts.reduce(function(items, data){
        return items+data.products.price*data.amount
      },0)
    }
  }
};
</script>

<style>
</style>