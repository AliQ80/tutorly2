<script setup lang='ts'>
definePageMeta({
  alias: ['/confirm'],
})
useHead({
  title: 'confirm | Tutorly',
})

const user = useSupabaseUser()

watch(user, () => {
  if (user.value)
    return navigateTo('/')
}, { immediate: true })
</script>

<template>
  <div>
    <div>Waiting for login...</div>
  </div>
</template>

<style scoped>

</style>
