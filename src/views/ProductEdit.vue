/* eslint-disable no-unused-vars */
<template>
  <div class="container">
    <h3>Edit Product</h3>
    <!-- <EditProductForm :product="product" :saveProduct="saveProduct" :cancel="goBackToHome" buttonText="Save" /> -->
    <b-form @submit.stop.prevent="saveProduct">
      <b-form-group id="example-input-group-1" label="Name" label-for="name">
        <b-form-input
          id="name"
          name="name"
          v-model="$v.product.name.$model"
          :state="validateState('name')"
          aria-describedby="name-live-feedback"
        ></b-form-input>

        <b-form-invalid-feedback
          id="name-live-feedback"
        >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
      </b-form-group>
      <b-form-group id="example-input-group-2" label="Price" label-for="price">
        <b-form-input
          id="price"
          name="price"
          v-model="$v.product.price.$model"
          :state="validateState('price')"
          aria-describedby="price-live-feedback"
        ></b-form-input>

        <b-form-invalid-feedback
          id="price-live-feedback"
        >This is a required field and must be a positive number.</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="example-input-group-3" label="Description" label-for="description">
        <b-form-textarea
          id="description"
          name="description"
          v-model="$v.product.description.$model"
          placeholder="Enter something..."
          rows="3"
          max-rows="6"
          :state="validateState('description')"
          aria-describedby="description-live-feedback"
        ></b-form-textarea>

        <b-form-invalid-feedback id="description-live-feedback">This is a required field.</b-form-invalid-feedback>
      </b-form-group>

      <b-button class="btn btn-success" type="submit" variant="primary">Save</b-button>
      <b-button class="btn btn-warning ml-3" @click="goBackToHome()">Cancel</b-button>
    </b-form>
  </div>
</template>
    

<script>
import { mapState } from "vuex";
// import EditProductForm from "@/components/EditProductForm"
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  numeric,
  minValue
} from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  computed: {
    ...mapState({
      products: state => state.products
    }),
    product() {
      return { ...this.products.find(pid => pid.id == this.$route.params.id) };
    },
    productTemp() {
      return { ...this.product };
    }
  },
  methods: {
    saveProduct() {
      this.$v.product.$touch();
      if (this.$v.product.$anyError) {
        return;
      }
      //   console.log("this.product", this.product);

      this.$store.dispatch("editProduct", this.product);
      alert("Save successfully !!");
      this.$router.push({ name: "Home" });
      window.location.reload();
    },
    goBackToHome() {
      //Nếu cancel thì lưu lại dữ liệu trước khi chỉnh sửa - nếu người dùng đã sửa nhưng bấm Cancel
      //   this.$v.product = { ...this.productTemp };
      //   console.log("this.product", this.product);
      //   console.log("this.productTemp", this.productTemp);

      this.$router.push({ name: "Home" });
    },
    validateState(name) {
      const { $dirty, $error } = this.$v.product[name];
      return $dirty ? !$error : null;
    }
  },
  validations: {
    product: {
      name: {
        required,
        minLength: minLength(3)
      },
      price: {
        required,
        numeric,
        minValue: minValue(0)
      },
      description: {
        required
      }
    }
  }
};
</script>

<style>
body {
  padding: 1rem;
}
</style>