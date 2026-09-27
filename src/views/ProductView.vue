<template>
  <section class="section gallery">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center mb-5">
          <h1 class="font-weight-bold">All latest Smart Watch</h1>
        </div>
      </div>

      <div class="row">
        <div
          v-for="product in productStore.products"
          :key="product.id"
          class="col-lg-3 col-md-4 col-sm-6 mb-4"
        >
          <div class="block">
            <div class="gallery-overlay">
              <router-link
                :to="`/product-details/${product.id}`"
                class="gallery-popup"
              >
                <i class="tf-ion-plus-round"></i>
              </router-link>
            </div>

            <img class="img-fluid" :src="product.image" :alt="product.name" />
          </div>

          <div class="product-info">
            <h4 class="mb-2">
              <router-link
                :to="`/product-details/${product.id}`"
                class="link-title"
              >
                {{ product.name }}
              </router-link>
            </h4>

            <p class="price">
              {{ product.price }}

              <s class="price">
                {{ product.oldPrice }}
              </s>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useProductStore } from "@/stores/productStore";

const productStore = useProductStore();
</script>
<style scoped>
.gallery .block {
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.gallery .block img {
  max-height: 280px;
  width: auto;
  max-width: 100%;
  object-fit: contain;
}
</style>
