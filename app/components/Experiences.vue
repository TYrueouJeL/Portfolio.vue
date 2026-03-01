<template>
  <div id="experiences" class="mx-80 flex items-center justify-center min-h-screen">
    <AOSBlock type="fade-up" :duration="750" :delay="0">
      <div class="border border-black p-2 w-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <p class="font-bold text-xl">Expériences :</p>

        <div class="grid mt-6 gap-2">
          <div v-for="experience in experiences" class="border border-black p-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p class="font-bold mb-2">{{ experience.name }}</p>

            <p>{{ experience.description }}</p>
          </div>
        </div>
      </div>
    </AOSBlock>
  </div>
</template>

<script setup lang="ts">
import type { Experience } from '~/types/experience';

const props = defineProps<{
  experiences: Experience[]
}>()
</script>