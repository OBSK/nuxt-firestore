import { fireDB } from "../../plugins/firebase";
import _ from 'lodash'

const state = {
    appTitle: 'Sistema de registro de clientes',
    writeSuccessful: false,
    readSuccessful: false,
    text: "",
    clientes: []
}

const mutations = {
    setWriteSuccessful(state, payload) {
        state.writeSuccessful = payload
    },
    setReadToFirestore(state,payload) {
        for(let key in payload) {
            // console.log(key, ">>key")
        }
        // if(state.clientes.length == 0 ) {
        //     state.clientes.push(payload)
        // } else {
        //     state.clientes.find(data => {
        //         if(data.id != payload.id) {
        //             state.clientes.push(payload)
        //         }
        //     })
        // }
    },
    setReadSuccessful(state, payload) {
        state.readSuccessful = payload
    }
}

const actions = {
    async writeToFirestore ({commit}, payload) {
        const ref = fireDB.collection("client")
        const document = {
            text: payload
        }
        try {
            await ref.add(document)
            commit('setWriteSuccessful', true)
        } catch (e) {
            console.log(e, ">>error")
        }
    },
    async readToFirestore ({commit}) {
        const ref = fireDB.collection("client")
        await ref.onSnapshot(res => {
            res.forEach(doc => {
                var source = doc.metadata.hasPendingWrites ? "Local" : "Server";
                // console.log(source, " data: ", doc.data(), doc.id);
                // clientes.push({
                //     id: doc.id,
                //     nombre: doc.data().text
                // })
                const client = {
                    id: doc.id,
                    nombre: doc.data().text
                }
            })
            
            // res.forEach(doc => {
            //     clientes.push({
            //         id: doc.id,
            //         nombre: doc.data().text
            //     })
            // })
        })
        
        commit('setReadSuccessful', true)
    }
}

const getters = {
    getAppTitle(state) {
        return state.appTitle
    },
    getText(state) {
        return state.clientes
    }
}

export default {
    state,
    mutations,
    getters,
    actions
}