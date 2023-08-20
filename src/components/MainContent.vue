<template>
  <div class="content-container">
    <nav-bar></nav-bar>
    <month-viewer class="-mr-9"></month-viewer>
    <div class="mt-12 pt-8 -ml-16 content-list">
      <create-post></create-post>
      <post-board
        name="Ada"
        timestamp="one week ago"
        text="Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <post-board name="Leon" timestamp="one week ago" text="lorem ipsum" />
      <post-board name="Jill" timestamp="5 days ago" text="Lorem" />
      <post-board
        name="Ellie"
        timestamp="4 days ago"
        text="Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <post-board
        name="Chris"
        timestamp="4 days ago"
        text="Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <post-board
        name="Claire"
        timestamp="2 days ago"
        text="Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <post-board name="Albert" timestamp="22 hours ago" text="Lorem" />
      <post-board
        name="Rebecca"
        timestamp="3 hours ago"
        text="Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <post-board
        name="H.U.N.K"
        timestamp="Just now"
        text="Lorem ipsum dolor sit amet, consectetur adipisci"
      />
    </div>
  </div>
</template>

<script>
import CreatePost from '@/components/CreatePost.vue'
import MonthViewer from '@/components/MonthViewer.vue'
import NavBar from '@/components/NavBar.vue'
import PostBoard from '@/components/PostBoard.vue'

export default {
  name: 'MainContent',
  components: {
    CreatePost,
    PostBoard,
    MonthViewer,
    NavBar
  }
}
</script>
