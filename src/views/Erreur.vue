<template>
  <div
    class="container mx-auto flex flex-col justify-center items-center h-screen page-erreur text-center p-6">
    <div>Oups, il y a une erreur à quelque part!!</div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  inject: ["addTeams", "teams"],
};
</script>
<style scoped>
.page-erreur {
  font-family: "Kalnia", serif;
  font-size: 60px;
}
</style>
