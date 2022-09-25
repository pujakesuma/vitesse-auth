<script setup lang="ts">
import { useClassStore } from '~/store/class'
const store = useClassStore()

const attendeeFullName = $ref<string>('')
const attendeeEmail = $ref<string>('')

// field validation
const handleName = computed(() => attendeeFullName.length > 3)
const handleEmail = computed(() => attendeeEmail.length > 3)

const onSubmit = () => {
  store.register(attendeeFullName, attendeeEmail)
}
</script>

<template>
  <form class="flex flex-col space-y-4" @submit.prevent="onSubmit">
    <input
      id="attendeeFullName"
      v-model="attendeeFullName"
      placeholder="Nama Lengkap"
      type="text"
      autocomplete="false"
      p="x-4 y-2"
      w="250px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
      @keydown.enter="onSubmit"
    >
    <input
      id="attendeeEmail"
      v-model="attendeeEmail"
      placeholder="Email"
      type="text"
      autocomplete="false"
      p="x-4 y-2"
      w="250px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
      @keydown.enter="onSubmit"
    >
    <button
      p="x-4 y-3"
      class="btn text-sm rounded-full"
      :disabled="!handleName && !handleEmail"
      type="submit"
    >
      Daftar
    </button>
  </form>
</template>
