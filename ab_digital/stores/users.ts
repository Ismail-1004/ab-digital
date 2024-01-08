import { defineStore } from 'pinia'
import axios from 'axios'

export const useUsers = defineStore('users', {
    state: () => ({
        usersList: [] as User[]
    }),

    actions: {
        async getUsers () {
            try {
                const { data } = await axios.get(`https://reqres.in/api/users`)
                this.usersList = [...data.data]
            } catch (e) {
                throw e
            }
        },

        async getSingleUser (id: string) {
            try {
                const { data } = await axios.get(`https://reqres.in/api/users/${id}`)
                return data
            } catch (e) {
                throw e
            }
        }
    },

    getters: {
        getUsersList: s => s.usersList
    }
})