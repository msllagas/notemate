<script setup lang="ts">
    import ScrollPanel from "primevue/scrollpanel";
    import Button from "primevue/button";
    import { ref } from "vue";

    const tooltipPassThrough = ref({
        text: "!text-sm",
    });

    function toggleDarkMode() {
        document.documentElement.classList.toggle("dark");
    }

    const buttonDT = ref({
        colorScheme: {
            light: {
                root: {
                    secondary: {
                        color: "#ffffff",
                        background: "{primary.500}",
                        borderColor: "transparent",
                        hoverBackground: "{primary.600}",
                        hoverColor: "#ffffff",
                    },
                },
            },
            dark: {
                root: {
                    secondary: {
                        color: "#ffffff",
                        background: "{primary.500}",
                        hoverBackground: "{primary.400}",
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

    const navLinks = ref({
        colorScheme: {
            light: {
                root: {
                    secondary: {
                        color: "{gray.800}",
                        background: "{gray.200}",
                        hoverBackground: "{gray.300}",
                    },
                },
            },
            dark: {
                root: {
                    secondary: {
                        color: "{gray.200}",
                        background: "{gray.800}",
                        hoverBackground: "{gray.700}",
                    },
                },
            },
        },
    });
</script>

<template>
    <div
        class="fixed left-0 top-0 z-50 flex h-screen flex-col bg-gray-100 dark:bg-gray-900"
        v-bind="$attrs">
        <div class="flex-none">
            <div class="px-2 pt-4 text-center">
                <router-link :to="{ name: 'Welcome' }">
                    <img
                        src="../assets/notemate-logo-1.png"
                        alt="NoteMate Logo"
                        class="m-auto w-14" />
                </router-link>
            </div>
        </div>
        <ScrollPanel class="grow overflow-y-auto">
            <div>
                <ul
                    class="text- m-0 flex list-none flex-col items-center gap-5 overflow-hidden p-2">
                    <li>
                        <Button
                            v-tooltip.right="{
                                value: 'New Note',
                                pt: tooltipPassThrough,
                            }"
                            as="router-link"
                            icon="pi pi-pen-to-square"
                            rounded
                            severity="secondary"
                            :dt="buttonDT"
                            :to="{ name: 'DashboardCompose' }" />
                    </li>
                    <li>
                        <Button
                            v-tooltip.right="{
                                value: 'Home',
                                pt: tooltipPassThrough,
                            }"
                            as="router-link"
                            icon="pi pi-home"
                            rounded
                            :dt="navLinks"
                            severity="secondary"
                            :to="{ name: 'DashboardHome' }" />
                    </li>
                    <li>
                        <Button
                            v-tooltip.right="{
                                value: 'Bookmarks',
                                pt: tooltipPassThrough,
                            }"
                            as="router-link"
                            icon="pi pi-bookmark"
                            severity="secondary"
                            rounded
                            :dt="navLinks"
                            :to="{ name: 'DashboardBookmark' }" />
                    </li>
                    <li>
                        <Button
                            v-tooltip.right="{
                                value: 'Archives',
                                pt: tooltipPassThrough,
                            }"
                            as="router-link"
                            icon="pi pi-folder"
                            severity="secondary"
                            rounded
                            :dt="navLinks"
                            :to="{ name: 'DashboardArchive' }" />
                    </li>
                    <li>
                        <Button
                            v-tooltip.right="{
                                value: 'Trash',
                                pt: tooltipPassThrough,
                            }"
                            as="router-link"
                            icon="pi pi-trash"
                            severity="secondary"
                            rounded
                            :dt="navLinks"
                            :to="{ name: 'DashboardTrash' }" />
                    </li>
                </ul>
            </div>
        </ScrollPanel>
        <div class="flex-none">
            <hr
                class="m-4 border-0 border-t border-surface-200 dark:border-surface-700" />
            <div class="">
                <ul
                    class="m-0 flex list-none flex-col items-center gap-5 overflow-hidden p-2 pb-4">
                    <li>
                        <Button
                            v-tooltip.right="{
                                value: 'Toggle Theme',
                                pt: tooltipPassThrough,
                            }"
                            icon="pi pi-moon"
                            severity="secondary"
                            rounded
                            aria-label="Moon"
                            :dt="navLinks"
                            @click="toggleDarkMode" />
                    </li>
                    <li>
                        <Button
                            v-tooltip.right="{
                                value: 'Profile',
                                pt: tooltipPassThrough,
                            }"
                            as="router-link"
                            icon="pi pi-user"
                            severity="secondary"
                            rounded
                            :dt="navLinks"
                            :to="{ name: 'DashboardUserProfile' }" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
    li a.router-link-active {
        background-color: var(--n-primary-500);
        color: var(--n-surface-0);
    }
    li a.router-link-active:hover {
        background-color: var(--n-primary-400);
        color: var(--n-surface-0);
    }
</style>
