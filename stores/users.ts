import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users', () => {
  const firstName = ref('')
  const lastName = ref('')
  const email = ref('')
  const password = ref('')
  const role = ref('')
  const avatar = ref('')
  const gender = ref('')

  const fullName = computed(() => {
    return firstName.value + ' ' + lastName.value
  })
  const initals = computed(() => {
    return firstName.value.charAt(0) + lastName.value.charAt(0)
  })

  function resetUser() {
    firstName.value = ''
    lastName.value = ''
    email.value = ''
    password.value = ''
    role.value = ''
    avatar.value = ''
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
    initals,
    resetUser,
  }
})

export const useTeachersStore = defineStore('teachers', () => {
  const rating = ref(0)
  const supjects = ref([]) as Ref<any[]>
  const grades = ref([])

  function resetTeacher() {
    rating.value = 0
    supjects.value = []
    grades.value = []
  }

  return {
    rating,
    supjects,
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
