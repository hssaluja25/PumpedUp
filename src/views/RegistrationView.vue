<template>
  <section class="bg-white">
    <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
      <!-- Picture to the right -->
      <aside class="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
        <img
          alt="Pattern"
          src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          class="absolute inset-0 h-full w-full object-cover"
        />
      </aside>

      <!-- Main -->
      <main
        class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
      >
        <div class="max-w-xl lg:max-w-3xl">
          <!-- The icon on the top -->
          <a class="block text-blue-600" href="/">
            <span class="sr-only">Home</span>
            <img src="@/assets/logo.png" width="50" height="50" />
          </a>

          <h1 class="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            Welcome to PumpedUp 💪
          </h1>

          <p class="mt-4 leading-relaxed text-gray-500">
            Elevate your fitness journey with PumpedUp - the all-in-one app empowering you to set
            goals, connect with enthusiasts, and unlock personalized workouts and tips.
          </p>

          <vee-form @submit="createWithEmail" class="mt-8 grid grid-cols-6 gap-6">
            <!-- First Name field -->
            <div class="col-span-6 sm:col-span-3">
              <label for="FirstName" class="block text-sm font-medium text-gray-700">
                First Name
              </label>

              <vee-field
                type="text"
                :rules="'required|min:2|max:100'"
                id="FirstName"
                aria-labelledby="first_name"
                name="first name"
                class="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2"
                placeholder="John"
              />
              <ErrorMessage class="text-red-600" name="first name"></ErrorMessage>
            </div>

            <!-- Last Name field -->
            <div class="col-span-6 sm:col-span-3">
              <label for="LastName" class="block text-sm font-medium text-gray-700">
                Last Name
              </label>

              <vee-field
                type="text"
                :rules="'required|min:2|max:100'"
                id="LastName"
                aria-labelledby="last_name"
                name="last name"
                class="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2"
                placeholder="Doe"
              />
              <ErrorMessage class="text-red-600" name="last name"></ErrorMessage>
            </div>

            <!-- Email field -->
            <div class="col-span-6">
              <label for="Email" class="block text-sm font-medium text-gray-700"> Email </label>

              <vee-field
                :rules="'required|min:5|max:100|email'"
                name="email"
                id="email"
                aria-labelledby="email"
                type="email"
                class="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2"
                placeholder="e.g: john@gmail.com "
              />
              <ErrorMessage class="text-red-600" name="email"></ErrorMessage>
            </div>

            <!-- Password field -->
            <div class="col-span-3">
              <label for="pass" class="text-sm font-medium leading-none text-gray-800">
                Password
              </label>
              <div class="relative flex items-center justify-center">
                <vee-field
                  :rules="{
                    required,
                    min: 8,
                    max: 100,
                    regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
                  }"
                  name="password"
                  id="myInput"
                  :type="showPassword ? 'password' : 'text'"
                  class="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                />
                <!-- Eyeball -->
                <div class="absolute right-0 mt-2 mr-3 cursor-pointer">
                  <div id="show" @click="showPassword = false" v-if="showPassword">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.99978 2C11.5944 2 14.5851 4.58667 15.2124 8C14.5858 11.4133 11.5944 14 7.99978 14C4.40511 14 1.41444 11.4133 0.787109 8C1.41378 4.58667 4.40511 2 7.99978 2ZM7.99978 12.6667C9.35942 12.6664 10.6787 12.2045 11.7417 11.3568C12.8047 10.509 13.5484 9.32552 13.8511 8C13.5473 6.67554 12.8031 5.49334 11.7402 4.64668C10.6773 3.80003 9.35864 3.33902 7.99978 3.33902C6.64091 3.33902 5.32224 3.80003 4.25936 4.64668C3.19648 5.49334 2.45229 6.67554 2.14844 8C2.45117 9.32552 3.19489 10.509 4.25787 11.3568C5.32085 12.2045 6.64013 12.6664 7.99978 12.6667ZM7.99978 11C7.20413 11 6.44106 10.6839 5.87846 10.1213C5.31585 9.55871 4.99978 8.79565 4.99978 8C4.99978 7.20435 5.31585 6.44129 5.87846 5.87868C6.44106 5.31607 7.20413 5 7.99978 5C8.79543 5 9.55849 5.31607 10.1211 5.87868C10.6837 6.44129 10.9998 7.20435 10.9998 8C10.9998 8.79565 10.6837 9.55871 10.1211 10.1213C9.55849 10.6839 8.79543 11 7.99978 11ZM7.99978 9.66667C8.4418 9.66667 8.86573 9.49107 9.17829 9.17851C9.49085 8.86595 9.66644 8.44203 9.66644 8C9.66644 7.55797 9.49085 7.13405 9.17829 6.82149C8.86573 6.50893 8.4418 6.33333 7.99978 6.33333C7.55775 6.33333 7.13383 6.50893 6.82126 6.82149C6.5087 7.13405 6.33311 7.55797 6.33311 8C6.33311 8.44203 6.5087 8.86595 6.82126 9.17851C7.13383 9.49107 7.55775 9.66667 7.99978 9.66667Z"
                        fill="#71717A"
                      />
                    </svg>
                  </div>
                  <div @click="showPassword = true" v-if="showPassword === false" class="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-eye-off"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#27272A"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="3" y1="3" x2="21" y2="21" />
                      <path d="M10.584 10.587a2 2 0 0 0 2.828 2.83" />
                      <path
                        d="M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <ErrorMessage class="text-red-600" name="password"></ErrorMessage>
            </div>

            <!-- Confirm Password div -->
            <div class="col-span-3">
              <label for="pass" class="text-sm font-medium leading-none text-gray-800">
                Confirm Password
              </label>
              <div class="relative flex items-center justify-center">
                <vee-field
                  :rules="'confirmed:@password'"
                  name="confirm"
                  id="myConfirmPassword"
                  :type="showConfirmPassword ? 'password' : 'text'"
                  class="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                />
                <!-- Eyeball -->
                <div class="absolute right-0 mt-2 mr-3 cursor-pointer">
                  <div id="show" @click="showConfirmPassword = false" v-if="showConfirmPassword">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.99978 2C11.5944 2 14.5851 4.58667 15.2124 8C14.5858 11.4133 11.5944 14 7.99978 14C4.40511 14 1.41444 11.4133 0.787109 8C1.41378 4.58667 4.40511 2 7.99978 2ZM7.99978 12.6667C9.35942 12.6664 10.6787 12.2045 11.7417 11.3568C12.8047 10.509 13.5484 9.32552 13.8511 8C13.5473 6.67554 12.8031 5.49334 11.7402 4.64668C10.6773 3.80003 9.35864 3.33902 7.99978 3.33902C6.64091 3.33902 5.32224 3.80003 4.25936 4.64668C3.19648 5.49334 2.45229 6.67554 2.14844 8C2.45117 9.32552 3.19489 10.509 4.25787 11.3568C5.32085 12.2045 6.64013 12.6664 7.99978 12.6667ZM7.99978 11C7.20413 11 6.44106 10.6839 5.87846 10.1213C5.31585 9.55871 4.99978 8.79565 4.99978 8C4.99978 7.20435 5.31585 6.44129 5.87846 5.87868C6.44106 5.31607 7.20413 5 7.99978 5C8.79543 5 9.55849 5.31607 10.1211 5.87868C10.6837 6.44129 10.9998 7.20435 10.9998 8C10.9998 8.79565 10.6837 9.55871 10.1211 10.1213C9.55849 10.6839 8.79543 11 7.99978 11ZM7.99978 9.66667C8.4418 9.66667 8.86573 9.49107 9.17829 9.17851C9.49085 8.86595 9.66644 8.44203 9.66644 8C9.66644 7.55797 9.49085 7.13405 9.17829 6.82149C8.86573 6.50893 8.4418 6.33333 7.99978 6.33333C7.55775 6.33333 7.13383 6.50893 6.82126 6.82149C6.5087 7.13405 6.33311 7.55797 6.33311 8C6.33311 8.44203 6.5087 8.86595 6.82126 9.17851C7.13383 9.49107 7.55775 9.66667 7.99978 9.66667Z"
                        fill="#71717A"
                      />
                    </svg>
                  </div>
                  <div
                    @click="showConfirmPassword = true"
                    v-if="showConfirmPassword === false"
                    class=""
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-eye-off"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#27272A"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="3" y1="3" x2="21" y2="21" />
                      <path d="M10.584 10.587a2 2 0 0 0 2.828 2.83" />
                      <path
                        d="M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <ErrorMessage class="text-red-600" name="confirm"></ErrorMessage>
            </div>

            <!-- Receive Notifications checkbox -->
            <div class="col-span-6">
              <label for="MarketingAccept" class="flex gap-4">
                <input
                  type="checkbox"
                  id="MarketingAccept"
                  name="marketing_accept"
                  class="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                />

                <span class="text-sm text-gray-700">
                  I want to receive emails about events, product updates and company announcements.
                </span>
              </label>
            </div>

            <!-- Terms and Conditions -->
            <div class="col-span-6">
              <p class="text-sm text-gray-500">
                By creating an account, you agree to our
                <a class="text-gray-700 underline"> terms and conditions </a>
                and
                <a class="text-gray-700 underline">privacy policy</a>.
              </p>
            </div>

            <!-- Alert box -->
            <div
              v-if="show_alert"
              class="alert shadow-lg mt-3 col-span-3 sm:flex sm:items-center sm:gap-4"
              :class="bg_color"
            >
              <div style="display: flex; align-items: center">
                <svg
                  v-if="bg_color === 'alert-info'"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  style="display: inline-block"
                  class="stroke-current flex-shrink-0 w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <svg
                  v-else-if="bg_color === 'alert-success'"
                  xmlns="http://www.w3.org/2000/svg"
                  class="stroke-current flex-shrink-0 h-6 w-6"
                  style="display: inline-block"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  style="display: inline-block"
                  class="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span class="ml-3" style="display: inline-block">{{ alert_msg }}</span>
              </div>
              <!-- Retry button -->
              <div class="flex-none" v-if="bg_color == 'alert-error'">
                <button class="btn btn-sm">Retry</button>
              </div>
            </div>

            <!-- Login button -->
            <div v-else class="col-span-6 sm:flex sm:items-center sm:gap-4">
              <button
                role="button"
                class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
              >
                Create an account
              </button>
              <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                Already have an account?
                <router-link :to="{ name: 'home' }" class="text-gray-700 underline"
                  >Log in</router-link
                >.
              </p>
            </div>
          </vee-form>
        </div>
      </main>
    </div>
  </section>
</template>

<script>
import { mapWritableState } from 'pinia'
import useUserStore from '@/stores/user.js'

export default {
  name: 'RegistrationView',
  data() {
    return {
      // Whether to show the password in the password field
      showPassword: true,
      // Whether to show the password in the confirm password field
      showConfirmPassword: true,
      // When user clicks on the login button on the form page, show alert and disable (or hide) button
      show_alert: false,
      // Separate show_alert and disable_button properties because it is not necessary that these will have the same values all the time. Example in case of error, show_alert would be true but disable_button would be false
      disable_submission: false,
      // On success or error change the bg color
      bg_color: 'alert-info',
      // On success or error, change the message shown in the alert box
      alert_msg: 'Creating your account...'
    }
  },
  computed: {
    ...mapWritableState(useUserStore, ['loggedIn'])
  },
  methods: {
    async createWithEmail(values) {
      try {
        this.show_alert = true
        this.disable_submission = true
        // TODO: Remove this when you add the actual functionality
        await new Promise((resolve) => setTimeout(resolve, 3000))
        this.loggedIn = true
        this.alert_msg = 'Account created successfully'
        this.bg_color = 'alert-success'
        this.$router.push({ name: 'feed' })
      } catch (error) {
        console.log(error)
        this.alert_msg = 'There was an unexpected error. Please try again.'
        this.bg_color = 'alert-error'
        this.disable_submission = false
      }
    }
  }
}
</script>
