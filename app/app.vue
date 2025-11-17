<template>
  <section class="flex flex-col min-h-screen">
    <header class="bg-primary-50 text-white p-4">Main header</header>
    <main class="flex-auto container mx-auto p-4">
      <NuxtPage />
    </main>
    <footer
      class="border-t border-t-grey-200 border-b-4 border-b-primary-50 p-4"
    >
      House listing footer
    </footer>
  </section>
</template>

<style>
@import "@unocss/reset/tailwind.css";
</style>
