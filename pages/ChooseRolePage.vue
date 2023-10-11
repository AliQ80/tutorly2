<script setup lang='ts'>
definePageMeta({
  alias: ['/role'],
})
useHead({
  title: 'Choose Role | Tutorly',
})
</script>

<template>
  <div>
    <div class="flex items-center justify-center">
      <h1>Choose Role</h1>
    </div>
    <div class="flex items-center justify-center h-screen join">
      <button class="w-20 btn btn-info join-item">
        Info
      </button>

      <button class="w-20 btn btn-success join-item">
        Success
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>
