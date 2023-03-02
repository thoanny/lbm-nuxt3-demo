<template>
  <div>
    <NuxtLoadingIndicator />
    <div class="flex gap-6 my-6 container mx-auto">
      <ul class="menu bg-base-100 w-56 p-2 rounded-box shadow shrink-0">
        <li>
          <NuxtLink to="/" activeClass="active">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" activeClass="active">About</NuxtLink>
        </li>
        <li>
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: 'mise-a-jour-du-6-septembre-2021-018f1c2' } }"
            activeClass="active">Mise à jour du 6 septembre 2021 (018f1c2)</NuxtLink>
        </li>
        <li>
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: 'mise-a-jour-du-26-mai-2021-d40cc55' } }"
            activeClass="active">Mise à jour du 26 mai 2021 (d40cc55)</NuxtLink>
        </li>
      </ul>
      <NuxtPage />
    </div>
  </div>
</template>