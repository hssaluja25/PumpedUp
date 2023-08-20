<template>
  <div class="fixed top-24 right-0 w-2/5">
    <div class="flex items-center justify-center">
      <div class="w-full max-w-md p-6 bg-white rounded-2xl shadow-xl flex flex-col">
        <!-- Left arrow, month and right arrow -->
        <div class="flex justify-between pb-4">
          <!-- Left Arrow -->
          <div class="-rotate-90 cursor-pointer">
            <svg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.001 6L6.00098 1L1.00098 6"
                stroke="black"
                stroke-opacity="0.4"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <!-- Month-Year -->
          <span class="uppercase text-sm font-semibold text-gray-600">september - 2023</span>
          <!-- Right arrow -->
          <div class="rotate-90 cursor-pointer">
            <svg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.001 6L6.00098 1L1.00098 6"
                stroke="black"
                stroke-opacity="0.4"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        <!-- Days -->
        <div class="flex justify-between font-medium uppercase text-xs pt-4 pb-2 border-t">
          <div
            class="px-3 border rounded-sm w-14 h-5 flex items-center justify-center border-[#b62648] text-[#b62648] shadow-md"
          >
            sun
          </div>

          <span
            class="px-3 border rounded-sm w-14 h-5 flex items-center justify-center border-[#b62648] text-[#b62648] shadow-md"
          >
            mon
          </span>

          <span
            class="px-3 border rounded-sm w-14 h-5 flex items-center justify-center border-[#b62648] text-[#b62648] shadow-md"
          >
            tue
          </span>

          <span
            class="px-3 border rounded-sm w-14 h-5 flex items-center justify-center border-[#b62648] text-[#b62648] shadow-md"
          >
            wed
          </span>

          <span
            class="px-3 border rounded-sm w-14 h-5 flex items-center justify-center border-[#b62648] text-[#b62648] shadow-md"
          >
            thu
          </span>

          <span
            class="px-3 border rounded-sm w-14 h-5 flex items-center justify-center border-[#b62648] text-[#b62648] shadow-md"
          >
            fri
          </span>

          <span
            class="px-3 border rounded-sm w-14 h-5 flex items-center justify-center border-[#b62648] text-[#b62648] shadow-md"
          >
            sat
          </span>
        </div>

        <!-- 1st row -->
        <div class="flex justify-between font-medium text-sm pb-2">
          <span
            class="px-1 text-gray-400 w-14 flex justify-center items-center border-green-200 bg-green-100"
          >
            27
          </span>
          <span
            class="px-1 text-gray-400 w-14 flex justify-center items-center border-green-200 bg-green-100"
          >
            28
          </span>
          <span
            class="px-1 text-gray-400 w-14 flex justify-center items-center border-green-200 bg-green-100"
          >
            29
          </span>
          <span
            class="px-1 text-gray-400 w-14 flex justify-center items-center border-green-200 bg-green-100"
          >
            30
          </span>
          <span
            class="px-1 text-gray-400 w-14 flex justify-center items-center border-green-200 bg-green-100"
          >
            31
          </span>

          <span
            class="px-1 w-14 flex justify-center items-center border border-red-500 text-white bg-red-500 rounded-2xl cursor-pointer shadow-md"
          >
            01
          </span>

          <span
            class="px-1 w-14 flex justify-center items-center border border-green-500 text-white bg-green-500 rounded-2xl cursor-pointer shadow-md"
          >
            02
          </span>
        </div>

        <!-- 2nd row -->
        <div class="flex justify-between font-medium text-sm pb-2">
          <span
            class="px-1 w-14 flex justify-center items-center border border-green-500 text-white bg-green-500 rounded-2xl cursor-pointer shadow-md"
          >
            03
          </span>

          <span
            class="px-1 w-14 flex justify-center items-center border border-green-500 text-white bg-green-500 rounded-2xl cursor-pointer shadow-md"
          >
            04
          </span>

          <span
            class="px-1 w-14 flex justify-center items-center border border-red-500 text-white bg-red-500 rounded-2xl cursor-pointer shadow-md"
          >
            05
          </span>

          <span
            class="px-1 w-14 flex justify-center items-center border border-green-500 text-white bg-green-500 rounded-2xl cursor-pointer shadow-md"
          >
            06
          </span>
          <span
            class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer"
          >
            07
          </span>
          <span
            class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer"
          >
            08
          </span>
          <span
            class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer"
          >
            09
          </span>
        </div>

        <!-- 3rd row -->
        <div class="flex justify-between font-medium text-sm pb-2">
          <span
            class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer"
          >
            10
          </span>

          <span
            class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer"
          >
            11
          </span>

          <span
            class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer"
          >
            12
          </span>

          <span
            class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer"
          >
            13
          </span>
          <span
            class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer"
          >
            14
          </span>
          <span
            class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer"
          >
            15
          </span>
          <span
            class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer"
          >
            16
          </span>
        </div>

        <!-- 4th row -->
        <div class="flex justify-between font-medium text-sm pb-2">
          <span
            class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer"
          >
            17
          </span>

          <span
            class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer"
          >
            18
          </span>

          <span
            class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer"
          >
            19
          </span>

          <span
            class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer"
          >
            20
          </span>

          <span
            class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer"
          >
            21
          </span>
          <span
            class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer"
          >
            22
          </span>

          <!-- <span
          class="px-1 w-14 flex justify-center items-center border border-green-500 text-white bg-green-500 rounded-2xl cursor-pointer shadow-md"
        >
          22
        </span> -->

          <span
            class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer"
          >
            23
          </span>
        </div>

        <!-- Last row -->
        <div class="flex justify-between font-medium text-sm pb-2">
          <span
            class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer"
          >
            24
          </span>

          <span
            class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer"
          >
            25
          </span>

          <span
            class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer"
          >
            26
          </span>

          <span
            class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer"
          >
            27
          </span>
          <span
            class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer"
          >
            28
          </span>
          <span
            class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer"
          >
            29
          </span>
          <span
            class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer"
          >
            30
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
