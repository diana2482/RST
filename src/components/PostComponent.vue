<template>
    <div class="wrapper">
        <div class="text-element" v-text="this.title" style="font-size: 26px;"></div>
        <div class="text-element" v-text="this.date" style="font-size: 16px; color: #909090"></div>
        <div class="text-element" v-text="this.description" style="font-size: 18px;"></div>
        <div class="images">
            <img src="@/assets/posts/post1/image.png" class="post-image" />
            <img src="@/assets/posts/post1/image.png" class="post-image" />
            <img src="@/assets/posts/post1/image.png" class="post-image" />
            <img src="@/assets/posts/post1/image.png" class="post-image" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'PostComponent',
    props: {
        title: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
}
</script>

<style>
.wrapper {
    display: flex;
    width: 30rem;
    padding: 1.5rem;
    flex-direction: column;
    align-items: center;
    gap: 0.2rem;
    border-radius: 1.875rem;
    border: 3px solid #EB00FF;
}

.text-element {
    align-self: stretch;
}

.images {
    display: flex;
    width: 100%;
    align-items: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
}

.post-image {
    width: 50%;
    height: auto;
    flex-shrink: 0;
}

@media (max-width: 900px) {
    .wrapper {
        width: 90%;
    }
}</style>