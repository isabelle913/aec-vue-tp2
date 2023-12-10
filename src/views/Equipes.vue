<template>
  <div class="container mx-auto p-6 h-full">
    <h1 class="text-center text-6xl">Nos équipes</h1>
    <div class="flex justify-center p-6 gap-6 flex-wrap my-12">
      <CardTeam
        v-for="team in teams"
        :key="team.idEquipe"
        :nom="team.nom"
        :logo="team.logo"
        :id="team.idEquipe" />
    </div>

    <div class="flex justify-center">
      <RouterLink to="/inscription">Inscrire une équipe</RouterLink>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import CardTeam from "../components/Card-team.vue";

export default {
  inject: ["teams"],
  components: {
    CardTeam,
  },
};
</script>

<style scoped>
a {
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  background-color: #f68e5f;
  padding: 15px 30px;
  font-size: 30px;
}
a:focus,
a:hover {
  outline: none;
  scale: 1.2;
}
</style>
