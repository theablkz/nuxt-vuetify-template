<template>
  <v-app class="">
    <v-container  class="lighten-5 fill-height">
      <v-row
        class="mb-6"
        justify="center"
        no-gutters
      >
        <v-col md="6">
          <v-card
            class="pa-2"
          >
            <v-card-title class="justify-center">Авторизация</v-card-title>
            <v-form
              @submit.prevent="validate"
              ref="form"
              lazy-validation
            >
              <v-text-field
                v-model="login"
                :rules="loginRules"
                label="Login"
                required
              ></v-text-field>

              <v-text-field
                v-model="password"
                :rules="passwordRules"
                label="Password"
                required
                class="mb-16"
              ></v-text-field>

              <v-row>
                <v-col
                  class="flex justify-space-between">
                  <v-btn
                    color="success"
                    type="submit"
                  >
                    Войти
                  </v-btn>

                  <v-btn
                    color="error"
                    @click="reset"
                  >
                    Стереть
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card>
        </v-col>

      </v-row>

    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "sign-up",
  layout: 'auth',
  data: () => ({
    valid: false,
    login: '',
    loginRules: [
      v => !!v || 'Введите логин',
    ],
    password: '',
    passwordRules: [
      v => !!v || 'Введите пароль',
    ],
  }),

  methods: {
    validate () {
      this.$refs.form.validate()
      console.log('submit')
    },
    reset () {
      this.$refs.form.reset()
    },
  },

}
</script>

<style scoped>

</style>
