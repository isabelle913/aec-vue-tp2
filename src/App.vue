<template>
  <div class="h-screen flex flex-col justify-between">
    <Navigation></Navigation>
    <RouterView />
    <Footer></Footer>
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import { computed } from "vue";

import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Navigation,
    Footer,
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
      getNewTeam: {},
    };
  },
  methods: {
    addTeam(newTeam) {
      if (newTeam) {
        this.teams.push(newTeam);
      }
    },
  },
  provide() {
    return {
      addTeam: this.addTeam,
      teams: computed(() => this.teams),
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kalnia:wght@300&display=swap");

h1 {
  font-family: "Kalnia", serif;
}
</style>
