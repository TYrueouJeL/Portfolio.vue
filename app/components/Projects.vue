<template>
  <div id="projets" class="mx-80 flex items-center justify-center min-h-screen">
    <AOSBlock type="fade-up" :duration="750" :delay="0">
      <div class="border border-black p-2 w-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <p class="font-bold text-xl">Projets :</p>

        <div class="mt-6 gap-2">
          <div v-for="project in projects" class="border border-black p-1 grid grid-cols-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p class="font-bold mb-2 col-span-2">{{ project.name }}</p>

            <p class="col-span-2">{{ project.description }}</p>

            <div v-for="competence in project.competences">
              <p class="border border-black p-1 hover:bg-black/10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] m-1">{{ competence.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </AOSBlock>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '~/types/project';

const props = defineProps<{
  projects: Project[]
}>()
</script>