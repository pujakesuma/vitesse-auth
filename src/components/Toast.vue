<script setup lang="ts">
import { useClassStore } from '~/store/class'
const store = useClassStore()
// eslint-disable-next-line vue/no-setup-props-destructure
const isShownToast = computed(() => store.getToast)
const isSuccess = computed(() => store.getIsSuccess ? 'bg-green-600' : 'bg-red-600')
const message = computed(() => store.getMessage)

</script>

<template>
  <div
    v-if="isShownToast"
    class="
      fixed
      w-full
      h-full
      top-0
      left-0
      flex
      justify-center
      z-10
      animated
      fadeIn
      faster
    "
  >
    <div class="absolute max-h-full top-8 px-2 z-50 w-xs lg:w-2xl">
      <div class="container overflow-hidden rounded">
        <div
          class="
            px-4
            py-4
            leading-none
            flex
            justify-between
            items-center
            font-medium
            text-sm
            bg-green-600
            select-none
          "
          :class="isSuccess"
        >
          <h3 class="text-gray-100">
            {{ message }}
          </h3>
          <div
            class="text-2xl text-gray-100 hover:text-gray-200 cursor-pointer"
          >
            &#215;
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.animated.faster {
  -webkit-animation-duration: 300ms;
  animation-duration: 300ms;
}

.fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}

.fadeOut {
  -webkit-animation-name: fadeOut;
  animation-name: fadeOut;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
</style>
