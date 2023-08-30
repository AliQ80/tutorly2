<template>
  <div>
    <Html dir="rtl">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Html>
  </div>
</template>

<style lang="postcss">
[data-floating-label=true] input:focus~.formkit-label {
  @apply bg-base-100;
}
</style>
