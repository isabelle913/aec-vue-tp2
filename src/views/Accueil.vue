<template>
  <div class="banner-container h-1/3">
    <div class="container mx-auto banner flex flex-col justify-center h-full">
      <div class="text-center">Vive l'activité physique</div>
    </div>
  </div>
  <div class="flex justify-center p-6 gap-6 flex-wrap">
    <CardActivite
      v-for="(act, index) in activites"
      :key="index"
      :title="act.title"
      :description="act.description" />
  </div>
</template>

<script>
import CardActivite from "../components/Card-activite.vue";

export default {
  components: {
    CardActivite,
  },
  data() {
    return {
      activites: [
        {
          title: "Bricoler un avion",
          description:
            "C'est l'une des activités préférées de Mickey! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, voluptatibus?",
        },
        {
          title: "Plomberie",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, voluptatibus?",
        },
        {
          title: "Séduire Minnie",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, voluptatibus?",
        },
        {
          title: "Sauter sur des champignons",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, voluptatibus?",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kalnia:wght@300&display=swap");
.banner-container {
  background-color: #f5dd90;
  font-family: "Kalnia", serif;
  font-size: 80px;
}
</style>
