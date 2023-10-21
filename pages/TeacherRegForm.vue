<script setup lang='ts'>
definePageMeta({
  alias: ['/register-teacher'],
})
useHead({
  title: 'Teacher Registration | Tutorly',
})
</script>

<template>
  <div>
    TeacherRegForm
    <RegisterForm role-prop="teacher" />
  </div>
</template>

<style scoped>

</style>
