<template>
  <div class="page-content">
    <div class="title">
      <h1
        class="title__text"
        v-show="!isEditing"
        v-text="pageTitle"/>
      <label v-show="isEditing">
        <input
          class="title__input"
          type="text"
          v-model="pageTitle">
      </label>
      <i
        class="title__icon"
        @click="isEditing = !isEditing"
        v-text="!isEditing ? 'edit' : 'save'"/>
    </div>
    <Tabs/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Tabs from "@/components/Tabs.vue";

@Component({
  components: {
    Tabs,
  },
})
export default class PageContent extends Vue {
  private pageTitle: string = "Egoditor GmbH";
  private isEditing: boolean = false;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.page-content {
  min-height: calc(100vh - #{$header-height});
  background: $gray;
  .title {
    text-align: left;
    padding: 30px 45px;
    background: $white;
    display: flex;
  }
}
</style>
