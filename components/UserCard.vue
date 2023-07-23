<script setup lang='ts'>
import { storeToRefs } from 'pinia';
import { useUsersStore } from '@/stores/users';
const users = useUsersStore();

const { fullName } = storeToRefs(users)

</script>

<template>
    <div>
        <div class="card w-96 bg-base-100 shadow-xl border-2 border-gray-700">
            <figure class="px-10 pt-10">
                <div class="avatar">
                    <div class="w-48 mask mask-squircle">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">الاسم: {{ fullName }}</h2>
                <p>التخصص: حاسوب</p>
                <p>المرحلة: الثانوية</p>
                <p>التقييم:</p>
                <p></p>
                <div class="card-actions">
                    <button class="btn btn-primary">احجز موعد</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>