<template>
    <div>
        <Hero/>
        <Skills :skillTypes="skillTypes" />
        <Experiences :experiences="experiences"/>
        <Projects :projects="projects" />
        <Veilles :medias="medias"/>
    </div>
</template>

<script setup lang="ts">
import Experiences from '~/components/Experiences.vue';
import Projects from '~/components/Projects.vue';
import Skills from '~/components/Skills.vue';
import Veilles from '~/components/Veilles.vue';
import { useScrollNavigation } from '~/composable/useScrollNavigation';
import type { Experience } from '~/types/experience';
import type { Media } from '~/types/media';
import type { Project } from '~/types/project';
import type { Skill } from '~/types/skill';
import type { SkillType } from '~/types/skillType';
import type { Veille } from '~/types/veille';

const skillsLanguage: Skill[] = [
    { name: "Javascript", isKey: true },
    { name: "PHP", isKey: true },
    { name: "TailwindCSS", isKey: true },
    { name: "SQL", isKey: true },
    { name: "C#", isKey: true },
]

const skillsFramworks: Skill[] = [
    { name: "React", isKey: true },
    { name: "Vue", isKey: true },
    { name: "Nuxt", isKey: true },
    { name: "AdonisJS", isKey: true },
    { name: "Unity", isKey: true },
    { name: "Symfony", isKey: true },
]

const skillsTools: Skill[] = [
    { name: "Docker", isKey: true },
    { name: "Git", isKey: true },
    { name: "Linear", isKey: true },
]

const skillTypes: SkillType[] = [
    { name: "Languages", skills: skillsLanguage },
    { name: "Libraires et frameworks", skills: skillsFramworks },
    { name: "Outils", skills: skillsTools },
]

const experiences: Experience[] = [
    { name: "Relais Petite Enfance", date: "Avril/Mai 2024", description: "Analyse du site existant, analyse des besoins, propositions de solutions et création d'un nouveau site vitrine avec WordPress. Rédaction d'une documentation utilisateur pour la prise en main et la maintenance du site." },
    { name: "Ets KIRSCH", date: "Janvier/Fevrier 2025", description: "Création de multiples prototypes fonctionnels d'une application mobile avec .NET MAUI afin d'une future étude comparative des technologies de développement mobile." }
]

const projects: Project[] = [
    { name: "TaskManager", competences: [skillsLanguage[0], skillsLanguage[1], skillsLanguage[3]] as Skill[], description: 'Un site web de gestion de tâches et de projets' }
]

const veillesTwitter: Veille[] = [
    { name: 'Camille Roux', link: 'https://x.com/CamilleRoux' },
    { name: 'Romain Lanz', link: 'https://x.com/romainlanz' },
    { name: 'Claude', link: 'https://x.com/claudeai' },
    { name: 'Vue', link: 'https://x.com/vuejs' },
    { name: 'Nuxt', link: 'https://x.com/nuxt_js' },
    { name: 'AdonisJS', link: 'https://x.com/adonisframework' },
]

const veillesYoutube: Veille[] = [
    { name: 'Benjamin Code', link: 'https://www.youtube.com/@BenjaminCode' },
    { name: 'Coding with lewis', link: 'https://www.youtube.com/@CodingWithLewis' },
    { name: 'cocadmin', link: 'https://www.youtube.com/@cocadmin' },
    { name: 'Underscore', link: 'https://www.youtube.com/@Underscore_' },
]

const medias: Media[] = [
    { name: 'Youtube', veilles: veillesYoutube },
    { name: 'Twitter', veilles: veillesTwitter },
]

useScrollNavigation()

useHead(() => ({
    title: 'Rémi Guerin'
}))
</script>