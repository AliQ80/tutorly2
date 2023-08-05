<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useUsersStore } from '@/stores/users'

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
    <SideMenu v-if="isLoggedIn()" dir="ltr">
      <slot />
    </SideMenu>
    <slot v-else />
  </div>
</template>
