<template>
  <div>
    <Html class="arabic">
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

.arabic {
  direction: rtl;
  font-family: Tajawal;
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 600;
}
</style>
