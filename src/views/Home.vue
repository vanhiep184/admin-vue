<template>
  <div class="home">
    <h2>Products</h2>
    <div class="product-container">
      <div v-for="product in products" v-bind:key="product.id">
        <router-link :to="{ name: 'product-detail', params:{id: product.id}}">
          <div class="product-box">
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MU9M2_AV2"
            />
            <div>
              <h3>{{ product.name }}</h3>
              <h5><strong>{{ product.price }}</strong></h5>
              <div>{{ product.description }}</div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {},
  computed: {
    products() {
      return this.$store.state.products;
    }
  }
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