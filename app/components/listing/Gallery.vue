<script lang="ts" setup>
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

defineProps<{
  images: string[];
}>();
</script>

<template>
  <swiper
    class="w-full h-11/12"
    :modules="[Navigation, Pagination]"
    :slides-per-view="1"
    navigation
    :pagination="{ type: 'fraction' }"
  >
    <swiper-slide v-for="(slide, index) in images" :key="index" class="">
      <NuxtImg
        :src="slide.replace('http://', 'https://')"
        class="justify-self-center align-self-center w-10/12 max-w-4xl h-full object-contain"
      />
    </swiper-slide>
  </swiper>
</template>
