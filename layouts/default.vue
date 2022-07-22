<template>
  <v-app light>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      class="flex justify-space-between"
    >
      <div class="d-flex flex-column justify-space-between fill-height">
        <div>
          <v-list-group
            v-for="(item, index) in items"
            :key="index"
            :value="false"
            prepend-icon="mdi-account-circle"
          >
            <template v-slot:activator>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </template>

            <v-list-item
              v-for="deepItem in item.list"
              link
              :key="deepItem.title"
              :to="deepItem.to"
              router
            >
              <v-list-item-title v-text="deepItem.title"></v-list-item-title>
            </v-list-item>
          </v-list-group>
        </div>

        <v-list>
          <v-list-item>
            <v-switch
              @change="switchTheme"
              v-model="theme"
              hint=""
              inset
              label="Тёмный режим"
              persistent-hint
            ></v-switch>
          </v-list-item>
        </v-list>
      </div>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title class="main-title" v-html="title" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-email</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" width="320" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Уведомления</v-list-item-title>
        </v-list-item>
      </v-list>
      <v-list>
        <v-card>
          <v-card-title>asdf</v-card-title>
        </v-card>
      </v-list>
      <v-list>
        <v-card>
          <v-card-title>asdf</v-card-title>
        </v-card>
      </v-list>
      <v-list>
        <v-card>
          <v-card-title>asdf</v-card-title>
        </v-card>
      </v-list>
      <v-list>
        <v-card>
          <v-card-title>asdf</v-card-title>
        </v-card>
      </v-list><v-list>
      <v-card>
        <v-card-title>asdf</v-card-title>
      </v-card>
    </v-list>
      <v-list>
        <v-card>
          <v-card-title>asdf</v-card-title>
        </v-card>
      </v-list><v-list>
      <v-card>
        <v-card-title>asdf</v-card-title>
      </v-card>
    </v-list>
      <v-list>
        <v-card>
          <v-card-title>asdf</v-card-title>
        </v-card>
      </v-list><v-list>
      <v-card>
        <v-card-title>asdf</v-card-title>
      </v-card>
    </v-list>
      <v-list>
        <v-card>
          <v-card-title>asdf</v-card-title>
        </v-card>
      </v-list><v-list>
      <v-card>
        <v-card-title>asdf</v-card-title>
      </v-card>
    </v-list>
      <v-list>
        <v-card>
          <v-card-title>asdf</v-card-title>
        </v-card>
      </v-list><v-list>
      <v-card>
        <v-card-title>asdf</v-card-title>
      </v-card>
    </v-list>
      <v-list>
        <v-card>
          <v-card-title>asdf</v-card-title>
        </v-card>
      </v-list><v-list>
      <v-card>
        <v-card-title>asdf</v-card-title>
      </v-card>
    </v-list>
      <v-list>
        <v-card>
          <v-card-title>asdf</v-card-title>
        </v-card>
      </v-list><v-list>
      <v-card>
        <v-card-title>asdf</v-card-title>
      </v-card>
    </v-list>
      <v-list>
        <v-card>
          <v-card-title>asdf</v-card-title>
        </v-card>
      </v-list>
    </v-navigation-drawer>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  middleware: ['default'],
  data: () => ({
    clipped: false,
    drawer: false,
    fixed: false,
    theme: false,
    items: [
      {
        icon: 'mdi-apps',
        title: 'Физические лица',
        list: [
          {
            title: 'Все заявки',
            to: '/',
          },
          {
            title: 'Детализация',
            to: '/',
          },
        ],
      },
      {
        icon: 'mdi-chart-bubble',
        title: 'Резерв',
        list: [
          {
            title: 'Общий список',
            to: '/',
          },
          {
            title: 'КЦ',
            to: '/',
          },
          {
            title: 'ОП',
            to: '/',
          },
          {
            title: 'РП',
            to: '/',
          },
        ],
      },
      {
        icon: 'mdi-chart-bubble',
        title: 'Резерв адреса',
        list: [
          {
            title: 'Отчеты',
            to: '/',
          },
        ],
      },
      {
        icon: 'mdi-chart-bubble',
        title: 'Отчеты',
        list: [
          {
            title: 'Отчеты',
            to: '/',
          },
        ],
      },
    ],
    miniVariant: false,
    right: true,
    rightDrawer: false,
    title: `<span>NLS</span>Поддержка`,
  }),
  methods: {
    switchTheme(e) {
      console.log(e)
      this.$vuetify.theme.dark = e
      this.$cookies.set('theme', !!e)
    },
  },
  created() {
    this.theme = !!JSON.parse(this.$cookies.get('theme') || false)
    this.$vuetify.theme.dark = JSON.parse(this.$cookies.get('theme') || false)
  },
}
</script>

<style lang="scss">
.main-title {
  color: #9ca3af;
  span {
    color: white;
    font-weight: bold;
  }
}
</style>
