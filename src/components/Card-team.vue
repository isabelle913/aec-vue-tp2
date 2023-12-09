<template>
  <div
    class="w-60 rounded-lg flex flex-col border-2 cursor-pointer hover:scale-110 focus:scale-110"
    @click="onClick">
    <img class="w-60 h-60 rounded-t-lg" :src="logo" :alt="`logo de ${nom}`" />
    <p class="text-center text-3xl my-6">{{ nom }}</p>
  </div>
</template>
<script>
export default {
  props: ["nom", "logo", "id"],
  methods: {
    onClick() {
      this.$router.push("/equipes/" + this.id);
    },
  },
};
</script>
<style scoped>
img {
  width: 100%;
}
</style>
