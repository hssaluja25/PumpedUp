<template>
  <div
    class="fixed top-0 left-0 h-screen w-16 flex flex-col bg-white bg-opacity-90 dark:bg-gray-900 shadow-lg"
  >
    <!-- Whitespace at the top -->
    <div class="bg-transparent h-12 mt-7"></div>
    <sidebar-icon icon="house" tooltip="home" />
    <hr class="sidebar-hr" />
    <sidebar-icon icon="bullseye" tooltip="goals" />
    <sidebar-icon icon="bell" tooltip="notifications" />
    <sidebar-icon icon="wand-magic-sparkles" tooltip="recommendations" />
    <hr class="sidebar-hr" />
    <sidebar-icon icon="gear" tooltip="settings" />
  </div>
</template>

<script>
import SidebarIcon from '@/components/SidebarIcon.vue'

export default {
  name: 'SideBar',
  components: {
    SidebarIcon
  }
}
</script>
