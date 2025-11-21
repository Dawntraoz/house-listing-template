<script setup lang="ts">
const navigationLinks = [
  { id: "search", name: "Find a house", path: "/search" },
];
</script>

<template>
  <header class="bg-primary-50 text-white">
    <nav class="container mx-auto p-4 flex items-center justify-between gap-6">
      <NuxtLink to="/" class="font-semibold uppercase text-xl">Logo</NuxtLink>
      <ul class="flex items-center gap-2">
        <li v-for="link in navigationLinks" :key="`nav-${link.id}`">
          <NuxtLink :to="link.path" :class="$style.link">{{
            link.name
          }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style module>
.link {
  @apply p-2 rounded-md hover:bg-primary-51;
}
</style>
