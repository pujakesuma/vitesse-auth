<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div>
    Not Found
    <div>
      <button
        class="btn m-3 text-sm mt-8"
        @click="router.back()"
      >
        Back
      </button>
    </div>
  </div>
</template>
