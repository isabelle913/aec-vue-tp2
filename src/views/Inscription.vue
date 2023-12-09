<template>
  <div class="container mx-auto p-6">
    <h1 class="text-center text-6xl mb-6">
      Par ici pour inscrire une équipe !
    </h1>
    <div class="form-container p-6">
      <form @submit="validate">
        <!-- first section -->
        <div class="flex flex-wrap">
          <div class="w-1/2 p-4">
            <!-- prettier-ignore -->
            <label for="id" class="block" >{{ newTeam.id.label }}<span class="text-red-500 text-xl"> *</span></label>
            <!-- prettier-ignore -->
            <input type="text" id="id" v-model.number="newTeam.id.value" class="p-2 rounded-lg w-full focus:outline-none" />
            <!-- prettier-ignore -->
            <p v-if="newTeam.id.displayErreur">{{ newTeam.id.erreurMessage }}</p>
          </div>
          <div class="w-1/2 p-4">
            <!-- prettier-ignore -->
            <label for="name" class="block" >{{ newTeam.nom.label }}<span class="text-red-500 text-xl"> *</span></label>
            <!-- prettier-ignore -->
            <input type="text" id="name" v-model.trim="newTeam.nom.id" class="p-2 rounded-lg w-full" />
            <p v-if="newTeam.nom.displayErreur">
              {{ newTeam.nom.erreurMessage }}
            </p>
          </div>

          <div>logo</div>
        </div>

        <!-- second section -->
        <div>joueur</div>
        <button>Inscription</button>
      </form>
    </div>
  </div>
</template>

<script>
import InputBase from "../components/Input.vue";

export default {
  components: {
    InputBase,
  },
  // inject: ["addTeams", "teams"],
  data() {
    return {
      newTeam: {
        id: {
          value: undefined,
          label: "Veuillez inscrire le numéro de l'équipe",
          erreur1: "Veuillez inscrire un numéro d'équipe valide",
          erreur2:
            "Ce numéro d'équipe est déja en utilisation veuillez en choisir un autre",
          displayErreur: 0,
          erreurMessage: () =>
            this.newTeam.id.displayErreur === 2
              ? this.newTeam.id.erreur2
              : this.newTeam.id.erreur1,
        },
        nom: {
          value: "",
          label: "Veuillez inscrire le nom de l'équipe",
          erreurMessage: "Veuillez inscrire un nom d'équipe",
          displayErreur: false,
        },
        logo: "",
        joueur1: "",
        joueur2: "",
        joueur3: "",
        joueur4: "",
        joueur5: "",
      },
    };
  },
  methods: {
    validate(e) {
      e.preventDefault();

      this.resetErreurs();

      let isValide = true;
      // prettier-ignore
      if ( !this.newTeam.id.value > 0 && typeof this.newTeam.id.value !== "number") {
        this.newTeam.id.displayErreur = 1;
        console.log("Miip ID");
      }
      if (this.newTeam.nom.value === "") {
        this.newTeam.nom.displayErreur = true;
        console.log("Miip NOM");
      }

      // addTeams
      // router push équipes
    },
    resetErreurs() {
      this.newTeam.id.displayErreur = 0;
      this.newTeam.nom.displayErreur = false;
    },
  },
};
</script>
<style scoped>
.form-container {
  background-color: #f5dd90;
}
</style>
