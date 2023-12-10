<template>
  <div class="container mx-auto p-6">
    <h1 class="text-center text-6xl mb-6">
      Par ici pour inscrire une équipe !
    </h1>
    <div class="form-container p-6 rounded-lg">
      <form @submit="validate">
        <!-- first section -->
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/2 p-4">
            <!-- prettier-ignore -->
            <InputBase id="idEquipe" v-model="teamObj.idEquipe.value" :erreurMessage="teamObj.idEquipe.erreurMessage" :label="teamObj.idEquipe.label" />
          </div>
          <div class="w-full md:w-1/2 p-4">
            <!-- prettier-ignore -->
            <InputBase id="nom" v-model="teamObj.nom.value" :erreurMessage="teamObj.nom.erreurMessage" :label="teamObj.nom.label" />
          </div>

          <div class="w-full p-4">
            <!-- prettier-ignore -->
            <InputBase id="logo" v-model="teamObj.logo.value" :erreurMessage="teamObj.logo.erreurMessage" :label="teamObj.logo.label" />
          </div>
        </div>

        <div class="separator"></div>

        <!-- second section -->
        <div class="text-center text-2xl">Les joueurs</div>
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/2 p-4">
            <!-- prettier-ignore -->
            <InputBase id="joueur1" v-model="teamObj.joueur1.value" :erreurMessage="teamObj.joueur1.erreurMessage" :label="teamObj.joueur1.label" />
          </div>
          <div class="w-full md:w-1/2 p-4">
            <!-- prettier-ignore -->
            <InputBase id="joueur2" v-model="teamObj.joueur2.value" :erreurMessage="teamObj.joueur2.erreurMessage" :label="teamObj.joueur2.label" />
          </div>
          <div class="w-full md:w-1/2 p-4">
            <!-- prettier-ignore -->
            <InputBase id="joueur3" v-model="teamObj.joueur3.value" :erreurMessage="teamObj.joueur3.erreurMessage" :label="teamObj.joueur3.label" />
          </div>
          <div class="w-full md:w-1/2 p-4">
            <!-- prettier-ignore -->
            <InputBase id="joueur4" v-model="teamObj.joueur4.value" :erreurMessage="teamObj.joueur4.erreurMessage" :label="teamObj.joueur4.label" />
          </div>
          <div class="w-full md:w-1/2 p-4">
            <!-- prettier-ignore -->
            <InputBase id="joueur5" v-model="teamObj.joueur5.value" :erreurMessage="teamObj.joueur5.erreurMessage" :label="teamObj.joueur5.label" />
          </div>
        </div>

        <div class="flex justify-center mt-8">
          <button class="btnSubmit">Inscription</button>
        </div>
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
  inject: ["addTeam", "teams"],
  data() {
    return {
      teamObj: {
        idEquipe: {
          value: undefined,
          label: "Numéro",
          erreurMessage: "",
        },
        nom: {
          value: "",
          label: "Nom de l'équipe",
          erreurMessage: "",
        },
        logo: {
          value: "",
          label: "URL du logo",
          erreurMessage: "",
        },
        joueur1: {
          value: "",
          label: "Joueur 1",
          erreurMessage: "",
        },
        joueur2: {
          value: "",
          label: "Joueur 2",
          erreurMessage: "",
        },
        joueur3: {
          value: "",
          label: "Joueur 3",
          erreurMessage: "",
        },
        joueur4: {
          value: "",
          label: "Joueur 4",
          erreurMessage: "",
        },
        joueur5: {
          value: "",
          label: "Joueur 5",
          erreurMessage: "",
        },
      },
    };
  },
  methods: {
    validate(e) {
      e.preventDefault();

      this.resetErreurs();

      let isValide = true;

      const idEquipe = Number(this.teamObj.idEquipe.value);

      const isIdEquipeAlreadyExist = this.teams.some(
        (team) => team.idEquipe === idEquipe
      );

      // prettier-ignore
      if (typeof idEquipe !==  "number" || idEquipe <= 0 || !idEquipe ) {
        this.teamObj.idEquipe.erreurMessage = "Veuillez inscrire un numéro d'équipe valide";
        isValide = false;
      } else if (isIdEquipeAlreadyExist){
        this.teamObj.idEquipe.erreurMessage = "Ce numéro d'équipe est déja en utilisation veuillez en choisir un autre";
        isValide = false;
      }
      if (this.teamObj.nom.value === "") {
        this.teamObj.nom.erreurMessage = "Veuillez inscrire un nom d'équipe";
        isValide = false;
      }
      if (this.teamObj.logo.value === "") {
        this.teamObj.logo.erreurMessage = "Veuillez ajouter l'URL du logo";
        isValide = false;
      }
      if (this.teamObj.joueur1.value === "") {
        this.teamObj.joueur1.erreurMessage = "Veuillez inscrire le joueur";
        isValide = false;
      }
      if (this.teamObj.joueur2.value === "") {
        this.teamObj.joueur2.erreurMessage = "Veuillez inscrire le joueur";
        isValide = false;
      }
      if (this.teamObj.joueur3.value === "") {
        this.teamObj.joueur3.erreurMessage = "Veuillez inscrire le joueur";
        isValide = false;
      }
      if (this.teamObj.joueur4.value === "") {
        this.teamObj.joueur4.erreurMessage = "Veuillez inscrire le joueur";
        isValide = false;
      }
      if (this.teamObj.joueur5.value === "") {
        this.teamObj.joueur5.erreurMessage = "Veuillez inscrire le joueur";
        isValide = false;
      }

      if (!isValide) return;

      const newTeam = {
        idEquipe: idEquipe,
        nom: this.teamObj.nom.value,
        logo: this.teamObj.logo.value,
        joueurs: [
          this.teamObj.joueur1.value,
          this.teamObj.joueur2.value,
          this.teamObj.joueur3.value,
          this.teamObj.joueur4.value,
          this.teamObj.joueur5.value,
        ],
      };

      this.addTeam(newTeam);
      this.$router.push({ name: "equipes" });
    },
    resetErreurs() {
      this.teamObj.idEquipe.erreurMessage = "";
      this.teamObj.nom.erreurMessage = "";
      this.teamObj.logo.erreurMessage = "";
      this.teamObj.joueur1.erreurMessage = "";
      this.teamObj.joueur2.erreurMessage = "";
      this.teamObj.joueur3.erreurMessage = "";
      this.teamObj.joueur4.erreurMessage = "";
      this.teamObj.joueur5.erreurMessage = "";
    },
  },
};
</script>
<style scoped>
.form-container {
  background-color: #f5dd90;
}
.separator {
  border-bottom: solid 1px #6f8695;
  margin: 20px 0;
}
.btnSubmit {
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  background-color: #f68e5f;
  padding: 15px 30px;
  font-size: 30px;
}
.btnSubmit:focus,
.btnSubmit:hover {
  outline: none;
  scale: 1.2;
}
</style>
