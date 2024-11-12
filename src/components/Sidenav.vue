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
</script>

<template>
    <div
        class="fixed left-0 top-0 z-50 flex h-screen flex-col bg-slate-50 dark:bg-zinc-900"
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
                                value: 'Home',
                                pt: tooltipPassThrough,
                            }"
                            as="router-link"
                            icon="pi pi-home"
                            rounded
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
                            icon="pi pi-moon"
                            severity="secondary"
                            rounded
                            aria-label="Moon"
                            @click="toggleDarkMode" />
                    </li>
                    <li>
                        <Button
                            as="router-link"
                            icon="pi pi-user"
                            severity="secondary"
                            rounded
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
        background-color: var(--n-primary-600);
        color: var(--n-surface-0);
    }
</style>
