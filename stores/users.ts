import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users', () => {
  const firstName = ref('')
  const lastName = ref('')
  const email = ref('')
  const password = ref('')
  const role = ref('')
  const avatar = ref('')
  const gender = ref('')
  const authenticated = ref(false)

  const fullName = computed(() => {
    return firstName.value + ' ' + lastName.value
  })
  const initials = computed(() => {
    return firstName.value.charAt(0) + lastName.value.charAt(0)
  })

  function resetUser() {
    firstName.value = ''
    lastName.value = ''
    email.value = ''
    password.value = ''
    role.value = ''
    avatar.value = ''
    authenticated.value = false
  }

  return {
    firstName,
    lastName,
    email,
    password,
    role,
    avatar,
    gender,
    fullName,
    initials,
    resetUser,
    authenticated,
  }
})

export const useTeachersStore = defineStore('teachers', () => {
  const rating = ref(0)
  const subjects = ref([]) as Ref<string[]>
  const grades = ref([]) as Ref<string[]>

  function resetTeacher() {
    rating.value = 0
    subjects.value = []
    grades.value = []
  }

  return {
    rating,
    subjects,
    grades,
    resetTeacher,
  }
})

export const useStudentsStore = defineStore('students', () => {
  const grade = ref('')
  const school = ref('')
  const area = ref('')

  function resetStudent() {
    grade.value = ''
    school.value = ''
    area.value = ''
  }

  return {
    grade,
    school,
    area,
    resetStudent,
  }
})
