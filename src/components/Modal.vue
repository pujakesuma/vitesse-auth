<script setup lang="ts">
interface Props {
  title?: string
  width: string
  persistent?: boolean
}
// eslint-disable-next-line vue/no-setup-props-destructure
const { title = 'Default Title', width = 'xs', persistent = false } = defineProps<Props>()

const emit = defineEmits<{ (e: 'close'): void }>()

const maxWidth = computed(() => {
  switch (width) {
    case 'xs':
      return 'max-w-lg'
    case 'sm':
      return 'max-w-xl'
    case 'md':
      return 'max-w-2xl'
    case 'lg':
      return 'max-w-3xl'
    case 'full':
      return 'max-w-full'
  }
  return ''
})

const handlePersistent = () => {
  if (persistent) return
  emit('close')
}

</script>

<template>
  <div
    class="
      fixed
      w-full
      h-full
      top-0
      left-0
      flex
      items-center
      justify-center
      z-10
      animated
      fadeIn
      faster
    "
  >
    <div
      class="absolute w-full h-full bg-gray-600 opacity-80 z-40"
      @click="handlePersistent"
    />

    <div class="absolute max-h-full px-2 z-50" :class="maxWidth">
      <div class="container bg-dark overflow-hidden md:rounded">
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
            bg-dark
            border-b-0.5 border-gray-400 border-opacity-50
            select-none
          "
        >
          <h3 class="text-gray-400">
            {{ title }}
          </h3>
          <div
            class="text-2xl text-gray-400 hover:text-gray-500 cursor-pointer"
            @click="emit('close')"
          >
            &#215;
          </div>
        </div>

        <div class="max-h-full p-4 text-gray-400">
          <slot />
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
