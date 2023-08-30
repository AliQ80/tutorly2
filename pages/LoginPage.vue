<script setup lang='ts'>
definePageMeta({
  alias: ['/login'],
})
useHead({
  title: 'login | Tutorly',
})

// const supabase = useSupabaseClient()
// const email = ref('')

// async function signInWithOtp() {
//   const { error } = await supabase.auth.signInWithOtp({
//     email: email.value,
//     options: {
//       emailRedirectTo: 'http://localhost:3000/confirm',
//     },
//   })
//   if (error)
//     console.error(error)
// }
</script>

<template>
  <div>
    <!-- <button @click="signInWithOtp">
      Sign In with E-Mail
    </button>
    <input
      v-model="email"
      type="email"
    > -->
    <LoginForm dir="ltr" />
  </div>
</template>

<style scoped>

</style>
