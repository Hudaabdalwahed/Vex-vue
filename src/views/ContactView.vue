<template>
  <section class="section">
    <div class="container">
      <!-- Contact Information -->
      <div class="row justify-content-center">
        <!-- Central Office -->
        <div class="col-lg-5 col-sm-6 mb-5">
          <h2 class="font-weight-bold mb-4">Central Office</h2>

          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna
          </p>

          <ul class="list-unstyled contact-list">
            <li class="mb-3">
              <a href="tel:0124857985320">
                <i class="tf-ion-ios-telephone mr-2"></i>
                0124857985320
              </a>
            </li>

            <li class="mb-3">
              <a href="mailto:demo@email.com">
                <i class="tf-ion-email mr-2"></i>
                demo@email.com
              </a>
            </li>

            <li class="mb-3">
              <i class="tf-ion-ios-location mr-2"></i>
              Dhaka, Bangladesh
            </li>
          </ul>
        </div>

        <!-- Opening Hours -->
        <div class="col-lg-3 col-sm-6 mb-5">
          <h2 class="font-weight-bold mb-4">Opening Hours</h2>

          <ul class="list-unstyled">
            <li class="mb-2">Monday: 9:00 – 19:00</li>

            <li class="mb-2">Tuesday: 9:00 – 19:00</li>

            <li class="mb-2">Wednesday: 9:00 – 19:00</li>

            <li class="mb-2">Thursday: 9:00 – 19:00</li>

            <li class="mb-2">Friday: 9:00 – 19:00</li>

            <li class="mb-2">Saturday: 9:00 – 19:00</li>

            <li class="mb-2">Sunday: 9:00 – 19:00</li>
          </ul>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <h2 class="font-weight-bold mb-4">Contact</h2>

          <form class="row" @submit.prevent="sendMessage">
            <!-- Name -->
            <div class="col-lg-6 mb-3">
              <input
                v-model="form.name"
                type="text"
                class="form-control mb-2"
                placeholder="Your Name"
                required
              />
            </div>

            <!-- Email -->
            <div class="col-lg-6 mb-3">
              <input
                v-model="form.email"
                type="email"
                class="form-control mb-2"
                placeholder="Your Email"
                required
              />
            </div>

            <!-- Message -->
            <div class="col-12 mb-3">
              <textarea
                v-model="form.message"
                class="form-control mb-2"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <!-- Button -->
            <div class="col-12 text-right">
              <button type="submit" class="btn btn-main btn-main-sm">
                Send Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const form = reactive({
  name: "",
  email: "",
  message: "",
});

const sendMessage = () => {
  console.log("Name:", form.name);
  console.log("Email:", form.email);
  console.log("Message:", form.message);

  alert("Your message has been sent successfully!");

  form.name = "";
  form.email = "";
  form.message = "";
};
</script>
