import { defineStore } from 'pinia'

export default defineStore('user', {
    state: () => ({
        loggedIn: false,
    }),
});