<script setup lang='ts'>
import { storeToRefs } from 'pinia';
import { useUsersStore, useTeachersStore, useStudentsStore } from '@/stores/users';

const usersInfo = useUsersStore();
const teachersInfo = useTeachersStore();
const studentsInfo = useStudentsStore();

function handleClickTeacher() {
    usersInfo.$patch({
        firstName: 'علي',
        lastName: 'كرم',
        avatar: '/assets/images/MyPhoto.jpg',
        role: 'teacher',
    })
    teachersInfo.$patch({
        supjects: [' حاسوب', ' المعلوماتية'],
        grades: [' الثاني عشر', ' الحادي عشر'],
        rating: 4,
    })
}
function handleClickStudent() {
    usersInfo.$patch({
        firstName: 'احمد',
        lastName: 'علي',
        avatar: '',
        role: 'student',
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
        <button @click="handleClickLogout" class="tmp-btn">Logout</button>
    </div>
</template>

<style scoped lang="postcss">
.tmp-btn {
    @apply btn btn-primary mx-1 btn-xs;
}
</style>