<template>
  <footer class="bg-gray-100">
    <div class="border-t border-t-grey-200 border-b-4 border-b-primary-50">
      <p class="container mx-auto p-4 text-center text-grey-500">
        © {{ currentYear }} House Listing
      </p>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const currentYear = new Date().getFullYear();
</script>
