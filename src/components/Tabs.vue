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
        <transition-group name="fade">
          <div
            :key="`trans-${ind}`"
            class="content"
            v-for="(tab, ind) in tabs"
            v-show="activeTab === ind">
            {{tab.content}}
            <button @click="postData">save</button>
          </div>
        </transition-group>
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
// Vue fade transition
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.tabs {
  &__navigation {

  }
  &__content {
  }
}
</style>
