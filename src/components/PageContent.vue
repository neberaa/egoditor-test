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
      <div
        class="title__change"
        @click="isEditing = !isEditing">
        <span class="text" v-text="!isEditing ? 'edit' : 'save'"/>
        <div
          class="icon"
          v-show="!isEditing">
          <i class="fas fa-pencil-alt"/>
        </div>
        <div
          class="icon"
          v-show="isEditing">
          <i class="fas fa-check"/>
        </div>
      </div>
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
    padding: 30px 90px;
    background: $white;
    display: flex;
    @include screenBreakpoint2(phone) {
      padding: 30px 15px;
      flex-wrap: wrap;
    }
    &__text,
    &__input {
      max-width: 100%;
      min-width: 260px;
      margin-right: 20px;
    }
    &__text {
      height: 53px;
      border: 1px solid transparent;
    }
    &__input {
      border: 1px solid $navy-gray;
      border-radius: 4px;
      font-size: 36px;
      font-weight: 900;
      color: $dark-navy;
      max-width: 300px;
      &:focus {
        outline: none;
      }
    }
    &__change {
      display: flex;
      align-items: center;
      cursor: pointer;
      .text {
        margin-right: 5px;
        color: $dark-blue;
        text-transform: capitalize;
        font-weight: 900;
      }
      .icon {
        color: $blue;
        font-size: 14px;
      }
    }
  }
}
</style>
