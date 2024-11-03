<script setup lang="ts">
    import Button from "primevue/button";

    // Not final
    function toggleDarkMode() {
        document.documentElement.classList.toggle("dark");
    }
</script>

<template>
    <div
        class="fixed top-0 z-50 w-full border-b border-slate-200 backdrop-blur dark:border-slate-700">
        <nav class="flex items-center justify-between p-2 md:px-16">
            <div class="">
                <a href="/">
                    <img
                        src="../assets/notemate-logo.png"
                        alt="NoteMate Logo"
                        class="w-40" />
                </a>
            </div>
            <ul class="flex items-center justify-between gap-2">
                <li>
                    <Button
                        as="a"
                        href="https://github.com/msllagas/notemate"
                        target="_blank"
                        rel="noopener"
                        icon="pi pi-github"
                        severity="secondary"
                        rounded
                        variant="outlined"
                        aria-label="GitHub" />
                </li>
                <li>
                    <Button
                        icon="pi pi-moon"
                        severity="secondary"
                        rounded
                        variant="outlined"
                        aria-label="Moon"
                        @click="toggleDarkMode" />
                </li>
            </ul>
        </nav>
    </div>
</template>

<style scoped></style>
