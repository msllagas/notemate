<script setup lang="ts">
    import Navbar from "../components/Navbar.vue";
    import Button from "primevue/button";
</script>

<template>
    <navbar />
    <div>
        <section
            class="relative overflow-hidden pb-20 pt-48 lg:pt-48 xl:pb-28 xl:pt-48">
            <div class="relative mx-auto max-w-screen-xl px-5">
                <div class="relative">
                    <h1
                        class="mx-auto max-w-3xl text-center text-5xl font-bold md:text-6xl lg:text-7xl">
                        The Essential Tool
                        <br class="hidden lg:inline" />
                        <span class="text-blue-500"> for Organized Minds </span>
                    </h1>
                    <p
                        class="text-md mx-auto mt-6 max-w-xl text-center leading-relaxed text-gray-700 md:mt-8 md:text-lg lg:mt-10 dark:text-gray-300">
                        A reliable, intuitive app for capturing ideas and
                        staying organized. Designed to help you focus on what
                        matters, NoteMate brings simplicity and power to your
                        note-taking experience.
                    </p>
                    <div
                        class="mx-auto mt-6 flex max-w-sm flex-col items-center justify-center gap-4 sm:flex-row md:mt-8 lg:mt-10">
                        <Button
                            as="router-link"
                            label="Get Started"
                            to="/" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped></style>
