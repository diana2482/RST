<template>
    <div class="posts">
        <PostComponent v-for="postData in postsData" :key="postData.id" :title="localizedText(postData, 'title')"
            :date="localizedText(postData, 'date')" :description="localizedText(postData, 'description')"
            :imagePath="`post${postData.id}`" />
    </div>
</template>

<script>
import PostComponent from '@/components/PostComponent.vue';

export default {
    name: 'PortfolioPage',
    components: {
        PostComponent,
    },
    data() {
        return {
            postsData: [],
        }
    },
    methods: {
        async loadPostsData() {
            for (let i = 1; i <= 15; i++) {
                try {
                    let dataModule = await import(`@/assets/posts/post${i}/data.js`);
                    const postData = {
                        ...dataModule.default,
                        id: i,
                    };
                    this.postsData.push(postData);
                } catch (e) {
                    console.error(`Failed to load data for post${i}:`, e);
                }
            }
        },

        localizedText(postData, field) {
            const currentLocale = this.$i18n.locale;
            if (postData[currentLocale] && postData[currentLocale][field]) {
                return postData[currentLocale][field];
            }
            return postData['sk'][field]; // Assuming 'sk' is the default/fallback language
        },
    }, mounted() {
        this.loadPostsData();
    },
}
</script>

<style>
.posts {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding: 3rem;
    box-sizing: border-box;
    margin-top: 7rem;
}
</style>
