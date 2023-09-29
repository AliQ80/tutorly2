<script setup lang='ts'>
import { useStudentsStore, useTeachersStore, useUsersStore } from '@/stores/users'
import MyPhoto from '@/assets/images/MyPhoto.jpg'

const usersInfo = useUsersStore()
const teachersInfo = useTeachersStore()
const studentsInfo = useStudentsStore()

function handleClickTeacher() {
  usersInfo.$patch({
    firstName: 'علي',
    lastName: 'كرم',
    avatar: MyPhoto,
    role: 'teacher',
    authenticated: true,
  })

  teachersInfo.$patch({
    rating: 4,
    subjects: ['حاسوب', 'المعلوماتية'],
    grades: ['الثاني عشر', 'الحادي عشر'],
  })

  studentsInfo.resetStudent()
}
function handleClickStudent() {
  usersInfo.$patch({
    firstName: 'احمد',
    lastName: 'علي',
    avatar: '',
    role: 'student',
    authenticated: true,
  })
  studentsInfo.$patch({
    grade: 'الثانوية',
    school: 'ابن العميد',
    area: 'العمرية',
  })
  teachersInfo.resetTeacher()
}
function handleClickLogout() {
  // console.log('Logout clicked')
  usersInfo.resetUser()
  teachersInfo.resetTeacher()
  studentsInfo.resetStudent()
}
</script>

<template>
  <div>
    <NuxtLink to="/dashboard" class="tmp-btn" @click="handleClickTeacher">
      Teacher
    </NuxtLink>
    <NuxtLink to="/dashboard" class="tmp-btn" @click="handleClickStudent">
      Student
    </NuxtLink>
    <NuxtLink to="/" class="tmp-btn" @click="handleClickLogout">
      Logout
    </NuxtLink>
  </div>
</template>

<style scoped lang="postcss">
.tmp-btn {
    @apply btn btn-primary mx-1 btn-xs;
}
</style>
