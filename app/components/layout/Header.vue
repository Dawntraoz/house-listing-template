<template>
  <header class="bg-primary-50 text-white">
    <nav class="container mx-auto p-4 flex items-center justify-between gap-6">
      <p class="font-semibold uppercase text-xl">Logo</p>
      <ul class="flex items-center gap-2">
        <li>
          <NuxtLink to="/" :class="$style.link">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/search" :class="$style.link">Find a house</NuxtLink>
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
