<template>
  <v-container fluid>
    <v-card>
      <v-card-title>Agregar un cliente {{ appTitle }}</v-card-title>
      <v-card-text>
        <v-container
        grid-list-md
        >
        <v-flex xs12 sm6 md6>
          <v-layout wrap>
            <v-flex>
              <v-text-field label="Ingresa el nombre" v-model="nombre"></v-text-field>
            </v-flex>
            <v-flex>
              <v-btn color="success" @click="writeToFirestore" :disabled="writeSuccessful">Registrar</v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
        </v-container>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import { fireDB } from '@/plugins/firebase.js'
import { mapActions, mapMutations } from 'vuex'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data () {
    return {
      nombre: ''
    }
  },
  computed: {
    appTitle() {
      return this.$store.state.modules.client.appTitle
    },
    writeSuccessful() {
      return this.$store.state.modules.client.writeSuccessful
    }
  },
  methods: {
    writeToFirestore() {
      this.setWriteToFirestore(this.nombre)
    },
    ...mapActions({
      setWriteToFirestore: 'modules/client/writeToFirestore'
    })
  }
}
</script>
