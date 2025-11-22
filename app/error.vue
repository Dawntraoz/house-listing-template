<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps<{
  error: NuxtError;
}>();

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <section class="flex flex-col min-h-screen font-sans bg-secondary-10">
    <LayoutHeader />
    <main
      class="flex-auto container mx-auto p-4 flex flex-col justify-center items-center gap-4 text-center"
    >
      <IconError class="mb-2 w-48 md:w-72" />
      <h2 class="text-6xl font-semibold">{{ error?.statusCode }}</h2>
      <p>{{ error?.statusMessage }}</p>
      <button @click="handleError" :class="$style['btn-link']">
        Go back home
      </button>
    </main>
    <LayoutFooter />
  </section>
</template>

<style module>
.btn-link {
  @apply underline text-secondary-70 hover:text-secondary-90;
}
</style>
