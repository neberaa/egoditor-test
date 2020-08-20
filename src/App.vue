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
    font-family: "sourceSans", sans-serif;
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
    color: $dark-navy;
  }
  h1 {
    font-size: 40px;
  }
  h2 {
    font-size: 30px;
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
  input,
  select {
    border: 1px solid lighten($dark-gray, 20%);
    border-radius: 4px;
    font-family: "sourceSans", sans-serif;
    font-size: 14px;
    color: $dark-gray;
    padding: 8px;
    transition: border 300ms ease;
    &:focus {
      outline: none;
      border: 1px solid $dark-navy;
    }
    &:invalid {
      border: 1px solid $coral;
    }
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
