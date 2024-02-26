<template>
    <div class="posts">
    <PostComponent title="Prvy post" date="34. januara 2084"
        description="toto je uzasny post taky uzasny ze svet sa zastavi lorem ipsum lorem ipsum" />
    <PostComponent title="Prvy post" date="34. januara 2084"
        description="toto je uzasny post taky uzasny ze svet sa zastavi lorem ipsum lorem ipsum" />
    </div>
</template>

<script>
import PostComponent from '@/components/PostComponent.vue';
export default {
    name: 'PortfolioPage',
    components: {
        PostComponent,
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