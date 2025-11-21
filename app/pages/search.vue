<script lang="ts" setup>
const route = useRoute();

const currentPage = ref(Number(route.query.page ?? 1));
const { data, status, error } = await useFetch("/api/listings", {
  query: { page: currentPage },
});

watch(currentPage, (newPage) => {
  navigateTo({ query: { page: newPage } });
});
</script>

<template>
  <div class="max-w-4xl mx-auto py-4">
    <h1 class="font-semibold text-2xl">Search results</h1>
    <p v-if="status === 'pending'">Loading...</p>
    <div v-else-if="status === 'success' && data?.listings.length === 0">
      <p>No listings found.</p>
    </div>
    <div v-else-if="status === 'success' && data">
      <div class="py-6 grid gap-6">
        <ListingPreview
          v-for="(listing, index) in data.listings"
          :key="listing.Id"
          :listing="listing"
          :order="index"
        />
      </div>
      <nav class="sticky bottom-4 flex justify-between px-4">
        <button
          :class="$style['btn-prev']"
          :disabled="currentPage <= 1"
          @click="currentPage--"
        >
          <IconArrowLeft /> Previous
        </button>
        <button
          :class="$style['btn-next']"
          :disabled="currentPage >= (data?.pageInfo?.AantalPaginas ?? 1)"
          @click="currentPage++"
        >
          Next <IconArrowRight />
        </button>
      </nav>
    </div>
    <div
      v-else-if="status === 'error'"
      class="flex flex-col items-center gap-4 mt-6"
    >
      <IconError class="w-48 md:w-72" />
      <p class="text-gray-700">
        A {{ error?.statusCode }} error occurred:
        <span class="italic">{{ error?.statusMessage }}</span>
      </p>
      <NuxtLink
        to="/"
        class="underline text-secondary-70 hover:text-secondary-90"
      >
        Go back home
      </NuxtLink>
    </div>
  </div>
</template>

<style module>
.btn-prev,
.btn-next {
  @apply flex px-4 py-2 text-secondary-70 bg-white hover:bg-secondary-10 rounded-md border border-secondary-10 disabled:(text-gray-400 bg-gray-50 border-transparent hover:bg-gray-50);
}
.btn-prev {
  @apply pl-2;
}
.btn-next {
  @apply pr-2;
}
</style>
