<script lang="ts" setup>
import { useUsersStore } from '@/stores/users'
import { storeToRefs } from 'pinia'

const users = useUsersStore()
const { authenticated } = storeToRefs(users)
function isLoggedIn() {
  if (authenticated.value === true)
    return true
  else if (authenticated.value === false)
    return false
}
</script>

<template>
  <div>
    <MainNavbar dir="ltr" />
    <div class="flex">
      <SideMenu v-if="isLoggedIn()" />
      <div class="flex-grow">
        <slot />
      </div>
    </div>
  </div>
</template>
