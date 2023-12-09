<template>
  <div>Erreur</div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  inject: ["addTeams", "teams"],
};
</script>
