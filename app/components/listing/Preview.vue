<script setup lang="ts">
const props = defineProps<{ listing: Listing; order: number }>();

const euroFormatter = new Intl.NumberFormat("en-EN", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 0,
});
const fullAddress = computed(() => {
  return `${props.listing.Adres} ${props.listing.Postcode} ${props.listing.Woonplaats}`;
});
const promoPhotos = computed(() => {
  return props.listing.PromoLabel.PromotionPhotos.slice(0, 2);
});
</script>

<template>
  <article class="border border-gray-300 rounded-md flex flex-col">
    <template v-if="listing.PromoLabel.HasPromotionLabel">
      <span class="bg-secondary-10 px-2 py-1 rounded-t-md">
        {{ listing.PromoLabel.Tagline }}
      </span>
      <NuxtLink
        :to="`/listing/${listing.Id}`"
        class="grid grid-cols-[2fr_1fr] grid-rows-[100px_100px] md:grid-rows-[200px_200px] gap-1"
      >
        <NuxtImg
          class="row-span-2"
          :class="$style['image-base']"
          :src="listing.FotoLarge"
          sizes="250px sm:400px md:600px"
          :alt="`Photo of ${fullAddress}, see listing for more details`"
          :loading="order > 2 ? 'lazy' : 'eager'"
          placeholder
        />
        <template v-if="promoPhotos.length > 0">
          <NuxtImg
            v-for="(photo, index) in promoPhotos"
            :key="`imag-${photo}`"
            class="col-start-2"
            :class="`${$style['image-base']} row-start-${index + 1}`"
            :src="photo"
            :alt="`Additional photo ${
              index + 1
            } of ${fullAddress}, see listing for more details`"
            :loading="order > 2 ? 'lazy' : 'eager'"
            placeholder
          />
        </template>
      </NuxtLink>
    </template>

    <div
      class="grid"
      :class="
        listing.PromoLabel.HasPromotionLabel
          ? 'grid-cols-1'
          : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-[1fr_3fr]'
      "
    >
      <NuxtLink
        v-if="!listing.PromoLabel.HasPromotionLabel"
        :to="`/listing/${listing.Id}`"
      >
        <NuxtImg
          class="rounded-t-md sm:rounded-md"
          :class="$style['image-base']"
          :src="listing.FotoMedium"
          :alt="`Photo of ${fullAddress}, see listing for more details`"
          :loading="order > 3 ? 'lazy' : 'eager'"
          placeholder
        />
      </NuxtLink>
      <div class="flex flex-col gap-2 p-4">
        <NuxtLink :to="`/listing/${listing.Id}`">
          <h2 class="font-semibold text-secondary-70">{{ listing.Adres }}</h2>
          <p>{{ `${listing.Postcode} ${listing.Woonplaats}` }}</p>
        </NuxtLink>
        <strong>
          {{
            `${euroFormatter.format(listing.Prijs.Koopprijs)} ${
              listing.Prijs.KoopAbbreviation
            }`
          }}
        </strong>
        <ul class="flex gap-4">
          <li class="flex gap-1">
            <IconLivingArea />
            {{ listing.WoonOppervlakteTot }} m²
          </li>
          <li class="flex gap-1">
            <IconPlotArea /> {{ listing.Perceeloppervlakte }} m²
          </li>
        </ul>
        <p class="italic text-secondary-90">{{ listing.MakelaarNaam }}</p>
      </div>
    </div>
  </article>
</template>

<style module>
.image-base {
  @apply w-full h-full object-cover;
}
</style>
