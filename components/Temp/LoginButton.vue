<script setup lang='ts'>
import { useUsersStore, useTeachersStore, useStudentsStore } from '@/stores/users';
import MyPhoto from '@/assets/images/MyPhoto.jpg'

const usersInfo = useUsersStore();
const teachersInfo = useTeachersStore();
const studentsInfo = useStudentsStore();

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
    });

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
        <NuxtLink to="/dashboard" @click="handleClickTeacher" class="tmp-btn">Teacher</NuxtLink>
        <NuxtLink to="/dashboard" @click="handleClickStudent" class="tmp-btn">Student</NuxtLink>
        <NuxtLink to="/" @click="handleClickLogout" class="tmp-btn">Logout</NuxtLink>
    </div>
</template>

<style scoped lang="postcss">
.tmp-btn {
    @apply btn btn-primary mx-1 btn-xs;
}
</style>