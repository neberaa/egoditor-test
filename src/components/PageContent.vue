<template>
  <div class="page-content">
    <h1 class="page-title"></h1>
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
export default class PageContent extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
