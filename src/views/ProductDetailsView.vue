<template>
  <section class="section">
    <div class="container">
      <div class="row">
        <!-- Product Images -->
        <div class="col-md-5 mb-4 mb-md-0">
          <div class="product-image-slider">
            <img
              class="img-fluid w-100"
              :src="selectedImage"
              :alt="product.name"
            />
          </div>

          <!-- Thumbnails -->
          <div class="row mt-3">
            <div v-for="image in product.images" :key="image" class="col-3">
              <img
                class="img-fluid"
                :src="image"
                :alt="product.name"
                @click="selectImage(image)"
                :class="{ active: selectedImage === image }"
              />
            </div>
          </div>
        </div>

        <!-- Product Information -->
        <div class="col-lg-6 col-md-7 offset-lg-1">
          <h1 class="mb-4">
            {{ product.name }}
          </h1>

          <p>
            <strong>Colors: </strong>
            {{ product.colors }}
          </p>

          <p>
            <strong>Sizes: </strong>
            {{ product.sizes }}
          </p>

          <p class="price py-4">
            {{ product.price }}

            <s class="price">
              {{ product.oldPrice }}
            </s>
          </p>

          <button class="btn btn-main mb-5" type="button" @click="addToCart">
            Add to Cart
          </button>

          <div class="content">
            <p>
              {{ product.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useProductStore } from "@/stores/productStore";

const route = useRoute();

const productStore = useProductStore();

// المنتج الحالي حسب الـ ID الموجود في الرابط
const product = computed(() => {
  const productId = Number(route.params.id);

  return (
    productStore.products.find((item) => item.id === productId) ||
    productStore.products[0]
  );
});

// الصورة المختارة
const selectedImage = ref(product.value.images[0]);

// تغيير الصورة عند الضغط على Thumbnail
const selectImage = (image: string) => {
  selectedImage.value = image;
};

// إذا انتقلنا من منتج لمنتج آخر
// نرجع نعرض أول صورة للمنتج الجديد
watch(
  () => product.value.id,
  () => {
    selectedImage.value = product.value.images[0];
  }
);

// زر Add to Cart
const addToCart = () => {
  console.log(`${product.value.name} added to cart`);
};
</script>

<style scoped>
.product-image-slider {
  min-height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-image-slider img {
  max-height: 450px;
  object-fit: contain;
}

.active {
  border: 2px solid #ff8a00;
  cursor: pointer;
}

.row.mt-3 img {
  cursor: pointer;
}
</style>
