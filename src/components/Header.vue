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
        <button class="menu">
          <i class="menu__icon fas fa-bars"/>
        </button>
      </div>
      <div class="column column--right">
        <div class="locales">
          <button
            class="locales__item"
            :class="{'locales__item--active': $i18n.locale === lang}"
            v-for="(lang, i) in langs"
            :key="`Lang${i}`"
            @click="toggleLang(lang)"
            v-text="lang"/>
        </div>
        <a href="/" class="notifications">
          <i class="notifications__icon far fa-bell icon"/>
        </a>
        <a href="/" class="help">
          <i class="help__icon far fa-question-circle icon"/>
        </a>
        <a href="/" class="account-home">
          <i class="account-home__icon far fa-user icon"/>
          <span
            class="account-home__text">
            Account
          </span>
        </a>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  private langs: string[] = ["en", "de"];

  private toggleLang(lang: string): void {
    this.$i18n.locale = lang;
  };
}
</script>

<style scoped lang="scss">
%dash {
  content: '';
  display: block;
  position: absolute;
  width: 2px;
  background: $dark-gray;
  height: 20px;
  opacity: .3;
}
.header {
  width: 100%;
  height: 80px;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.25);
  position: relative;
  &__content {
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: inherit;
    @include screenBreakpoint2(phone) {
      padding: 0 15px;
    }
    .column {
      display: flex;
      &--left {
        @include screenBreakpoint2(phone) {
          width: 100%;
          justify-content: space-between;
        }
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
        .menu {
          margin-left: 60px;
          position: relative;
          display: block;
          &::before {
            @extend %dash;
            left: -30px;
            @include screenBreakpoint2(phone) {
              display: none;
            }
          }
          &__icon {
            font-size: 19px;
            color: $blue;
            @include screenBreakpoint2(phone) {
              font-size: 25px;
            }
          }
        }
      }
      &--right {
        @include screenBreakpoint2(phone) {
          display: none;
        }
        .icon {
          font-size: 21px;
          color: $blue;
        }
        .locales {
          margin-right: 40px;
          position: relative;
          &::after {
            @extend %dash;
            top: 0;
            right: -20px;
          }
          &__item {
            text-transform: uppercase;
            color: $dark-gray;
            font-weight: 900;
            font-size: 16px;
            transition: all 300ms ease;
            opacity: 0.6;
            &--active {
              color: $blue;
            }
            &:not(:last-of-type) {
              margin-right: 20px;
            }
          }
        }
        .notifications {
          margin-right: 20px;
        }
        .help {
          margin-right: 40px;
          position: relative;
          &::after {
            @extend %dash;
            right: -20px;
            top: 0;
          }
        }
        .account-home {
          &__icon {
            margin-right: 5px;
          }
          &__text {
            font-weight: 900;
            color: $dark-blue;
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>
