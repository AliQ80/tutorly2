import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users', () => {
  const firstName = ref('')
  const lastName = ref('')
  const email = ref('')
  const password = ref('')
  const role = ref('')
  const rating = ref(0)

  const fullName = computed(() => {
    return firstName.value + ' ' + lastName.value
  })
  const initals = computed(() => {
    return firstName.value.charAt(0) + lastName.value.charAt(0)
  })

  function reset() {
    firstName.value = ''
    lastName.value = ''
    email.value = ''
    password.value = ''
    role.value = ''
    rating.value = 0
  }

  return {
    firstName,
    lastName,
    email,
    password,
    role,
    fullName,
    initals,
    rating,
    reset,
  }
})
