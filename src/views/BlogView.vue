<template>
  <section class="feature-list section">
    <div class="container">
      <!-- Page Title -->
      <div class="row">
        <div class="col-12 text-center mb-5">
          <h1>Our Latest Post</h1>
        </div>
      </div>

      <!-- Blog Posts -->
      <div
        v-for="(post, index) in blogStore.posts"
        :key="post.id"
        class="row mb-40"
      >
        <!-- Image -->
        <div
          class="col-md-6 text-center mb-5 mb-lg-0"
          :class="index % 2 !== 0 ? 'order-md-2 order-1' : ''"
        >
          <img class="img-fluid" :src="post.image" :alt="post.title" />
        </div>

        <!-- Content -->
        <div
          class="col-md-6 align-self-center text-center text-md-left"
          :class="index % 2 !== 0 ? 'order-md-1 order-2' : ''"
        >
          <div class="content">
            <h4 class="subheading">
              <router-link :to="`/blog-details/${post.id}`" class="link-title">
                {{ post.title }}
              </router-link>
            </h4>

            <p>
              {{ post.description }}
            </p>

            <router-link
              :to="`/blog-details/${post.id}`"
              class="btn btn-main btn-main-sm"
            >
              Read More
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useBlogStore } from "@/stores/blogStore";

const blogStore = useBlogStore();
</script>
