<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const toLogin = () => {
  router.push('/')
}
</script>
<template>
  <div class="flex flex-col gap-4 w-screen">
    <main>
      <RouterView />
    </main>
    <Hand />
  </div>
</template>
