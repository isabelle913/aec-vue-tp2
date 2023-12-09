<template>
  <div class="navigation h-20 flex flex-col justify-center">
    <div class="container mx-auto p-2 flex justify-between items-center">
      <div class="h-16 w-16 flex items-center">
        <img src="../assets/images/logo-eSport-color.png" />
        <div class="logo-title">eSPort</div>
      </div>

      <div class="flex gap-x-8 h-auto">
        <RouterLink :to="{ name: 'accueil' }">Accueil</RouterLink>
        <RouterLink :to="{ name: 'equipes' }">Équipes</RouterLink>
        <!-- prettier-ignore -->
        <RouterLink :to="{ name: 'inscription' }">Inscription d'une équipe</RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
</script>

<style scoped>
.navigation {
  background-color: #6f8695;
}
a {
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
}
a:focus,
a:hover {
  outline: none;
  scale: 1.2;
  background-color: #f4af8f;
}
a.router-link-active {
  background-color: #f68e5f;
  scale: 1.2;
}
img {
  width: 100%;
}
.logo-title {
  color: #f68e5f;
  font-size: 26px;
  font-weight: bold;
}
</style>
