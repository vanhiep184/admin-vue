<template>
    <form>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="">Name</span>
            </div>
            <input type="text" class="form-control"
            placeholder="Iphone"
                    v-model="product.name"
            />
        </div>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text">$</span>
            </div>
            <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"
            v-model="product.price">
            <div class="input-group-append">
                <span class="input-group-text">.00</span>
            </div>
        </div>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text">Description</span>
            </div>
            <textarea class="form-control" aria-label="Description"
            v-model="product.description"></textarea>
        </div>
        <div>
            <button type="submit" class="btn btn-success"
                    @click="saveProduct">{{ buttonText }}</button>
            <button type="submit" class="btn btn-warning ml-3"
                    @click="cancel">Cancel</button>
        </div>
        
    </form>
</template>
    

<script>


export default {
    props:['product', 'saveProduct', 'cancel','buttonText']

}



</script>