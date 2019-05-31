import { fireDB } from "../../plugins/firebase";

const state = {
    appTitle: 'Hola mundo'
}
const mutations = {}
const actions = {
    async writeToFirestore ({commit}, payload) {
        const ref = fireDB.collection("client").doc("client")
        const document = {
            text: payload
        }
        try {
            await ref.set(document)
            console.log("Cliente registrado")
        } catch (e) {
            console.log(e, ">>error")
        }
    }
}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}