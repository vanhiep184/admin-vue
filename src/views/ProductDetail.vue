<template>
  <div>
    <h1>Product Detail</h1>
    <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MU9M2_AV2" />
    <h3>{{ product.name }}</h3>
    <h5><strong>{{ product.price }}</strong></h5>
    <div>{{ product.description }}</div>
  </div>
</template>

<script>
export default {
  computed: {
    product() {
      // console.log("state achived: ", this.$store.state.products);
      // console.log("ProId achived: ", this.$route.params.id);
      return this.$store.state.products.find(
        pid => pid.id == this.$route.params.id
      );
    }
  }
};
</script>

<style scoped>
img {
  max-width: 50%;
}
</style>