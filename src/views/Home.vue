<template>
  <div class="home">
    <h2>Products</h2>
    <div class="container pt-5 pb-5">
      <div class="row">
          <table class="table table-striped table-hover table-bordered">
            <thead>
              <tr>
                <th scope="col" class="text-center">ID</th>
                <th scope="col" class="">Name</th>
                <th scope="col" class="text-center">Price</th>
                <th scope="col" class="">Description</th>
                <th scope="col" class="text-right">
                  <addProduct></addProduct>
                </th>
              </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" v-bind:key="product.id">
                  
                  <th scope="row" class="text-center">{{ product.id }}</th>
                  <td><router-link :to="{ name: 'product-detail', params:{id: product.id}}">{{ product.name }}
                  </router-link>
                  </td>
                  <td class="text-center">{{ product.price }}</td>
                  <td>{{ product.description }}</td>
                  <td class="text-right">
                    <button
                              type="button"
                              class="btn btn-info pull-left"
                              data-toggle="modal"
                              data-target=".bd-example-modal-sm"
                            >Edit</button>
                    <button
                            type="button"
                            class="btn btn-danger pull-right"
                            data-toggle="modal"
                            data-target=".bd-example-modal-sm"
                          >Delete</button>
                  </td>
                  
                </tr>
            </tbody>
          </table>
       
      </div>
    </div>
    
  </div>
</template>

<script>
    // @ is an alias to /src
    // import HelloWorld from "@/components/HelloWorld.vue";
    import addProduct from "../components/addProduct"

    export default {
        name: "Home",
        components: {
            addProduct
        },
        computed: {
            products() {
                return this.$store.state.products;
            }
        },

    };
</script>


<style scoped lang="scss">
    .product-container {
        .product-box {
            border: 1px solid black;
            border-radius: 10px;
            margin: 10px;
            padding: 10px;
            text-align: left;
            display: flex;
            justify-content: flex-start;
            img {
                max-width: 200px;
                padding: 10px;
            }
        }
    }
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