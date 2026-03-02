<template>
  <div id="competences" class="mx-80 flex items-center justify-center min-h-screen">
    <AOSBlock type="fade-up" :duration="750" :delay="0">
      <div class="border border-black p-2 w-full grid shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <p class="font-bold text-xl">Compétences :</p>

        <p>Langages, frameworks et outils avec lesquels j’ai déjà travaillé.</p>

        <div class="grid grid-cols-3 te mt-6 gap-2">
          <div v-for="skillType in skillTypes" class="border border-black p-1 h-min shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p class="font-bold mb-2">{{ skillType.name }} :</p>

            <div class="grid grid-cols-2">
              <div v-for="skill in skillType.skills" class="border border-black p-1 hover:bg-black/10 h-min m-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <p>{{ skill.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AOSBlock>
  </div>
</template>

<script setup lang="ts">
import AOSBlock from './AOSBlock.vue';
import type { SkillType } from '~/types/skillType';

const props = defineProps<{
  skillTypes: SkillType[]
}>()
</script>