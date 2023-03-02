<template>
  <Head>
    <Title>{{ data?.postBy?.title }}</Title>
    <Meta name="description" :content="data?.postBy?.excerpt" />
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
const { data } = await useAsyncQuery(query, variables)


useServerSeoMeta({
  title: () => `${data.postBy?.title} - Le Bus Magique`,
  ogTitle: () => `${data.postBy?.title} - Le Bus Magique`,
  description: () => data.postBy?.excerpt,
  ogDescription: () => data.postBy?.excerpt,
})

</script>