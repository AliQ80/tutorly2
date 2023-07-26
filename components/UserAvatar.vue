<script setup lang='ts'>
import { storeToRefs } from 'pinia';
import { useUsersStore } from '@/stores/users';

const users = useUsersStore();

const { initals } = storeToRefs(users)
</script>

<template>
    <div>
        <figure v-if="users.avatar" class="px-10 pt-10">
            <div class="avatar">
                <div class="w-48 mask mask-squircle">
                    <img :src='users.avatar' />
                </div>
            </div>
        </figure>
        <figure v-else class="px-10 py-10">
            <div class="avatar placeholder">
                <div
                    class="bg-neutral-focus text-neutral-content rounded-full w-48 ring ring-primary ring-offset-base-100 ring-offset-2">
                    <span class="text-6xl">{{ initals }}</span>
                </div>
            </div>
        </figure>

    </div>
</template>

<style scoped></style>