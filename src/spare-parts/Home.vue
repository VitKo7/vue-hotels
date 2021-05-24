<template>
  <div class="home">
    <h1>{{ title }}</h1>
    <Button @click="increment" outlined>Click me!</Button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Button from "../components/Button";

export default {
  name: "Home",
  components: {
    Button,
  },
  data() {
    return {
      amountOfClicks: 0,
    };
  },
  computed: {
    title() {
      return `Amount of clicks ${this.amountOfClicks}`;
    },
  },
  methods: {
    increment() {
      this.amountOfClicks += 1;
    },
  },
};
</script>
