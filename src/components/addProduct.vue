<template>
    <div class="container">
    <button
      class="btn btn-primary pull-right"
      data-toggle="modal"
      data-target=".bd-example-modal-lg"
    >Add New Product</button>
    <!-- Large modal -->
    <div
      class="modal fade bd-example-modal-lg"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close pull-right" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h1 class="modal-title">Add Product</h1>
          </div>
          <div class="modal-body">
            <form>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="">Name</span>
          </div>
          <input type="text" class="form-control"
          placeholder="Iphone"
                  v-model="Product.name"
          />
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">$</span>
          </div>
          <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"
          v-model="Product.price">
          <div class="input-group-append">
            <span class="input-group-text">.00</span>
          </div>
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">Description</span>
          </div>
          <textarea class="form-control" aria-label="Description"
          v-model="Product.description"></textarea>
        </div>
        <button type="submit" class="btn btn-primary"
        @click="addToDB">Add Product</button>
      </form>
          </div>
          <div class="modal-footer"></div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

import Api from "../services/api"

export default {
    data(){
        return{
            Product: {
                name: '',
                price: 0,
                description: ''
            }
        }
    },
    methods: {
        async addToDB() {
            let newProduct = {
                name : this.Product.name,
                price : this.Product.price,
                description: this.Product.description
            };

            console.log("aaaaaaaaaaa",newProduct);

                let res = await Api().post("/products", newProduct);
            console.log("bbbbbbbbbbb",res);
             
                // window.location.reload();
            this.state.products = [...this.state.products, res.data]

        
        }
    }
}

</script>