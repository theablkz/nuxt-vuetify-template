<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <p>hello world</p>
    </v-col>
  </v-row>
</template>

<script>
import { GetClients } from '~/service/clients'

export default {
  name: 'IndexPage',
  created() {
    console.log('hello world', process.env.BASE_URL)
  },
  mounted() {
    // GetClients().catch((e) => {
    //   this.$toast.open({
    //     message: 'Something went wrong!',
    //     type: 'error',
    //   })
    // })
  },
}
</script>
