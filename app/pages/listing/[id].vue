<script lang="ts" setup>
const route = useRoute();

const {
  data: listing,
  status,
  error,
} = await useFetch(`/api/listing/${route.params.id}`);

const showMore = ref(false);

const fullAddress = computed(() => {
  return `${listing.value?.Adres} ${listing.value?.Postcode} ${listing.value?.Plaats}`;
});
const listingPhotos = (size: "small" | "medium" | "large") => {
  if (!listing.value) return [];

  const categoryMap = {
    small: 1,
    medium: 4,
    large: 6,
  };
  const category = categoryMap[size];

  return listing.value.Media.reduce((acc, item): string[] => {
    const largeImages = item.MediaItems.filter(
      (media) => media.Category === category
    ).map((media) => media.Url);
    return [...acc, ...largeImages];
  }, []);
};
</script>

<template>
  <div v-if="status === 'pending'">Loading...</div>
  <div
    v-else-if="status === 'error'"
    class="flex flex-col items-center gap-4 mt-6"
  >
    <ListingError :code="error?.statusCode" :message="error?.statusMessage" />
  </div>
  <template v-else-if="status === 'success' && listing">
    <ul :class="$style.breadcrumbs">
      <li>
        <NuxtLink to="/"><IconHome /></NuxtLink>
      </li>
      <li><NuxtLink to="/search">Listings</NuxtLink></li>
      <li>Listing {{ listing.Adres }}</li>
    </ul>
    <div
      class="grid grid-cols-4 md:grid-rows-2 max-w-6xl h-sm md:h-lg mx-auto gap-1 py-4"
    >
      <NuxtImg
        v-for="(photo, index) in listingPhotos('medium').slice(0, 5)"
        :key="`image-${photo}`"
        :class="[
          $style['gallery-preview-image'],
          index === 0 && 'col-span-4 md:row-span-2 md:col-span-2',
        ]"
        :src="photo"
        :alt="`Additional photo ${index + 1} of ${fullAddress}`"
        placeholder
      />
    </div>
    <article class="max-w-4xl mx-auto">
      <header class="py-4 border-b border-gray-200">
        <h1 class="text-3xl font-semibold">{{ listing.Adres }}</h1>
        <p class="text-gray-600 pb-2">
          {{ `${listing.Postcode} ${listing.Plaats}` }}
        </p>
        <strong class="text-lg">
          {{
            `${euroFormatter.format(listing.Prijs.Koopprijs)} ${
              listing.Prijs.KoopAbbreviation
            }`
          }}
        </strong>
      </header>
      <div class="flex flex-col items-start gap-2 py-4">
        <h2 class="text-2xl font-semibold">Description</h2>
        <p :class="!showMore && 'line-clamp-3'">
          {{ listing.VolledigeOmschrijving }}
        </p>
        <button
          class="text-secondary-70 hover:text-secondary-90"
          @click="showMore = !showMore"
        >
          {{ showMore ? "Read less" : "Read more" }}
        </button>
      </div>
    </article>
  </template>
</template>

<style module>
.breadcrumbs {
  @apply flex items-center gap-2 max-w-4xl mx-auto text-gray-600;

  li {
    @apply flex items-center gap-2;

    &:not(:last-child)::after {
      @apply content-['/'];
    }

    a {
      @apply text-secondary-70 hover:text-secondary-90;
    }
  }
}

.gallery-preview-image {
  @apply w-full h-full object-cover;

  &:nth-child(1) {
    @apply rounded-t-md md:rounded-l-md md:rounded-tr-none;
  }
  &:nth-child(2) {
    @apply rounded-bl-md md:rounded-none;
  }
  &:nth-child(3) {
    @apply md:rounded-tr-md;
  }
  &:nth-child(5) {
    @apply rounded-br-md;
  }
}
</style>
