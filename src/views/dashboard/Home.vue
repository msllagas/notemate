<script setup lang="ts">
    import { ref } from "vue";
    import Card from "primevue/card";
    import Button from "primevue/button";

    const cardDT = ref({
        colorScheme: {
            light: {
                root: {
                    color: "{gray.800}",
                    background: "{gray.50}",
                },
            },
            dark: {
                root: {
                    color: "{gray.200}",
                    background: "{gray.800}",
                },
            },
        },
    });
</script>
<template>
    <div class="pl-4">
        <h1 class="text-2xl font-bold">Good Day, User</h1>
        <div class="mt-4">
            <h2 class="text-lg font-medium">All Notes</h2>
            <div
                class="mt-4 flex flex-wrap items-stretch justify-start gap-4 pl-2">
                <Card
                    class="card w-[20rem] overflow-hidden"
                    :dt="cardDT">
                    <template #title>
                        <div class="flex w-full items-center justify-between">
                            <h1 class="text-lg font-semibold">
                                Welcome to NoteMate!
                            </h1>
                            <div class="self-baseline">
                                <Button
                                    icon="pi pi-bookmark"
                                    variant="text"
                                    rounded
                                    aria-label="Bookmark" />
                            </div>
                        </div>
                    </template>
                    <template #subtitle>
                        <span>#welcome</span>
                    </template>
                    <template #content>
                        <div>
                            <div class="card-content">
                                <p
                                    class="m-0 text-sm leading-relaxed tracking-wide">
                                    Hello and welcome to NoteMate, your go-to
                                    tool for organizing your thoughts, tasks,
                                    and ideas all in one place!
                                </p>
                            </div>
                        </div>
                    </template>
                    <template #footer>
                        <div class="flex items-center justify-between">
                            <ul class="flex">
                                <li>
                                    <Button
                                        icon="pi pi-pencil"
                                        variant="text"
                                        rounded
                                        aria-label="Bookmark" />
                                </li>
                                <li>
                                    <Button
                                        icon="pi pi-folder"
                                        variant="text"
                                        rounded
                                        aria-label="Bookmark" />
                                </li>
                                <li>
                                    <Button
                                        icon="pi pi-trash"
                                        variant="text"
                                        severity="danger"
                                        rounded
                                        aria-label="Bookmark" />
                                </li>
                            </ul>
                            <p class="text-sm">Just Now</p>
                        </div>
                    </template>
                </Card>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .card :deep(.card-content) {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .card :deep(.p-card-body) {
        height: 100%;
    }

    .card :deep(.p-card-footer) {
        margin-top: auto;
    }
</style>
