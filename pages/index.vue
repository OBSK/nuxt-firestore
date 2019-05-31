<template>
  <v-container fluid>
    <v-card>
      <v-card-title>Agregar un cliente</v-card-title>
      <v-card-text>
        <v-container
        grid-list-md
        >
        <v-layout wrap>
          <v-flex xs12 sm6 md6>
            <v-flex>
              <v-text-field label="Ingresa el nombre" v-model="nombre"></v-text-field>
            </v-flex>
            <v-flex>
              <v-btn color="success" @click="writeToFirestore" :disabled="writeSuccessful">Registrar</v-btn>
            </v-flex>
          </v-flex>
          <v-flex xs12 sm6 md6>
            <v-list>
              <v-list-tile v-for="item in text" :key='text.id' avatar>
                <v-list-tile-content v-text="item.nombre"></v-list-tile-content>
                <v-btn>Eliminar</v-btn>
              </v-list-tile>
            </v-list>
          </v-flex>
        </v-layout>
        </v-container>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import { fireDB } from '@/plugins/firebase.js'
import { mapActions, mapMutations, mapGetters } from 'vuex'

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
  mounted() {
    this.setReadToFirestore()
  },
  computed: {
    ...mapGetters({
      appTitle: 'modules/client/getAppTitle',
      text: 'modules/client/getText'
    }),
    writeSuccessful() {
      return this.$store.state.modules.client.writeSuccessful
    }
  },
  methods: {
    writeToFirestore() {
      this.setWriteToFirestore(this.nombre)
    },
    ...mapActions({
      setWriteToFirestore: 'modules/client/writeToFirestore',
      setReadToFirestore: 'modules/client/readToFirestore'
    })
  }
}
</script>
