<template>
  <div class="w-80">
    <div class="card-title text-center rounded-t-lg text-xl font-semibold">
      {{ title }}
    </div>
    <div class="border-2 border-t-0 p-2 rounded-b-lg">{{ description }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
  },
};
</script>
<style scoped>
.card-title {
  background-color: #f68e5f;
}
</style>
