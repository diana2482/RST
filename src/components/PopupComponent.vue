<template>
    <div class="popup-background" @click.stop="handlePopupClick">
        <div style="height: 7rem;"></div>
        <div class="popup-text">{{ text }}</div>
        <a class="popup-link" :href="formattedPage" target="_blank">{{ page }}</a>
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true,
        },
        page: {
            type: String,
            required: true,
        },
    },
    name: 'PopupComponent',
    computed: {
        // Computed property to format the page URL
        formattedPage() {
            // Check if the page prop starts with http:// or https://
            if (!/^https?:\/\//i.test(this.page)) {
                // If not, prepend https:// to the URL
                return `https://${this.page}`;
            }
            // If it does, return it as is
            return this.page;
        },
    },
    methods: {
        handlePopupClick(event) {
            // Stops the click event from propagating to parent elements
            event.stopPropagation();
        },
    },
}
</script>

<style>
.popup-background {
    display: flex;
    width: 16rem;
    padding: 1.25rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    border-radius: 1.875rem;
    border: 1px solid #FFF;
    background: rgba(235, 0, 255, 0.16);
    z-index: 1000;
}
.popup-text {
    align-self: stretch;
    overflow-wrap: break-word;
    text-align: center;
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150.667%;
    /* 2.07169rem */
    letter-spacing: -0.06875rem;
}
.popup-link {
    align-self: stretch;
    text-align: center;
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150.667%;
    letter-spacing: -0.06875rem;
}
</style>