<template>
  <div class="ml-4 z-20">
    <div class="fixed ml-12 pr-12 top-0 w-full">
      <div class="top-navigation pl-2">
        <!-- Logo -->
        <img
          src="@/assets/logo.png"
          alt="PumpedUp logo"
          width="28"
          height="28"
          class="ml-3 hover:cursor-pointer"
        />
        <!-- Title -->
        <h5 class="title-text hover:cursor-pointer">Feed</h5>

        <!-- Theme Icon. -->
        <!-- <span onClick={handleMode}>
      {darkTheme ? (
        <FaSun size='24' class='top-navigation-icon' />
      ) : (
        <FaMoon size='24' class='top-navigation-icon' />
      )}
    </span> -->
        <span>
          <font-awesome-icon :icon="['fas', 'moon']" class="top-navigation-icon" size="xl" />
        </span>

        <!-- Search -->
        <div class="search">
          <input class="search-input" type="text" placeholder="Search..." />
          <font-awesome-icon
            :icon="['fas', 'magnifying-glass']"
            class="text-secondary my-auto hover:cursor-pointer"
            style="color: #b62648"
          />
        </div>

        <!-- Notifications -->
        <font-awesome-icon :icon="['fas', 'bell']" class="top-navigation-icon" size="xl" />
        <!-- User Profile -->
        <a class="block shrink-0 pr-8">
          <span class="sr-only">Profile</span>
          <img
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            class="h-8 w-8 rounded-full object-cover hover:cursor-pointer hover:shadow-md hover:opacity-80"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
