<template>
  <header class="navigation sticky-top bg-white">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light">
        <router-link class="navbar-brand" to="/">
          <img src="@/assets/images/logo.png" alt="Vex" width="100px" />
        </router-link>

        <button
          class="navbar-toggler p-0 border-0"
          type="button"
          @click="toggleMenu"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="navbar-collapse text-center"
          :class="{ show: isMenuOpen }"
          id="navigation"
        >
          <ul class="navbar-nav ml-auto mr-n0 mr-md-n3">
            <!-- Home -->
            <li class="nav-item">
              <router-link class="nav-link" to="/"> Home </router-link>
            </li>

            <!-- Products -->
            <li class="nav-item">
              <router-link class="nav-link" to="/products">
                Products
              </router-link>
            </li>

            <!-- Blog -->
            <li class="nav-item">
              <router-link class="nav-link" to="/blog"> Blog </router-link>
            </li>

            <!-- Pages -->
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                @click.prevent="togglePages"
              >
                Pages
                <i class="tf-ion-chevron-down"></i>
              </a>

              <ul class="dropdown-menu" :class="{ show: pagesOpen }">
                <!-- Blog Details -->
                <li>
                  <router-link class="dropdown-item" to="/blog-details/2">
                    Blog Details
                  </router-link>
                </li>

                <!-- Product Details -->
                <li>
                  <router-link class="dropdown-item" to="/product-details/1">
                    Product Details
                  </router-link>
                </li>
              </ul>
            </li>

            <!-- Review -->
            <li class="nav-item">
              <a class="nav-link" href="/#testimonial"> Review </a>
            </li>

            <!-- Contact -->
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">
                Contact
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isMenuOpen = ref(false);
const pagesOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const togglePages = () => {
  pagesOpen.value = !pagesOpen.value;
};
</script>
