<template>
  <div class="h-screen">
    <Navigation></Navigation>
    <RouterView />
    <div>Footer</div>
    <!-- TODO footer -->
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
import { computed } from "vue";

export default {
  components: {
    Navigation,
  },
  data() {
    return {
      teams: [
        {
          idEquipe: 1,
          nom: "Disney",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCPPNgKkgJMPbARUxpTvDGNnJyonbtrvPT1w&usqp=CAU",
          joueurs: ["Mickey", "Pluto", "Dingo", "Donald", "Minnie"],
        },
        {
          idEquipe: 2,
          nom: "Mario",
          logo: "https://i.pinimg.com/222x/eb/cf/79/ebcf7969ff6711ab99e0fc0a610921b6.jpg",
          joueurs: ["Mario", "Peach", "Yoshi", "Luigi", "Toad"],
        },
      ],
    };
  },
  // methods: {
  //   addTeams(newTeam) {
  //     this.teams.push(newTeam);
  //   },
  // },
  provide() {
    return {
      // addTeams: this.addTeams(),
      // teams: this.teams,
      teams: computed(() => this.teams),
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kalnia:wght@300&display=swap");
</style>

<!-- TODO Changer favicon et titre -->
