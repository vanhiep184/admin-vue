<template>
  <div>
    <h1>Product Detail</h1>
    <img :src="product.thumbnail" alt />
    <h3>{{ product.name }}</h3>
    <div v-html="product.description"></div>
  </div>
</template>

<script>
export default {
  computed: {
    product() {
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