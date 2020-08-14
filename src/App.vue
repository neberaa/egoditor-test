<template>
  <div id="app">
    <Header/>
    <PageContent/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './components/Header.vue';
import PageContent from './components/PageContent.vue';

@Component({
  components: {
    Header,
    PageContent,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss"/>
