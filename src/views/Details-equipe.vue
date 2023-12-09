<template>
  <div class="container mx-auto p-6">
    <h1 class="text-center text-6xl">Details équipe: {{ team.nom }}</h1>
    <div class="container-team w-5/6 mx-auto my-6 p-6 flex rounded-lg">
      <!-- left section -->
      <div class="w-1/3 flex justify-center">
        <img class="rounded-lg" :src="team.logo" :alt="`logo de ${team.nom}`" />
      </div>

      <!-- right section -->
      <div class="w-2/3 p-6">
        <div class="text-center text-5xl mb-4">{{ team.nom }}</div>
        <div class="text-xl mb-4">Membres de l'équipe:</div>
        <div class="flex flex-col justify-between gap-y-6">
          <div
            v-for="(joueur, index) in team.joueurs"
            :key="index"
            class="bg-red-100 px-4 py-4 rounded-lg joueur">
            {{ joueur }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["teams"],
  data() {
    return {
      idEquipe: this.$route.params.id,
      team: {},
    };
  },
  mounted() {
    const id = Number(this.idEquipe);
    this.team = this.teams.filter((team) => team.idEquipe === id)[0];
  },
};
</script>
<style scoped>
.container-team {
  background-color: #f5dd90;
}
.joueur {
  background-color: #f68e5f;
}
</style>
