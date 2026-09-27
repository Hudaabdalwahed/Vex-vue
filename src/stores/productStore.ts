import { defineStore } from "pinia";

export const useProductStore = defineStore("products", {
  state: () => ({
    products: [
      {
        id: 1,
        name: "Apple Watch",
        image: require("@/assets/images/showcase/showcase-1.png"),
        price: "$25.00",
        oldPrice: "$30.00",
        images: [
          require("@/assets/images/showcase/showcase-1.png"),
          require("@/assets/images/showcase/showcase-2.png"),
          require("@/assets/images/showcase/showcase-3.png"),
          require("@/assets/images/showcase/showcase-4.png"),
        ],
        colors: "Black, White, Gray",
        sizes: "Small, Medium, Large",
        description:
          "Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness tracking and health-oriented capabilities with integration with iOS and other Apple products and services.",
      },

      {
        id: 2,
        name: "Galaxy Watch",
        image: require("@/assets/images/showcase/showcase-2.png"),
        price: "$25.00",
        oldPrice: "$30.00",
        images: [
          require("@/assets/images/showcase/showcase-2.png"),
          require("@/assets/images/showcase/showcase-1.png"),
          require("@/assets/images/showcase/showcase-3.png"),
          require("@/assets/images/showcase/showcase-4.png"),
        ],
        colors: "Black, Silver, Gray",
        sizes: "Small, Medium, Large",
        description:
          "Galaxy Watch is a modern smart watch designed to provide useful features with an elegant and comfortable design.",
      },

      {
        id: 3,
        name: "Motorola Watch",
        image: require("@/assets/images/showcase/showcase-4.png"),
        price: "$25.00",
        oldPrice: "$30.00",
        images: [
          require("@/assets/images/showcase/showcase-4.png"),
          require("@/assets/images/showcase/showcase-1.png"),
          require("@/assets/images/showcase/showcase-2.png"),
          require("@/assets/images/showcase/showcase-3.png"),
        ],
        colors: "Black, White",
        sizes: "Small, Medium, Large",
        description:
          "Motorola Watch combines smart features with a simple and elegant design for everyday use.",
      },

      {
        id: 4,
        name: "OnePlus Watch",
        image: require("@/assets/images/showcase/showcase-7.png"),
        price: "$25.00",
        oldPrice: "$30.00",
        images: [
          require("@/assets/images/showcase/showcase-7.png"),
          require("@/assets/images/showcase/showcase-1.png"),
          require("@/assets/images/showcase/showcase-2.png"),
          require("@/assets/images/showcase/showcase-3.png"),
        ],
        colors: "Black, Gray",
        sizes: "Small, Medium, Large",
        description:
          "OnePlus Watch offers a clean design and useful smart features for everyday activities.",
      },

      {
        id: 5,
        name: "Oppo Watch",
        image: require("@/assets/images/showcase/showcase-8.png"),
        price: "$25.00",
        oldPrice: "$30.00",
        images: [
          require("@/assets/images/showcase/showcase-8.png"),
          require("@/assets/images/showcase/showcase-1.png"),
          require("@/assets/images/showcase/showcase-2.png"),
          require("@/assets/images/showcase/showcase-3.png"),
        ],
        colors: "Black, White",
        sizes: "Small, Medium, Large",
        description:
          "Oppo Watch combines an elegant appearance with smart technology and practical features.",
      },

      {
        id: 6,
        name: "Realme Watch",
        image: require("@/assets/images/showcase/showcase-6.png"),
        price: "$25.00",
        oldPrice: "$30.00",
        images: [
          require("@/assets/images/showcase/showcase-6.png"),
          require("@/assets/images/showcase/showcase-1.png"),
          require("@/assets/images/showcase/showcase-2.png"),
          require("@/assets/images/showcase/showcase-3.png"),
        ],
        colors: "Black, Gray",
        sizes: "Small, Medium, Large",
        description:
          "Realme Watch provides useful smart features in a simple and modern design.",
      },

      {
        id: 7,
        name: "Redmi Watch",
        image: require("@/assets/images/showcase/showcase-5.png"),
        price: "$25.00",
        oldPrice: "$30.00",
        images: [
          require("@/assets/images/showcase/showcase-5.png"),
          require("@/assets/images/showcase/showcase-1.png"),
          require("@/assets/images/showcase/showcase-2.png"),
          require("@/assets/images/showcase/showcase-3.png"),
        ],
        colors: "Black, White",
        sizes: "Small, Medium, Large",
        description:
          "Redmi Watch delivers smart functionality with a lightweight and comfortable design.",
      },

      {
        id: 8,
        name: "Xiaomi Watch",
        image: require("@/assets/images/showcase/showcase-3.png"),
        price: "$25.00",
        oldPrice: "$30.00",
        images: [
          require("@/assets/images/showcase/showcase-3.png"),
          require("@/assets/images/showcase/showcase-1.png"),
          require("@/assets/images/showcase/showcase-2.png"),
          require("@/assets/images/showcase/showcase-4.png"),
        ],
        colors: "Black, Gray, White",
        sizes: "Small, Medium, Large",
        description:
          "Xiaomi Watch combines a modern appearance with practical smart features for everyday users.",
      },
    ],
  }),
});
