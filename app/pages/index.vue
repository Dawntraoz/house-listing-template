<template>
  <div class="max-w-6xl mx-auto flex flex-col gap-8">
    <header class="py-4 text-center">
      <h1 class="text-3xl font-semibold pb-4">
        Welcome to the House Listing template
      </h1>
      <p class="text-gray-600">
        This template provides a modern and responsive layout for showcasing
        house listings.
      </p>
    </header>
    <section
      class="p-6 bg-secondary-10 border border-secondary-50 rounded-md grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
    >
      <IconSearchHome class="w-full" />
      <div
        class="flex flex-col gap-2 items-center text-center md:items-end md:text-right"
      >
        <h2 class="text-xl font-semibold">Search for your Dream Home</h2>
        <p class="text-gray-600 pb-4">
          Use our advanced search functionality to find houses that match your
          criteria. Filter by location, price range, number of bedrooms, and
          more to discover your perfect home.
        </p>
        <NuxtLink
          to="/search"
          class="px-6 py-3 bg-secondary-70 text-white rounded-md hover:bg-secondary-90"
        >
          Start Searching
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
