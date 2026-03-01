<template>
    <div
        class="w-full"
        :data-aos="type"
        :data-aos-duration="duration"
        :data-aos-delay="delay"
    >
        <slot />
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const props = defineProps({
    type: {
        type: String,
    },
    duration: {
        type: Number,
    },
    delay: {
        type: Number,
    }
})

onMounted(() => {
    AOS.init({ once: true })
    AOS.refresh()
})
</script>