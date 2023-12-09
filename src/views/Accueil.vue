<template>
  <div>Accueil</div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  inject: ["addTeams", "teams"],
};
</script>
