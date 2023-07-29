<script setup lang='ts'>
import { storeToRefs } from 'pinia'
import { useUsersStore } from '@/stores/users'

const users = useUsersStore()
const { avatar, initials } = storeToRefs(users)
</script>

<template>
  <div>
    <div class="dropdown dropdown-right">
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div v-if="users.avatar" class="w-10 rounded-full">
          <img :src="avatar">
        </div>
        <div v-else class="avatar placeholder">
          <div
            class="w-10 bg-primary-focus text-neutral-content rounded-full"
          >
            <span class="text-lg">{{ initials }}</span>
          </div>
        </div>
      </label>
      <ul
        tabindex="0"
        class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-32"
      >
        <li>
          <NuxtLink class="justify-between">
            الملف الشخصي
          </NuxtLink>
        </li>
        <li>
          <NuxtLink>الاعدادات</NuxtLink>
        </li>
        <li>
          <NuxtLink class="bg-secondary-focus">
            الخروج
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
