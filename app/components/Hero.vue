<template>
  <div id="accueil" class="mx-80 flex items-center justify-center min-h-screen">
    <AOSBlock type="fade-up" :duration="750" :delay="1500">
      <div class="border border-black p-2 w-full grid grid-cols-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <p class="mb-4 font-bold text-xl col-span-2">Profil :</p>
  
        <div>
          <div class="mb-2">
            <p class="font-bold text-lg">Status : </p>
            <p>Étudiant en développement</p>
          </div>
    
          <div class="mb-2">
            <p class="font-bold text-lg">Age : </p>
            <p>20 ans</p>
          </div>
    
          <div class="mb-2">
            <p class="font-bold text-lg">Description : </p>
            <p>Étudiant en développement web, curieux et autonome. J’aime concevoir des sites webs, des logiciels et des jeux vidéos.</p>
          </div>
        </div>
  
        <div class="flex flex-col justify-between">
          <div>
            <p class="font-bold text-lg mb-4">Compétences clées :</p>
  
            <div class="flex flex-wrap gap-2">
              <span v-for="skill in skills.filter(s => s.isKey)" class="border border-black px-1 hover:bg-black/10 hover:cursor-default shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <p>{{ skill.name }}</p>
              </span>
            </div>
          </div>

          <div class="mb-2 flex justify-around">
            <a href="#contact" class="hover:underline mr-2">Me contacter</a>
            <a href="#competences" class="hover:underline">Mes compétences</a>
          </div>
        </div>
      </div>
    </AOSBlock>
  </div>
</template>

<script setup lang="ts">
import type { Skill } from '~/types/skill';
import AOSBlock from './AOSBlock.vue';

const props = defineProps<{
  skills: Skill[]
}>()
</script>