<template>
  <div class="flex">
    <side-bar />
    <main-content />
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import MainContent from '@/components/MainContent.vue'

export default {
  name: 'FeedView',
  components: {
    SideBar,
    MainContent
  }
}
</script>
