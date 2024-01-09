import { defineStore } from 'pinia'
import axios from 'axios'

export const useUsers = defineStore('users', {
    state: () => ({
        usersList: [] as User[]
    }),

    actions: {
        async getUsers () {
            try {
                if (this.usersList.length === 0) {
                    const { data } = await axios.get(`https://reqres.in/api/users`)
                    this.usersList = [...data.data]
                }

                return this.usersList
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
        },

        async updateUser (user: User) {
            try {
                const { data } = await axios.put(`https://reqres.in/api/users/${user.id}`, user)

                const idx = this.usersList.findIndex(u => u.id === user.id)
                this.usersList[idx] = data
            } catch (e) {
                throw e
            }
        },


        async deleteUser (id: number) {
            const { data } = await axios.delete(`https://reqres.in/api/users/${id}`)

            console.log(data);
        }
    },

    getters: {
        getUsersList: s => s.usersList
    }
})