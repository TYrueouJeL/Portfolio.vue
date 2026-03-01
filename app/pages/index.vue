<template>
    <div>
        <Hero :skills="skills"/>
        <Skills :skills="skills" />
        <Experiences :experiences="experiences"/>
        <Projects :projects="projects" />
    </div>
</template>

<script setup lang="ts">
import Experiences from '~/components/Experiences.vue';
import Projects from '~/components/Projects.vue';
import Skills from '~/components/Skills.vue';
import { useScrollNavigation } from '~/composable/useScrollNavigation';
import type { Experience } from '~/types/experience';
import type { Project } from '~/types/project';
import type { Skill } from '~/types/skill';

const skills: Skill[] = [
    { name: "Nuxt", isKey: true },
    { name: "AdonisJS", isKey: true },
    { name: "Symfony", isKey: false },
    { name: "TailwindCSS", isKey: true },
]

const experiences: Experience[] = [
    { name: "Relais Petite Enfance", date: "Avril/Mai 2024", description: "Analyse du site existant, analyse des besoins, propositions de solutions et création d'un nouveau site vitrine avec WordPress. Rédaction d'une documentation utilisateur pour la prise en main et la maintenance du site." },
    { name: "Ets KIRSCH", date: "Janvier/Fevrier 2025", description: "Création de multiples prototypes fonctionnels d'une application mobile avec .NET MAUI afin d'une future étude comparative des technologies de développement mobile." }
]

const projects: Project[] = [
    { name: "TaskManager", competences: [skills[0], skills[1], skills[3]] as Skill[], description: 'Un site web de gestion de tâches et de projets' }
]

useScrollNavigation()

useHead(() => ({
    title: 'Rémi Guerin'
}))
</script>