<template>
  <q-layout view="lHr lpR fFf">

    <q-header bordered class="bg-white text-primary">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title  class="text-weight-bold">
         <span class="gt-sm"> {{$route.name}}</span>
         <q-icon class="q-pa-md lt-md header-icon" name="fas fa-dove" size="sm" color="primary"/>
        </q-toolbar-title>
       </q-toolbar>
    </q-header>
    <q-drawer :width="250" show-if-above v-model="left" side="left" bordered>
      <q-icon name="fas fa-dove" size="lg" color="primary" class="q-pa-md"/>
       <q-list >
      <q-item to="/" clickable exact v-ripple>
        <q-item-section avatar >
          <q-icon   name="home" size="md" />
        </q-item-section>

        <q-item-section class="text-h6 text-weight-bold">Home</q-item-section>
      </q-item>
       <q-item to="/about"  exact clickable v-ripple>
        <q-item-section avatar >
          <q-icon  name="help" size="md" />
        </q-item-section>

        <q-item-section class="text-h6 text-weight-bold">About</q-item-section>
      </q-item>

    </q-list>
    </q-drawer>

    <q-drawer show-if-above v-model="right" side="right" bordered>
       <q-input placeholder="Search Dina-Twitter" class="q-ma-md" outlined rounded dense>
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
        <q-list separator  padding>
        <q-item>
          <q-item-section class="q-pa-md">
            <q-item-label class="text-gray" overline>Education</q-item-label>
            <q-item-label class="text-weight-bold">Something amazing happened</q-item-label>
            <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section class="q-pa-md">
            <q-item-label class="text-gray" overline>Education</q-item-label>
            <q-item-label class="text-weight-bold">Something amazing happened</q-item-label>
            <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section class="q-pa-md">
            <q-item-label class="text-gray" overline>Education</q-item-label>
            <q-item-label class="text-weight-bold">Something amazing happened</q-item-label>
            <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section class="q-pa-md">
            <q-item-label class="text-gray" overline>Education</q-item-label>
            <q-item-label class="text-weight-bold">Something amazing happened</q-item-label>
            <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section class="q-pa-md">
            <q-item-label class="text-gray" overline>Education</q-item-label>
            <q-item-label class="text-weight-bold">Something amazing happened</q-item-label>
            <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
        </q-list>
    </q-drawer>

    <q-page-container>
      <keep-alive>
      <router-view />
      </keep-alive>
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      left: false,
      right: false
    }
  }
}
</script>

<style lang="sass">
.header-icon
  position:absolute
  bottom: 0
  left: 50%
  transform: translateX(-50%)
</style>
