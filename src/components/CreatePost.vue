<template>
  <!-- Modal for creating post -->
  <input type="checkbox" id="modal" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box bg-white">
      <div class="heading text-center font-bold text-2xl m-5 text-black">New Post</div>
      <div class="flex">
        <!-- User Avatar -->
        <a class="w-1/6 block shrink-0 justify-center items-center">
          <span class="sr-only">Profile</span>
          <img
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            class="h-full w-full rounded-full object-cover hover:cursor-pointer hover:shadow-md hover:opacity-80"
          />
        </a>

        <!-- Username and post visibility -->
        <div class="w-11/12 500 text-black p-4 font-semibold">
          <div>Tom Wambsgans</div>
          <div class="badge mt-2 badge-ghost gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
              style="fill: #ffffff"
            >
              <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"
              />
            </svg>
            Everyone
          </div>
        </div>
      </div>
      <textarea
        placeholder="What's on your mind?"
        class="textarea bg-white textarea-lg w-full my-2"
      ></textarea>
      <!-- Icon Buttons -->
      <div class="flex justify-between items-center">
        <!-- Icon Buttons -->
        <div class="flex">
          <a
            class="cursor-pointer relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto bg-gray-400 hover:bg-[#b62648] dark:bg-gray-800 text-[#b62648] hover:text-white rounded-3xl mr-2"
          >
            <span class="sr-only"> Download </span>
            <font-awesome-icon :icon="['fas', 'face-laugh-beam']" />
          </a>
          <a
            class="cursor-pointer relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto bg-gray-400 hover:bg-[#b62648] dark:bg-gray-800 text-[#b62648] hover:text-white rounded-3xl mr-2"
          >
            <span class="sr-only"> Download </span>
            <font-awesome-icon :icon="['fas', 'image']" />
          </a>
          <a
            class="cursor-pointer relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto bg-gray-400 hover:bg-[#b62648] dark:bg-gray-800 text-[#b62648] hover:text-white rounded-3xl mr-2"
          >
            <span class="sr-only"> Download </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 -960 960 960"
              width="48"
              class="fill-current"
            >
              <path
                d="M468-360v-240h48v240h-48Zm-234 0q-15.3 0-24.65-9.5Q200-379 200-394v-172q0-15 9.35-24.5T234-600h124q15.3 0 24.65 9.5Q392-581 392-566v14H248v144h96v-72h48v86q0 15-9.35 24.5T358-360H234Zm354 0v-240h172v48H636v60h81v48h-81v84h-48Z"
              />
            </svg>
          </a>
          <a
            class="cursor-pointer relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto bg-gray-400 hover:bg-[#b62648] dark:bg-gray-800 text-[#b62648] hover:text-white rounded-3xl mr-2"
          >
            <span class="sr-only"> Download </span>
            <font-awesome-icon :icon="['fas', 'location-dot']" />
          </a>
        </div>
        <!-- TODO: Maybe add a time icon to the left of the Post button for scheduled post -->
        <button class="btn bg-[#b62648] text-white hover:bg-[#9a1f3c]" style="border-width: 0">
          Post
        </button>
      </div>
    </div>
    <label class="modal-backdrop" for="modal">Close</label>
  </div>

  <!-- Create Post Button -->
  <label for="modal">
    <form>
      <div
        class="w-[380px] sm:w-[600px] md:w-[600px] mb-2 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
      >
        <!-- User Avatar and create a post at the top -->
        <div class="flex">
          <!-- User Avatar -->
          <div>
            <a class="block shrink-0 px-4 pt-2">
              <span class="sr-only">Profile</span>
              <img
                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                class="h-8 w-8 rounded-full object-cover hover:cursor-pointer hover:shadow-md hover:opacity-80"
              />
            </a>
          </div>

          <!-- Create a post div -->
          <div class="w-full px-4 py-2 rounded-t-lg dark:bg-gray-800 hover:cursor-pointer">
            <div class="relative">
              <div
                class="z-0 absolute inset-0 px-0 text-sm text-gray-600 border-0 dark:bg-gray-800 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 pt-2 font-semibold"
                style="pointer-events: none"
              >
                Create a post...
              </div>
            </div>
          </div>
        </div>
        <!-- Post a feeling/photo/video at the bottom -->
        <div class="flex justify-between px-3 py-2 border-t dark:border-gray-600">
          <div class="flex pl-0 space-x-1 sm:pl-2 w-full">
            <!-- Photo chip -->
            <div
              class="z-0 flex-grow flex-shrink-0 flex hover:cursor-pointer items-center center relative select-none whitespace-nowrap rounded-lg bg-[#33BA9A] hover:bg-[#28937C] py-2 px-3.5 font-sans text-xs font-bold uppercase leading-none text-white"
            >
              <div class="h-5 w-5 flex items-center">
                <div class="m-auto">
                  <font-awesome-icon :icon="['fa', 'image']" />
                </div>
              </div>
              <div class="ml-4">Photo/Video</div>
            </div>

            <!-- Feeling chip -->
            <div
              class="flex-grow flex-shrink-0 flex items-center center relative select-none whitespace-nowrap rounded-lg bg-[#33BA9A] hover:bg-[#28937C] hover:cursor-pointer py-2 px-3.5 font-sans text-xs font-bold uppercase leading-none text-white"
            >
              <div class="h-5 w-5 flex items-center">
                <div class="m-auto">
                  <font-awesome-icon :icon="['fas', 'face-laugh-beam']" />
                </div>
              </div>
              <div class="ml-4">Feeling/Activity</div>
            </div>

            <!-- Live Video chip -->
            <div
              class="flex-grow flex-shrink-0 hover:cursor-pointer flex items-center center relative select-none whitespace-nowrap rounded-lg bg-[#33BA9A] hover:bg-[#28937C] py-2 px-3.5 font-sans text-xs font-bold uppercase leading-none text-white"
            >
              <div class="h-5 w-5 flex items-center">
                <div class="m-auto">
                  <font-awesome-icon :icon="['fas', 'video']" />
                </div>
              </div>
              <div class="ml-4">Live Video</div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </label>
</template>

<script>
export default {
  name: 'CreatePost'
}
</script>
