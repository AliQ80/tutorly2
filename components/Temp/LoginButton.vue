<script setup lang='ts'>
import { useUsersStore } from '@/stores/users';

const users = useUsersStore();

// const firstName = users.firstName;
// const lastName = users.lastName;

function handleClickTeacher() {
    console.log('Teacher clicked');
    users.firstName = 'علي'
    users.lastName = 'كرم'
}
function handleClickStudent() {
    console.log('Student clicked');
    users.firstName = 'احمد'
    users.lastName = 'علي'
}
function handleClickLogout() {
    console.log('Logout clicked');
    users.reset()
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