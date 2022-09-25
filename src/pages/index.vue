<script setup lang="ts">
import { isDark, toggleDark } from '~/composables'
import authApi from '~/api/modules/auth'
import { useClassStore } from '~/store/class'
const router = useRouter()
const store = useClassStore()

// computed
const classes = computed(() => store.getClasses)
const isFetching = computed(() => store.isFetching)

// method
const onClick = (id: number | string): void => {
  if (id)
    router.push(`/class/${encodeURIComponent(id)}`)
}

const login = async() => {
  try {
    await authApi.login()
  }
  catch (error) {
    console.error(error)
    throw error
  }
}

const fetchClass = async() => {
  await store.getAvailableClass()
}

// mounted
onMounted(() => {
  fetchClass()
})
</script>

<template>
  <div h-full flex justify-center pt-4rem>
    <div class="px-8 lg:px-0">
      <h1 class="text-3xl sm:text-5xl font-bold capitalize mb-4 sm:mb-4 md:mb-8">
        my learn app
      </h1>
      <p class="mx-auto max-w-auto lg:max-w-4xl mb-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic nihil rem voluptatem cum accusamus id eius laboriosam natus culpa, adipisci consectetur saepe a perferendis illo aperiam facere architecto quasi quia?
      </p>
      <button
        class="text-sm btn"
        @click="login"
      >
        Login
      </button>
      <div v-if="isFetching" class="max-w-auto lg:max-w-4xl h-auto grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-y-0 lg:gap-x-4 animate-pulse">
        <Card v-for="i in 2" :key="i" custom-class="w-full rounded-lg">
          <div rounded-xl h-6 bg-gray-400 mb-4 class="w-1/4" />
          <div v-for="idx in 3" :key="idx" rounded-xl h-3 bg-gray-400 mb-2 class="w-3/5" />
          <div class="w-1/4" h-4 bg-gray-400 mt-4 rounded-xl />
        </Card>
      </div>
      <div v-else class="max-w-auto lg:max-w-4xl h-auto grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-y-0 lg:gap-x-4">
        <Card v-for="(item, i) in classes" :key="i" custom-class="w-full rounded-lg">
          <h2 text-2xl font-bold class="mb-2 text-gray-700 dark:text-gray-200">
            {{ item.name }}
          </h2>
          <p leading-normal class="mb-8 text-gray-700 dark:text-gray-200">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatem, at optio
          </p>
          <button
            class="text-sm btn"
            @click="onClick(item.id)"
          >
            Lihat Selengkapnya
          </button>
        </Card>
      </div>
      <div class="absolute top-4 right-0 h-12 w-18 p-4">
        <button class="icon-btn !outline-none" @click="toggleDark()">
          <div v-if="isDark" i-carbon-moon />
          <div v-else i-carbon-sun />
        </button>
      </div>
    </div>
  </div>
</template>
