<script lang="ts" setup>
const route = useRoute();

const currentPage = ref(Number(route.query.page ?? 1));
const { data, pending } = await useFetch("/api/listings", {
  query: { page: currentPage },
});

watch(currentPage, (newPage) => {
  navigateTo({ query: { page: newPage } });
});
</script>

<template>
  <h1 class="font-semibold text-xl max-w-4xl mx-auto">Search results</h1>
  <div v-if="pending">Loading...</div>
  <div v-else-if="!pending && data" class="max-w-4xl mx-auto">
    <div class="py-4 grid gap-6">
      <ListingPreview
        v-for="(listing, index) in data.listings"
        :key="listing.Id"
        :listing="listing"
        :order="index"
      />
    </div>
    <nav class="flex justify-between">
      <button
        :class="$style['btn-prev']"
        :disabled="currentPage <= 1"
        @click="currentPage--"
      >
        Previous
      </button>
      <button
        :class="$style['btn-next']"
        :disabled="currentPage >= (data?.pageInfo?.AantalPaginas ?? 1)"
        @click="currentPage++"
      >
        Next
      </button>
    </nav>
  </div>
</template>

<style module>
.btn-prev,
.btn-next {
  @apply px-4 py-2 text-secondary-70 hover:bg-secondary-10 rounded-md border border-secondary-10 disabled:(text-gray-400 bg-gray-50 border-transparent hover:bg-gray-50);
}
</style>
