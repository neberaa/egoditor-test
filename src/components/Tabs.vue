<template>
  <section class="tabs">
    <div
      class="popup"
      :class="{'popup--visible': formIsSubmitted && !popupIsClosed}">
      <div class="popup__content">
        <h3 class="title">
          Your contact info has been updated!
        </h3>
        <button
          @click="onPopupClose"
          class="close">
          OK
        </button>
      </div>
    </div>
    <header>
      <nav class="tabs__navigation">
        <ul class="nav-list">
          <li
            @click="setActiveTab(ind)"
            class="nav-list__item"
            :class="{'nav-list__item--active': tab.isActive}"
            v-for="(tab, ind) in tabs">
            {{ tab.title }}
          </li>
        </ul>
      </nav>
    </header>
    <transition name="fade">
      <main
        class="tabs__content"
        v-show="isLoaded && activeTab === 0">
        <div class="column column--left">
          <section class="column__item column__item--information">
            <h3
              class="row-label"
              v-text="$t('information.title')"/>
            <div class="row">
              <div class="row__element row__element--w33">
                <h4
                  class="title"
                  v-text="$t('information.customerId')"/>
                <span
                  class="value"
                  v-text="customerId"/>
              </div>
              <div class="row__element row__element--w33">
                <h4
                  class="title"
                  v-text="$t('information.signupDate')"/>
                <span
                  class="value"
                  v-text="signUpDate"/>
              </div>
              <div class="row__element row__element--w33">
                <h4
                  class="title"
                  v-text="$t('information.account')"/>
                <span
                  class="value"
                  v-text="account"/>
              </div>
            </div>
            <div class="row">
              <div class="row__element row__element--w100">
                <h4
                  class="title"
                  v-text="$t('information.loginEmail')"/>
                <a
                  href="/"
                  class="password"
                  v-text="$t('information.password')"/>
                <span
                  class="value"
                  v-text="email"/>
                <a
                  href="/"
                  class="email"
                  v-text="$t('information.changeEmail')"/>
              </div>
            </div>
          </section>
          <section class="column__item column__item--contact">
            <h3
              class="row-label"
              v-text="$t('contact.title')"/>
            <span
              class="row-description"
              v-text="$t('contact.description')"/>
            <div class="row">
              <div class="row__element row__element--w100">
                <form
                  @submit.prevent="postData"
                  method="get"
                  class="contact-form">
                  <div class="contact-form__item">
                    <label
                      class="label"
                      for="firstName"
                      v-text="$t('contact.firstName')"/>
                    <input
                      class="input"
                      type="text"
                      name="firstName"
                      id="firstName"
                      v-model="data.firstName"
                      required>
                    <span
                      class="placeholder"
                      v-show="!data.firstName || data.firstName.length === 0"
                      v-text="$t('contact.firstName')"/>
                  </div>
                  <div class="contact-form__item">
                    <label
                      class="label"
                      for="lastName"
                      v-text="$t('contact.lastName')"/>
                    <input
                      class="input"
                      type="text"
                      name="lastName"
                      id="lastName"
                      v-model="data.lastName"
                      required>
                    <span
                      class="placeholder"
                      v-show="!data.lastName || data.lastName.length === 0"
                      v-text="$t('contact.lastName')"/>
                  </div>
                  <div class="contact-form__item">
                    <label
                      class="label"
                      for="phone"
                      v-text="$t('contact.phone')"/>
                    <input
                      class="input"
                      type="tel"
                      name="phone"
                      id="phone"
                      v-model="data.phoneNumber"
                      required>
                    <span
                      class="placeholder"
                      v-show="!data.phoneNumber || data.phoneNumber.toString().length === 0"
                      v-text="$t('contact.phone')"/>
                  </div>
                  <div class="contact-form__item">
                    <label
                      class="label"
                      for="company"
                      v-text="$t('contact.company')"/>
                    <input
                      class="input"
                      type="text"
                      name="company"
                      id="company"
                      v-model="data.company">
                    <span
                      class="placeholder"
                      v-show="!data.company || data.company.length === 0"
                      v-text="$t('contact.company')"/>
                  </div>
                  <div class="contact-form__item">
                    <label
                      class="label"
                      for="street"
                      v-text="$t('contact.street')"/>
                    <input
                      class="input"
                      type="text"
                      name="street"
                      id="street"
                      v-model="data.street">
                    <span
                      class="placeholder"
                      v-show="!data.street || data.street.length === 0"
                      v-text="$t('contact.street')"/>
                  </div>
                  <div class="contact-form__item contact-form__item--w66">
                    <label
                      class="label"
                      for="city"
                      v-text="$t('contact.city')"/>
                    <input
                      class="input"
                      type="text"
                      name="city"
                      id="city"
                      v-model="data.city">
                    <span
                      class="placeholder"
                      v-show="!data.city || data.city.length === 0"
                      v-text="$t('contact.city')"/>
                  </div>
                  <div class="contact-form__item contact-form__item--w33">
                    <label
                      class="label"
                      for="zipcode"
                      v-text="$t('contact.zipCode')"/>
                    <input
                      class="input"
                      type="number"
                      name="zipcode"
                      id="zipcode"
                      max="9999999"
                      v-model="data.zipCode">
                    <span
                      class="placeholder"
                      v-show="!data.zipCode || data.zipCode.toString().length === 0"
                      v-text="$t('contact.zipCode')"/>
                  </div>
                  <div class="contact-form__item">
                    <label
                      class="label"
                      for="country"
                      v-text="$t('contact.country')"/>
                    <select
                      class="select"
                      id="country"
                      name="country"
                      v-model="data.country">
                      <option
                        v-for="country in countries"
                        :value="country.code">
                        {{country.name}}
                      </option>
                    </select>
                  </div>
                  <div class="contact-form__item">
                    <label
                      class="label"
                      for="website"
                      v-text="$t('contact.website')"/>
                    <input
                      class="input"
                      type="text"
                      name="website"
                      id="website"
                      v-model="data.webSite">
                    <span
                      class="placeholder"
                      v-show="!data.webSite || data.webSite.length === 0"
                      v-text="$t('contact.website')"/>
                  </div>
                  <div class="contact-form__item contact-form__item--button">
                    <button
                      type="submit"
                      class="submit">
                      SAVE
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
        <div class="column column--right">
        </div>
      </main>
    </transition>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { tabsNavigationData } from '@/data/tabs';
import { countryList } from '@/data/countries';
import { ITab } from "@/models/tabs.interface";
import { ICountry } from "@/models/country.interface";
import { IUserData } from "@/models/account.interface";

@Component
export default class Tabs extends Vue {
  private tabs: ITab[] = [];
  private countries: ICountry[] = countryList;
  private data: IUserData = {} as any;
  private activeTab: number = 0;
  private apiEndpoint: string = "http://my-json-server.typicode.com/neberaa/fakeapi/userData";
  private isLoaded: boolean = false;
  private formIsSubmitted: boolean = false;
  private popupIsClosed: boolean = false;

  get activeTabContent() {
    return this.tabs[this.activeTab].content;
  }
  get customerId() {
    return this.activeTabContent?.id;
  }
  get signUpDate() {
    return this.activeTabContent?.signUpDate;
  }
  get account() {
    return this.activeTabContent?.accountType;
  }
  get email() {
    return this.activeTabContent?.email;
  }

  async api<T>(request: RequestInfo): Promise<T> {
    const response = await fetch(request);
    const body = await response.json();
    if (body !== null) {
      this.isLoaded = true;
    }
    return body;
  }
  setActiveTab(index: number): void {
    this.tabs.forEach((t, ind) => t.isActive = index === ind);
    this.activeTab = index;
  }
  postData(): void {
    fetch(this.apiEndpoint, {
      method: 'POST',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: this.data.toString()
    }).then(res => {
      console.log("post success", this.data, res);

      this.popupIsClosed = false;
      this.formIsSubmitted = true;
    })
  }
  onPopupClose(): void {
    this.popupIsClosed = true;
    this.formIsSubmitted = false;
  }
  async created() {
    this.tabs = tabsNavigationData;
    this.tabs[0].content = await this.api<IUserData>(this.apiEndpoint);
    this.data = this.tabs[0].content;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.tabs {
  .popup {
    opacity: 0;
    transition: all 500ms ease;
    @include center('both');
    z-index: 10;
    top: -50%;
    background: $white;
    padding: 60px 30px;
    border-radius: 10px;
    box-shadow: 0 1px 5px 1px rgba(0,0,0,0.1);
    &--visible {
      top: 50%;
      opacity: 1;
    }
    .title {
      margin-bottom: 30px;
    }
    .close {
      border-radius: 4px;
      border: 1px solid $dark-gray;
      padding: 5px 20px;
      color: $dark-navy;
      transition: border 300ms ease;
      &:hover {
        border-color: $dark-navy;
      }
    }
  }
  &__navigation {
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.1);
    .nav-list {
      display: flex;
      padding: 0 90px;
      background: $white;
      @include screenBreakpoint2(phone) {
        flex-direction: column;
        padding: 0;
      }
      &__item {
        color: $dark-gray;
        padding: 7px 10px;
        font-weight: 700;
        border-bottom: 2px solid transparent;
        transition: all 300ms ease;
        cursor: pointer;
        &:not(:last-of-type) {
          margin-right: 25px;
          @include screenBreakpoint2(phone) {
            margin-right: 0;
          }
        }
        @include screenBreakpoint2(phone) {
          padding: 7px 15px;
          &:not(:last-of-type) {
            margin-right: 0;
          }
        }
        &--active {
          color: $dark-blue;
          border-bottom-color: $blue;
        }
      }
    }
  }
  &__content {
    padding: 60px 90px 90px;
    display: flex;
    @media screen and (max-width: 900px) {
      flex-direction: column;
    }
    @include screenBreakpoint2(phone) {
      padding: 30px 15px;
    }
    .column {
      padding: 20px;
      .row {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        &-label {
          text-align: left;
        }
        &__element {
          &--w33 {
            flex: 0 0;
            flex-basis: calc((100% - 15px) / 3);
            @media screen and (max-width: 1150px) {
              flex-basis: 100%;
              &:not(:last-of-type) {
                margin-bottom: 5px;
              }
            }
          }
          &--w100 {
            flex-basis: 100%;
            text-align: left;
          }
          .title {
            text-transform: uppercase;
            color: $dark-gray;
            font-weight: 900;
            font-size: 12px;
            opacity: .7;
            margin-bottom: 10px;
          }
          .value {
            color: $navy-gray;
            font-size: 17px;
            font-weight: 700;
          }
        }
      }
      &--left {
        background: $white;
        flex: 0 0 35%;
        border-radius: 10px;
        box-shadow: 0 1px 5px 1px rgba(0,0,0,0.1);
        @media screen and (max-width: 1400px) {
          flex-basis: 40%;
        }
        @media screen and (max-width: 900px) {
          flex-basis: 100%;
        }
      }
      &--right {
        flex: 0 0 62%;
        margin-left: 3%;
        @media screen and (max-width: 1400px) {
          flex-basis: 57%;
        }
        @media screen and (max-width: 900px) {
          flex-basis: 100%;
          margin-left: 0;
        }
      }
      &__item {
        &--information {
          margin-bottom: 45px;
          @include screenBreakpoint2(phone) {
            margin-bottom: 30px;
          }
          .row {
            &:not(:last-of-type) {
              margin-bottom: 5px;
            }
            &-label {
              margin-bottom: 30px;
            }
            &__element {
              border: 1px solid lighten($dark-gray, 40%);
              border-radius: 4px;
              padding: 15px;
              &--w100 {
                display: flex;
                flex-wrap: wrap;
                align-items: baseline;
                & > * {
                  flex: 1 1 50%;
                }
                .password,
                .email {
                  text-align: right;
                  font-size: 13px;
                  font-weight: 900;
                  color: $dark-blue;
                  flex-basis: 30%;
                }
              }
            }
          }
        }
        &--contact {
          .row-description {
            text-align: left;
            color: $navy-gray;
            margin-bottom: 30px;
            display: block;
          }
          .contact-form {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            width: 100%;
            .input,
            .select {
              width: 100%;
              margin-bottom: 20px;
            }
            .label {
              position: absolute;
              top: -10px;
              left: 7px;
              background: $white;
              font-size: 12px;
              font-weight: 700;
              color: $dark-gray;
              z-index: 1;
              padding: 2px 4px;
            }
            .placeholder {
              position: absolute;
              left: 11px;
              top: 7px;
              opacity: 0.2;
              font-size: 14px;
              pointer-events: none;
            }
            &__item {
              position: relative;
              flex: 0 0 100%;
              &--w66 {
                flex-basis: calc(66% - 15px);
                margin-right: 15px;
              }
              &--w33 {
                flex-basis: calc(100% - 66%);
              }
              &--button {
                text-align: right;
                .submit {
                  border-radius: 20px;
                  padding: 7px 20px;
                  background: lighten($dark-gray, 40%);
                  color: $dark-gray;
                  font-weight: 900;
                  text-transform: uppercase;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
