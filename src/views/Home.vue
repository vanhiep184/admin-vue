<template>
  <div class="home">
    <h2>Products</h2>
    <div class="container pt-5 pb-5">
      <div class="row">
        <table class="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col" class="text-center">ID</th>
              <th scope="col" class>Name</th>
              <th scope="col" class="text-center">Price</th>
              <th scope="col" class>Description</th>
              <th scope="col" class="text-right">
                <addProduct></addProduct>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" v-bind:key="product.id">
              <th scope="row" class="text-center">{{ product.id }}</th>
              <td>
                <router-link
                  :to="{ name: 'product-detail', params:{id: product.id}}"
                >{{ product.name }}</router-link>
              </td>
              <td class="text-center">{{ product.price }}</td>
              <td>{{ product.description }}</td>
              <td class="text-right">
                <router-link :to="{name: 'product-edit', params: {id: product.id}}">
                  <button class="btn btn-info">Edit</button>
                </router-link>
                <button
                  type="button"
                  class="btn btn-danger pull-right px-4 ml-3"
                  data-toggle="modal"
                  data-target=".bd-example-modal-sm"
                  @click="showWarningBeforeDelete(product.id)"
                >Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div
      class="modal fade bd-example-modal-sm"
      id="myModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title" id="exampleModalLabel">Are you sure?</h1>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">Are you sure you want to DELETE this product?</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <router-link to="/">
              <button type="button" class="btn btn-danger" @click="deleteProduct(tempID)">Delete</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

// import Api from "../services/api"

import addProduct from "../components/addProduct";
// import EditProduct from "../components/EditProduct"

export default {
  name: "Home",
  data() {
    return {
      tempID: ""
    };
  },
  components: {
    addProduct
    // EditProduct
  },
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  methods: {
    showWarningBeforeDelete(ProID) {
      // $("#my-modal").modal("show");
      this.tempID = ProID;
    },
    deleteProduct(ProID) {
      this.$store.dispatch("deleteProduct", ProID);
      window.location.reload();
    }
  }
};
</script>


<style scoped lang="scss">
</style>

<style>
.card-columns {
  @include media-breakpoint-only(lg) {
    column-count: 4;
  }
  @include media-breakpoint-only(xl) {
    column-count: 5;
  }
}

img {
  max-width: 300px;
}
</style>