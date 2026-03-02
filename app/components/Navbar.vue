<script setup lang="ts">
import AOSBlock from './AOSBlock.vue';
</script>

<template>
  <header class="flex justify-between mx-80">
    <div class="flex justify-between w-full py-6">
      <AOSBlock type="fade-down" :duration="750" :delay="0" class="flex text-xl font-bold">
        <p>Rémi Guerin</p>
      </AOSBlock>
  
      <div class="flex gap-4">
        <AOSBlock type="fade-down" :duration="750" :delay="250">
          <a href="#accueil" class="hover:underline ">Accueil</a>
        </AOSBlock>
  
        <AOSBlock type="fade-down" :duration="750" :delay="500">
          <a href="#competences" class="hover:underline ">Compétences</a>
        </AOSBlock>
  
        <AOSBlock type="fade-down" :duration="750" :delay="750">
          <a href="#experiences" class="hover:underline">Expériences</a>
        </AOSBlock>
  
        <AOSBlock type="fade-down" :duration="750" :delay="1000">
          <a href="#projets" class="hover:underline">Projets</a>
        </AOSBlock>

        <AOSBlock type="fade-down" :duration="750" :delay="1250">
          <a href="#veille" class="hover:underline">Veille</a>
        </AOSBlock>
  
        <AOSBlock type="fade-down" :duration="750" :delay="1500">
          <a href="#contact" class="hover:underline">Contact</a>
        </AOSBlock>
      </div>
    </div>
  </header>
</template>