<script setup lang="ts">
    import Sidenav from "../components/Sidenav.vue";
    import Button from "primevue/button";
    import { Ref, ref } from "vue";

    const isSideBarOpen: Ref<boolean> = ref(false);
    function toggleSideBar(): void {
        isSideBarOpen.value = !isSideBarOpen.value;
    }

    const burgerMenuDT = ref({
        paddingX: "0",
        paddingY: ".25rem",
        colorScheme: {
            light: {
                root: {
                    primary: {
                        color: "{primary.500}",
                        background: "none",
                        borderColor: "transparent",
                    },
                },
            },
            dark: {
                root: {
                    primary: {
                        color: "#ffffff",
                        background: "none",
                        hoverBackground: "{primary.500}",
                        hoverColor: "#ffffff",
                        borderColor: "transparent",
                        hoverBorderColor: "{primary.500}",
                        activeBackground: "{primary.600}",
                        activeColor: "#ffffff",
                        activeBorderColor: "transparent",
                    },
                },
            },
        },
    });
</script>

<template>
    <div class="flex">
        <Transition name="slide">
            <sidenav v-if="isSideBarOpen" />
        </Transition>
        <div
            :class="['p-4', { 'sidebar-open': isSideBarOpen }]"
            class="transition-margin flex-1">
            <nav class="mb-4">
                <Button
                    icon="pi pi-bars"
                    severity="primary"
                    aria-label="Menu"
                    rounded
                    :dt="burgerMenuDT"
                    @click.native="toggleSideBar" />
            </nav>
            <main class="relative flex-1">
                <router-view />
            </main>
        </div>
    </div>
</template>

<style scoped>
    .slide-enter-active,
    .slide-leave-active {
        transition:
            transform 0.3s ease,
            opacity 0.3s ease;
    }

    .slide-enter-from {
        transform: translateX(-100%);
        opacity: 0;
    }

    .slide-leave-to {
        transform: translateX(-100%);
        opacity: 0;
    }
    .transition-margin {
        transition: margin-left 0.3s ease-out;
    }

    .sidebar-open {
        margin-left: 74px;
    }
</style>
