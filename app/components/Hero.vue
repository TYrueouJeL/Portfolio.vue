<template>
  <div id="accueil" class="mx-80 flex items-center justify-center min-h-screen">
    <AOSBlock type="fade-up" :duration="750" :delay="1500">
      <div class="border border-black p-2 w-full grid grid-cols-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <p class="mb-4 font-bold text-xl col-span-2">Profil :</p>
  
        <div>
          <div class="mb-2">
            <p class="font-bold text-lg">Status : </p>
            <p>Étudiant en BTS SIO option SLAM</p>
          </div>
    
          <div class="mb-2">
            <p class="font-bold text-lg">Age : </p>
            <p>20 ans</p>
          </div>
        </div>
  
        <div class="flex flex-col justify-between">
          <div class="mb-2">
            <p class="font-bold text-lg">Description : </p>
            <p>Étudiant en développement web, curieux et autonome. J’aime concevoir des sites webs, des logiciels et des jeux vidéos.</p>
          </div>
        </div>

        <div class="mb-2 flex justify-around col-span-2">
          <a href="#contact" class="hover:underline mr-2">Me contacter</a>
          <a href="#competences" class="hover:underline">Mes compétences</a>
        </div>
      </div>
    </AOSBlock>
  </div>
</template>

<script setup lang="ts">
import AOSBlock from './AOSBlock.vue';
</script>