<template>
  <div id="app">
    <sidebar-comp></sidebar-comp>
    <header-comp></header-comp>
    <item-view v-bind:itemData="itemData"></item-view>
  </div>
</template>

<script>
import HeaderComp from './components/header.vue';
import SidebarComp from './components/sidebar.vue';
import ItemView from './components/itemView.vue';
import itemData from './assets/item-data.json'

export default {
  name: 'app',
  components: {
    SidebarComp,
    HeaderComp,
    ItemView,
    itemData,
  },
  data(){
    return {
      itemData: itemData,
    }
  }
}
</script>

<style lang="scss">
*{
  font-family: Helvetica;
}
</style>
