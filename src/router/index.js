import { createRouter, createWebHistory } from "vue-router";
import Accueil from "../views/Accueil.vue";
import Equipes from "../views/Equipes.vue";
import DetailsEquipe from "../views/Details-equipe.vue";
import Inscription from "../views/Inscription.vue";
import Erreur from "../views/Erreur.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "accueil",
      component: Accueil,
    },
    {
      path: "/equipes",
      name: "equipes",
      component: Equipes,
    },
    {
      path: "/equipes/:id",
      name: "details",
      component: DetailsEquipe,
    },
    {
      path: "/inscription",
      name: "inscription",
      component: Inscription,
    },
    {
      path: "/:patchMatch(.*)*",
      name: "erreur",
      component: Erreur,
    },
  ],
});

export default router;
