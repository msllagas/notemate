import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuth = defineStore("auth", () => {
    const hasAuthenticatedUser = ref(false);
    return {
        hasAuthenticatedUser,
    };
});
