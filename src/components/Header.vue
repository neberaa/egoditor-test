<template>
  <header class="header">
    <div class="header__content">
      <div class="column column--left">
        <a
          href="/"
          class="logo">
          <i class="logo__icon"/>
          <h3 class="logo__text">QR Code Generator</h3>
        </a>
        <button class="menu"/>
      </div>
      <div class="column column--right">
        <a href="/" class="notifications"></a>
        <a href="/" class="help"></a>
        <a href="/" class="account-home">
          <i class="account-home__icon"></i>
          <span class="account-home__text">Account</span>
        </a>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  width: 100%;
  height: 60px;
  border-bottom: 2px solid $gray;
  &__content {
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .column {
      display: flex;
    }
  }
}
</style>
