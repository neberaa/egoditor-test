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

<style lang="scss">
  body {
    padding: 0;
    margin: 0;
  }
  #app {
    font-family: "sourceSans", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;

    h1, {
      margin: 0;
    }

    button {
      border: none;
      margin: 0;
      padding: 0;
      overflow: visible;
      background-color: transparent;
      cursor: pointer;
      color: inherit;
      font: inherit;
      text-align: inherit;
      line-height: normal;
      -webkit-font-smoothing: inherit;
      -moz-osx-font-smoothing: inherit;
      -webkit-appearance: none;

      &:focus {
        outline: none;
      }

      &::-moz-focus-inner {
        border: 0;
        padding: 0;
      }
    }
    a {
      text-decoration: none;
    }
  }
</style>
