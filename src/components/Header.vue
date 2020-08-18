<template>
  <header class="header">
    <div class="header__content">
      <div class="column column--left">
        <a
          href="/"
          class="logo">
          <img
            src="@/assets/icons/logo-icon-blue.svg"
            class="logo__icon"/>
          <h3 class="logo__text">
            QR Code Generator
          </h3>
          <span class="logo__text--pro">pro</span>
        </a>
        <button class="menu"/>
      </div>
      <div class="column column--right">
        <div class="locales">
          <button
            class="locales__toggler"
            v-for="(lang, i) in langs"
            :key="`Lang${i}`"
            @click="toggleLang(lang)"
            v-text="lang"/>
        </div>
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
import { Component, Watch, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  private langs: string[] = ["en", "de"];

  private toggleLang(lang: string): void {
    this.$i18n.locale = lang;
  };
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  width: 100%;
  height: 80px;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.25);
  position: relative;
  &__content {
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: inherit;
    .column {
      display: flex;
      &--left {
        .logo {
          display: flex;
          color: $dark-navy;
          &:active {
            color: $dark-navy;
          }
          &__icon {
            width: 25px;
            margin-right: 10px;
          }
          &__text {
            &--pro {
              background: $blue;
              color: $white;
              text-transform: uppercase;
              font-weight: 700;
              padding: 0 3px;
              border-radius: 3px;
              height: 15px;
              font-size: 11px;
              margin-left: 2px;
            }
          }
        }
      }
    }
  }
}
</style>
