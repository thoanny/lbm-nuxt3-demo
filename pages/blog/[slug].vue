<template>
  <Head>
    <Title>{{ data?.postBy?.title }}</Title>
    <Meta name="description" :content="data?.postBy?.excerpt" />
    <Meta property="og:type" content="website" />
    <Meta property="og:url" :content="loc.origin + loc.pathname" />
    <Meta property="og:title" :content="data?.postBy?.title" />
    <Meta property="og:description" :content="data?.postBy?.excerpt" />
    <Meta property="og:image" :content="data?.postBy?.featuredImage.node.mediaItemUrl" />
    <Meta property="twitter:card" content="summary_large_image" />
    <Meta property="twitter:url" :content="loc.origin + loc.pathname" />
    <Meta property="twitter:title" :content="data?.postBy?.title" />
    <Meta property="twitter:description" :content="data?.postBy?.excerpt" />
    <Meta property="twitter:image" :content="data?.postBy?.featuredImage.node.mediaItemUrl" />
  </Head>
  <div>
    <img v-if="data?.postBy?.featuredImage" :src="data?.postBy?.featuredImage.node.mediaItemUrl" class="rounded mb-4"
      alt="">
    <h1 class="text-2xl font-bold">{{ data?.postBy?.title }}</h1>
    <div v-html="data?.postBy?.content"></div>
    <hr>
    {{ data }}
  </div>
</template>

<script setup lang="ts">
const query = gql`
query getPostBySlug($slug: String) {
  postBy(slug: $slug) {
    acfSeo {
      seoDescription
      seoKeywords
      seoTitle
    }
    title
    content
    excerpt
    date
    featuredImage {
      node {
        mediaItemUrl
      }
    }
  }
}
`
const route = useRoute()
const variables = { slug: route.params.slug }
const { data } = await useAsyncQuery(query, variables);
const loc = window.location

console.log('route:', route)
console.log('loc:', window.location)

// useServerSeoMeta({
//   title: () => `${data.postBy?.title} - Le Bus Magique`,
//   ogTitle: () => `${data.postBy?.title} - Le Bus Magique`,
//   description: () => data.postBy?.excerpt,
//   ogDescription: () => data.postBy?.excerpt,
// })

</script>