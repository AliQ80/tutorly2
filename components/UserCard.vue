<script setup lang='ts'>
import { storeToRefs } from 'pinia';
import { useUsersStore, useTeachersStore, useStudentsStore } from '@/stores/users';
import userAvatar from '@/components/UserAvatar.vue'

const users = useUsersStore();
const teachers = useTeachersStore();
const students = useStudentsStore();

const { fullName, role } = storeToRefs(users)
const { supjects, grades, rating } = storeToRefs(teachers)
const { grade, school, area } = storeToRefs(students)
</script>

<template>
    <div>
        <div v-if="role !== ''" class="card w-80 bg-base-100 shadow-xl mx-8 my-8 border-2 border-gray-700">
            <userAvatar />
            <div class="card-body items-center text-center">
                <h2 class="card-title">الاسم: {{ fullName }}</h2>
                <div v-if="role === 'teacher'">
                    <p>التخصص: <span>{{ supjects.toString() }}</span></p>
                    <p>المرحلة: {{ grades.toString() }}</p>
                    <p>التقييم: {{ rating }}</p>
                    <div class="card-actions justify-center mt-4">
                        <button class="btn btn-primary">احجز موعد</button>
                    </div>
                </div>
                <div v-if="role === 'student'">
                    <p>المرحلة: {{ grade }}</p>
                    <p>المدرسة: {{ school }}</p>
                    <p>المنطقة: {{ area }}</p>
                    <p></p>
                    <div class="card-actions">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>