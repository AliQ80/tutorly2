<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUsersStore } from '@/stores/users'

// const user = useSupabaseUser()
// console.error(user)

const users = useUsersStore()
const { authenticated } = storeToRefs(users)
function isLoggedIn() {
  if (authenticated.value === true)
    return true
  else if (authenticated.value === false)
    return false
}
// console.log(authenticated.value);
// console.log(loggedIn);
</script>

<template>
  <div>
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NuxtLink to="/">
                الرئيسية
              </NuxtLink>
            </li>
            <li>
              <summary>من نحن</summary>
              <ul class="p-2">
                <li>
                  <NuxtLink>الخدمات</NuxtLink>
                </li>
                <li>
                  <NuxtLink>فريق العمل</NuxtLink>
                </li>
              </ul>
            </li>
            <li>
              <NuxtLink>الاتصال بنا</NuxtLink>
            </li>
          </ul>
        </div>
        <nuxt-link to="/">
          <img src="/tutorly-logo.png" alt="tutorly logo" class="w-8">
        </nuxt-link>

        <NuxtLink to="/" class="text-xl normal-case btn">
          Tutorly
        </NuxtLink>
      </div>
      <div class="hidden navbar-center lg:flex">
        <ul class="px-1 menu menu-horizontal">
          <li>
            <NuxtLink>الاتصال بنا</NuxtLink>
          </li>
          <li tabindex="0">
            <details>
              <summary>من نحن</summary>
              <ul class="p-2">
                <li>
                  <NuxtLink>الخدمات</NuxtLink>
                </li>
                <li>
                  <NuxtLink>فريق العمل</NuxtLink>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <NuxtLink to="/">
              الرئيسية
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="navbar-end">
        <div v-if="isLoggedIn()">
          <AvatarNavbar />
        </div>
        <div v-else>
          <NuxtLink to="/login" class="btn btn-accent">
            ابدأ هنا
          </NuxtLink>
        </div>
      </div>
    </div>
    <TempLoginButton />
  </div>
</template>
