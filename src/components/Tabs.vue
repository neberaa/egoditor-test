<template>
  <section class="tabs">
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
        v-show="isLoaded">
        <transition name="fade">
          <div
            class="content"
            v-show="activeTab === 0">
            {{tabs[0].content}}
            <div class="column column--left">
              <section class="column__item">
                <h3 class="row-label" v-text="$t('information.title')"/>
                <div class="row">
                  <div class="row__element row__element--w33">
                    <h4 class="title" v-text="$t('information.customerId')"/>
                    <span class="value" v-text="customerId"/>
                  </div>
                  <div class="row__element row__element--w33">
                    <h4 class="title" v-text="$t('information.signupDate')"/>
                    <span class="value" v-text="signUpDate"/>
                  </div>
                  <div class="row__element row__element--w33">
                    <h4 class="title" v-text="$t('information.account')"/>
                    <span class="value" v-text="account"/>
                  </div>
                </div>
                <div class="row">
                  <div class="row__element row__element--w100">
                    <h4 class="title" v-text="$t('information.loginEmail')"/>
                    <span class="value" v-text="email"/>
                  </div>
                </div>
              </section>
              <section class="column__item">
                <h3 class="row-label" v-text="$t('contact.title')"/>
                <div class="row">
                  <div class="row__element row__element--w100">
                    <form action=""></form>
                    <h4 class="title" v-text="$t('information.customerId')"/>
                    <span class="value" v-text="customerId"/>
                  </div>
                </div>
              </section>
            </div>
            <div class="column column--right">

            </div>
          </div>
        </transition>
      </main>
    </transition>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { tabsNavigationData } from '@/data/tabs';
import { ITab } from "@/models/tabs.interface";
import { IUserData } from "@/models/account.interface";

@Component
export default class Tabs extends Vue {
  private tabs: ITab[] = [];
  private data: IUserData = {} as any;
  private activeTab: number = 0;
  private apiEndpoint: string = "http://my-json-server.typicode.com/neberaa/fakeapi/userData";
  private isLoaded: boolean = false;

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
  get firstName() {
    return this.activeTabContent?.firstName;
  }
  get lastName() {
    return this.tabs[0].content?.lastName;
  }
  // get loginEmail() {
  //   return this.tabs[0].content?.email;
  // }
  // get loginEmail() {
  //   return this.tabs[0].content?.email;
  // }
  // get loginEmail() {
  //   return this.tabs[0].content?.email;
  // }
  // get loginEmail() {
  //   return this.tabs[0].content?.email;
  // }

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
      headers: {'Content-Type':'application/x-www-form-urlencoded'}, // this line is important, if this content-type is not set it wont work
      body: this.data.toString() //use the stringify object of the queryString class
    }).then(res => console.log("post success", this.data, res))
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
  &__navigation {
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.1);
    .nav-list {
      display: flex;
      padding: 0 45px;
      background: $white;
      &__item {
        color: $dark-gray;
        padding: 7px 10px;
        font-weight: 700;
        border-bottom: 2px solid transparent;
        transition: all 300ms ease;
        cursor: pointer;
        &:not(:last-of-type) {
          margin-right: 25px;
        }
        &--active {
          color: $dark-blue;
          border-bottom-color: $blue;
        }
      }
    }
  }
  &__content {
    padding: 30px 45px 45px;
    .column--left {
      background: $white;
      padding: 15px;
    }
    .column--right {

    }
  }
}
</style>
