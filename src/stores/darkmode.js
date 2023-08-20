import { defineStore } from 'pinia'

export default defineStore('darkmode', {
    state: () => ({
        dark: true,
    }),
});