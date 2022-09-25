<script setup lang="ts">
import { useClassStore } from '~/store/class'
import { isDark, toggleDark } from '~/composables'
import Toast from '~/components/Toast.vue'
const props = defineProps<{ name: string }>()
const router = useRouter()
const store = useClassStore()

const idClass = parseInt(props.name)
const isOpen = ref<boolean>(false)

const isFetching = computed(() => store.isFetching)
const detail = computed(() => store.getDetailClass)

const handleDialog = () => {
  isOpen.value = !isOpen.value
}

const handleBack = () => router.push('/')

// mounted
onMounted(() => {
  store.fetchDetail(idClass)
})
</script>

<template>
  <div v-if="isFetching" class="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
    <Card>
      <div class="p-4 md:p-12 text-center lg:text-left animate-pulse">
        <div class="block mb-4 lg:hidden rounded-full bg-gray-400 shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center" />
        <div class="mb-4 sm:mb-4 md:mb-0 w-full">
          <div rounded-xl h-6 bg-gray-400 mb-4 class="w-1/4" />
          <div v-for="idx in 3" :key="idx" rounded-xl h-3 bg-gray-400 mb-2 class="w-3/5" />
          <div class="w-1/4" h-4 bg-gray-400 mt-4 rounded-xl />
        </div>
      </div>
    </Card>
    <div class="w-full lg:w-2/5 h-1/2 rounded-r-xl bg-cover bg-center hidden lg:block bg-gray-600" />
  </div>

  <div v-else relative class="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
    <!--Main Col-->
    <div class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl opacity-75 mx-6 lg:mx-0">
      <div class="p-4 md:p-12 text-center lg:text-left">
        <!-- Image for mobile view-->
        <div class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center" style="background-image: url('https://source.unsplash.com/XJXWbfSo2f0')" />

        <h1 class="text-3xl font-bold pt-8 lg:pt-0">
          {{ detail.name }}
        </h1>
        <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25" />
        <div class="flex justify-center space-x-4 lg:justify-start">
          <p class="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
            <span mr-1 i-carbon-tag />
            Gratis
          </p>
          <p class="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
            <span mr-1 i-carbon-wikis />
            Pemula
          </p>
        </div>
        <p class="pt-8 text-sm">
          {{ detail.description }}
        </p>

        <div class="mt-4">
          <p class="text-gray-600 text-xs">
            oleh :
          </p>
          <div v-for="(mentor, i) in detail.mentors" :key="i" class="pt-2 text-gray-600 text-xs lg:text-sm text-left flex justify-center space-x-1 lg:justify-start">
            <p class="font-bold">
              {{ mentor.name }}
            </p>
            <p>
              {{ mentor.description }}
            </p>
          </div>
        </div>

        <div class="pt-12 pb-8">
          <button class="btn text-white font-bold py-2 px-4 rounded-full" @click="handleDialog()">
            Daftar Sekarang
          </button>
        </div>
      </div>
    </div>

    <!--Img Col-->
    <div class="w-full lg:w-2/5 h-1/2 rounded-r-xl bg-cover bg-center hidden lg:block" style="background: url('https://source.unsplash.com/XJXWbfSo2f0')" />

    <Modal v-if="isOpen" width="md" :is-open="isOpen" :persistent="true" title="Daftar" @close="handleDialog">
      <div class="p-4">
        <Register />
      </div>
    </Modal>
    <Toast />
  </div>
  <!-- Toggler. TODO : Pin to top right corner -->
  <div class="absolute top-4 left-0 h-12 w-18 p-4">
    <button class="icon-btn !outline-none" @click="handleBack()">
      <div i-carbon-arrow-left />
    </button>
  </div>
  <div class="absolute top-4 right-0 h-12 w-18 p-4">
    <button class="icon-btn !outline-none" @click="toggleDark()">
      <div v-if="isDark" i-carbon-moon />
      <div v-else i-carbon-sun />
    </button>
  </div>
</template>
