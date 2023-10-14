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
    <div class="flex items-center justify-center mt-20 text-2xl">
      <h1>هل انت طالب أم معلم؟</h1>
    </div>
    <div class="flex items-center justify-center mt-10 join">
      <button class="w-20 btn btn-info join-item">
        طالب
      </button>

      <button class="w-20 btn btn-success join-item">
        معلم
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>
