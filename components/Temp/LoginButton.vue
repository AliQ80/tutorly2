<script setup lang='ts'>
// import { storeToRefs } from 'pinia';
import { useUsersStore, useTeachersStore, useStudentsStore } from '@/stores/users';

const usersInfo = useUsersStore();
const teachersInfo = useTeachersStore();
const studentsInfo = useStudentsStore();

// const { rating, subjects, grades } = storeToRefs(teachersInfo);

function handleClickTeacher() {
    usersInfo.$patch({
        firstName: 'علي',
        lastName: 'كرم',
        avatar: '/assets/images/MyPhoto.jpg',
        role: 'teacher',
        authenticated: true,
    })

    teachersInfo.$patch({
        rating: 4,
        subjects: ['حاسوب', 'المعلوماتية'],
        grades: ['الثاني عشر', 'الحادي عشر'],
    });

    // rating.value = 4
    // subjects.value = ['حاسوب', 'المعلوماتية']
    // grades.value = ['الثاني عشر', 'الحادي عشر']

    studentsInfo.resetStudent();
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
    console.log('Logout clicked');
    usersInfo.resetUser()
    teachersInfo.resetTeacher()
    studentsInfo.resetStudent()
}
</script>

<template>
    <div>
        <button @click="handleClickTeacher" class="tmp-btn">Teacher</button>
        <button @click="handleClickStudent" class="tmp-btn">Student</button>
        <NuxtLink to="/" @click="handleClickLogout" class="tmp-btn">Logout</NuxtLink>
    </div>
</template>

<style scoped lang="postcss">
.tmp-btn {
    @apply btn btn-primary mx-1 btn-xs;
}
</style>