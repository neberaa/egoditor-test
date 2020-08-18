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
  * {
    box-sizing: border-box;
  }
  body {
    padding: 0;
    margin: 0;
  }
  #app {
    font-family: "sourceSans", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
  h1, h2, h3, h4 {
    margin: 0;
    font-weight: 900;
  }
  h1 {
    font-size: 36px;
    color: $dark-navy;
  }
  h2 {
    font-size: 30px;
    color: $dark-navy;
  }
  h3 {
    font-size: 24px;
  }
  h4 {
    font-size: 18px;
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
  // Vue fade transition
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      padding: 0;
    }
  }
</style>
