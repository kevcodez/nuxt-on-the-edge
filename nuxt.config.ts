// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

    modules: ['@nuxtjs/supabase'],
    supabase: {
        client: {
            global: {
                fetch:  (...args) => fetch(...args)
            },
        }
    }
})
