/* eslint-disable no-unused-vars */
<template>
    <div class="container">
    
        <h3>Edit Product</h3>
        <EditProductForm :product="product" :saveProduct="saveProduct" :cancel="goBackToHome" buttonText="Save" />
        
    </div>

</template>
    

<script>
import { mapState } from 'vuex'
import EditProductForm from "@/components/EditProductForm"



export default {
    components:{
        EditProductForm
    },
    computed:{
        ... mapState({
            products: state => state.products
        }),
        product(){
            return this.products.find(pid => pid.id == this.$route.params.id);
        }
        
    },
    methods:{
        async saveProduct(){
      // eslint-disable-next-line no-unused-vars
            let product = await this.$store.dispatch("editProduct", this.product);
        },
        goBackToHome(){
            this.$router.push({name: 'Home'});
        }
    }


}
</script>