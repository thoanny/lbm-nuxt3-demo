// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    modules: ['@nuxtjs/apollo'],
    apollo: {
        clients: {
            default: {
                httpEndpoint: 'https://v2.lebusmagique.fr/wordpress/graphql'
            }
        },
    },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1.0',
            title: 'Le Bus Magique',
            meta: [
                { name: 'description', content: 'My amazing site.' }
            ],
        }
    }
})
