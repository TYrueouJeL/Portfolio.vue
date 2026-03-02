<template>
  <div id="veille" class="mx-80 flex items-center justify-center min-h-screen">
    <AOSBlock type="fade-up" :duration="750" :delay="0">
      <div class="border border-black p-2 w-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <p class="font-bold text-xl">Ma veille technologique :</p>

        <div class="mt-6 gap-2">
          <div v-for="media in medias" class="border border-black p-1 grid grid-cols-2 my-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p class="font-bold mb-2 col-span-2">{{ media.name }}</p>

            <template v-for="veille in media.veilles" :key="veille.name">
              <a :href="veille.link" target="_blank" rel="noopener noreferrer"
                v-if="veille.link"
                class="border border-black p-1 grid grid-cols-2 hover:bg-black/10 hover:cursor-pointer m-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <p>{{ veille.name }}</p>
              </a>
              <div v-else class="border border-black p-1 grid grid-cols-2 m-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <p>{{ veille.name }}</p>
              </div>
            </template>
          </div>
        </div>
      </div>
    </AOSBlock>
  </div>
</template>

<script setup lang="ts">
import type { Media } from '~/types/media';

const props = defineProps<{
  medias: Media[]
}>()
</script>