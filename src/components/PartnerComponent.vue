<template>
    <div class="partner-container" @click="togglePopup">
        <Transition name="fade">
            <PopupComponent v-if="isPopupVisible" :text="translatedText" :page="page" class="popup" />
        </Transition>
        <img :src="require('@/assets/' + image)" class="partner" />
    </div>
</template>


<script>
import PopupComponent from '@/components/PopupComponent.vue';
import { eventBus } from '@/eventBus.js';

export default {
    props: {
        image: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
        page: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            isPopupVisible: false,
        };
    },
    computed: {
        translatedText() {
            return this.$t(this.text);
        },
    },
    methods: {
        togglePopup(event) {
            event.stopPropagation(); // Prevent click event from bubbling to document
            if (!this.isPopupVisible) {
                eventBus.emit('close-all-popups');
                this.isPopupVisible = true;
                // Add global click listener only when popup becomes visible
                document.addEventListener('click', this.handleDocumentClick);
            } else {
                this.isPopupVisible = false;
            }
        },
        closePopup() {
            this.isPopupVisible = false;
            document.removeEventListener('click', this.handleDocumentClick); // Clean up
        },
        handleDocumentClick(event) {
            // Check if the click is outside the popup
            if (!this.$el.contains(event.target)) {
                eventBus.emit('close-all-popups');
            }
        }
    },
    mounted() {
        eventBus.on('close-all-popups', this.closePopup);
    },
    beforeUnmount() {
        eventBus.off('close-all-popups', this.closePopup);
        document.removeEventListener('click', this.handleDocumentClick); // Clean up
    },
    name: 'PartnerComponent',
    components: {
        PopupComponent,
    },
}
</script>

<style>
.partner-container {
    position: relative;
    width: 16.875rem;
    height: auto;
}

.partner {
    width: 100%;
    height: 100%;
    cursor: pointer;
}

.popup {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -1.5rem);
    transition: opacity 3s ease;
}

/* Transition styles */
.fade-leave-active,
.fade-enter-active {
    transition: opacity 0.4s ease;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
@media (max-width: 900px) {
    .partner-container {
        width: 9rem;
    }
}
</style>
