<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const toLogin = () => {
  router.push('/')
}
</script>
<template>
  <div class="flex flex-col gap-4">
    <main>
      <RouterView />
    </main>
    <!-- <Hand /> -->
    <TestDrag />
  </div>
</template>
