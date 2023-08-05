<script lang="ts" setup>
import { ref } from 'vue'

const collapsed = ref<boolean>(false)
const selectedKeys = ref<string[]>(['1'])
</script>

<template>
  <ClientOnly>
    <a-layout style="min-height: 100vh">
      <a-layout-sider v-model:collapsed="collapsed" collapsible>
        <div class="logo" />
        <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
          <NuxtLink to="/dashboard">
            <a-menu-item key="1">
              <fund-outlined :style="{ fontSize: '28px' }" />
              <span>لوحة التحكم</span>
            </a-menu-item>
          </NuxtLink>

          <NuxtLink to="/search">
            <a-menu-item key="2">
              <search-outlined :style="{ fontSize: '28px' }" />
              <span>البحث</span>
            </a-menu-item>
          </NuxtLink>

          <!-- <a-menu-item key="3">
            <FileOutlined />
            <span>File</span>
          </a-menu-item> -->
        </a-menu>
      </a-layout-sider>
      <a-layout style="background: #1C2025; padding: 0">
        <slot />
      </a-layout>
    </a-layout>
  </ClientOnly>
</template>

<style scoped>
#components-layout-demo-side .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
}
</style>
