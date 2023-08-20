<template>
  <div class="sidebar-icon group">
    <font-awesome-icon :icon="['fas', icon]" size="lg" />
    <span class="sidebar-tooltip group-hover:scale-100 opacity-95">
      {{ tooltip }}
    </span>
  </div>
</template>
<script>
export default {
  name: 'SidebarIcon',
  props: ['icon', 'tooltip']
}
</script>
