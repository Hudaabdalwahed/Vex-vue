<template>
  <section class="section">
    <div class="container">
      <div class="row">
        <!-- Blog Image -->
        <div class="col-md-5 mb-4 mb-md-0">
          <div class="sticky-image">
            <img class="img-fluid w-100" :src="post.image" :alt="post.title" />
          </div>
        </div>

        <!-- Blog Content -->
        <div class="col-lg-6 col-md-7 offset-lg-1">
          <h1 class="mb-4">
            {{ post.title }}
          </h1>

          <div class="content">
            <p v-for="(paragraph, index) in post.content" :key="index">
              {{ paragraph }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useBlogStore } from "@/stores/blogStore";

const route = useRoute();

const blogStore = useBlogStore();

// تحديد المقال حسب الـ ID الموجود بالرابط
const post = computed(() => {
  const postId = Number(route.params.id);

  return (
    blogStore.posts.find((item) => item.id === postId) || blogStore.posts[0]
  );
});
</script>
