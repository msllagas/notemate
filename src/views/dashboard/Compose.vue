<script setup lang="ts">
    import { ref } from "vue";
    import InputText from "primevue/inputtext";
    import MultiSelect from "primevue/multiselect";
    import Card from "primevue/card";

    const title = ref<string>("");
    const selectedTags = ref<[]>([]);
    const content = ref<null | string>(null);

    const inputDT = ref({
        colorScheme: {
            dark: {
                background: "transparent",
                color: "{gray.100}",
                BorderColor: "#303035",
                hoverBorderColor: "{gray.700}",
                focusBorderColor: "{primary.500}",
                placeholderColor: "{gray.500}",
            },
            light: {
                BorderColor: "#303035",
            },
        },
    });

    // TODO -> Dummy Data. Delete once there are actual tags
    const tags = ref([
        { name: "#reminder", id: 1 },
        { name: "#work", id: 2 },
        { name: "#personal", id: 3 },
        { name: "#school", id: 4 },
        { name: "#business", id: 5 },
    ]);
</script>

<template>
    <Card class="m-auto md:w-3/5">
        <template #content>
            <div class="editor space-y-2">
                <InputText
                    type="text"
                    size="large"
                    placeholder="Enter title here.."
                    v-model="title"
                    :dt="inputDT"
                    fluid />
                <MultiSelect
                    v-model="selectedTags"
                    :options="tags"
                    optionLabel="name"
                    :maxSelectedLabels="4"
                    :selectionLimit="4"
                    filter
                    :dt="inputDT"
                    class="w-full md:w-80"
                    size="small"
                    placeholder="Select 4 tags" />
                <QuillEditor
                    theme="snow"
                    toolbar="essential"
                    v-model:content="content"
                    content-type="delta" />
            </div>
        </template>
    </Card>
</template>

<style scoped>
    /* Default border */
    .editor :deep(.p-inputtext) {
        transition: none;
    }
    .editor :deep(.p-multiselect) {
        transition: none;
    }
    .editor :deep(.ql-toolbar.ql-snow) {
        border-color: transparent;
        color: white;
    }

    .editor :deep(.ql-container.ql-snow) {
        color: #f5f5f5;
        border: 1px solid #303035;
        border-radius: var(--n-inputtext-border-radius);
    }
    .editor :deep(.ql-container.ql-snow:focus-within) {
        border: 1px solid var(--n-primary-500);
    }
    .editor :deep(.ql-editor.ql-blank),
    .editor :deep(.ql-container.ql-snow) {
        min-height: 20rem;
    }
</style>
