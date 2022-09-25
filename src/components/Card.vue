<script setup lang="ts">
interface Props {
  customClass?: string
}

// eslint-disable-next-line vue/no-setup-props-destructure
const { customClass = 'w-full lg:w-3/5' } = defineProps<Props>()

</script>

<template>
  <div class="rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl opacity-75" :class="customClass">
    <div class="p-4 md:p-12 text-center lg:text-left">
      <slot />
    </div>
  </div>
</template>
