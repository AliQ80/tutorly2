<!-- eslint-disable no-console -->
<script setup lang='ts'>
import userAvatar from '@/components/UserAvatar.vue'
// import { storeToRefs } from 'pinia'
import { useStudentsStore, useTeachersStore, useUsersStore } from '@/stores/users'

const users = useUsersStore()
const teachers = useTeachersStore()
const students = useStudentsStore()

// const { fullName, role } = storeToRefs(users)
// const { subjects, grades, rating } = storeToRefs(teachers)
// const { grade, school, area } = storeToRefs(students)

function starRatingRole() {
  if (users.role === 'student') {
    console.log(users.role)
    return false
  }
  else if (users.role === 'teacher') {
    console.log(users.role)
    return true
  }
}
</script>

<template>
  <div>
    <div v-if="users.role !== ''" class="card w-80 bg-base-100 shadow-xl mx-8 my-8 border-2 border-gray-700">
      <userAvatar />
      <div class="card-body items-center text-center">
        <h2 class="card-title">
          الاسم: {{ users.fullName }}
        </h2>
        <div v-if="users.role === 'teacher'">
          <p>التخصص: <span>{{ teachers.subjects.toString() }}</span></p>
          <p>المرحلة: {{ teachers.grades.toString() }}</p>
          <p>
            التقييم:
            <NuxtRating :read-only="starRatingRole" :rating-value="teachers.rating" />
          </p>
          <div class="card-actions justify-center mt-4">
            <NuxtLink to="/booking" class="btn btn-primary">
              احجز موعد
            </NuxtLink>
          </div>
        </div>
        <div v-if="users.role === 'student'">
          <p>المرحلة: {{ students.grade }}</p>
          <p>المدرسة: {{ students.school }}</p>
          <p>المنطقة: {{ students.area }}</p>
          <p />
          <div class="card-actions" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
