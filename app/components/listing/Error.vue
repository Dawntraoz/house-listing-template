<script setup lang="ts">
defineProps<{
  code?: number;
  message?: string;
}>();
</script>

<template>
  <IconError class="w-48 md:w-72" />

  <h2 class="text-6xl font-semibold">{{ code ?? "unknown" }}</h2>
  <p class="text-gray-700">
    {{ message ?? "An unexpected error occurred" }}
  </p>
  <NuxtLink to="/" class="underline text-secondary-70 hover:text-secondary-90">
    Go back home
  </NuxtLink>
</template>
