<template>
  <div class="container">
    <button
      class="btn btn-outline-primary"
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
          <div class="modal-header d-flex flex-column">
            <button type="button" class="close pull-right" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h1 class="modal-title">Add Product</h1>
          </div>
          <div class="modal-body">
            <b-form @submit.stop.prevent="addToDB">
              <b-form-group
                id="example-input-group-1"
                label-align-md="left"
                label="Name"
                label-for="name"
              >
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
              <b-form-group
                id="example-input-group-2"
                label-align-md="left"
                label="Price"
                label-for="price"
              >
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

              <b-form-group
                id="example-input-group-3"
                label-align-md="left"
                label="Description"
                label-for="description"
              >
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

              <b-button class="btn btn-primary" type="submit" variant="primary">Add Product</b-button>
            </b-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// import Api from "../services/api"
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  numeric,
  minValue
} from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  data() {
    return {
      product: {
        name: "",
        price: 0,
        description: ""
      }
    };
  },
  methods: {
    addToDB() {
      this.$v.product.$touch();
      if (this.$v.product.$anyError) {
        return;
      }
      this.$store.dispatch("addProduct", this.product);
      window.location.reload();
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