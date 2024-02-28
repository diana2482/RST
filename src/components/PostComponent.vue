<template>
    <div class="wrapper">
        <div class="text-element" v-text="title" style="font-size: 26px;"></div>
        <div class="text-element" v-text="date" style="font-size: 16px; color: #909090"></div>
        <div class="text-element" v-text="description" style="font-size: 18px;"></div>
        <div class="images">
            <div v-for="(imageName, index) in actualImageNames" :key="imageName" class="image-container">
                <img :src="getImagePath(imageName)" class="post-image" alt="Post" @click="openModal(index)" />
            </div>
            <div v-if="allActualImages.length > 4 && showModal == false" @click="openModal(3)" class="plus">+</div>
        </div>
        <div v-if="showModal" class="modal">
            <button class="close" @click="closeModal">&times;</button>
            <button class="prev" @click="previousImage">&#10094;</button>
            <img :src="modalImagePath" class="modal-content" alt="image in modal">
            <button class="next" @click="nextImage">&#10095;</button>
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
        imagePath: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            // Assuming you know these are the potential images
            potentialImageNames: ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg',
                'image5.jpg', 'image6.jpg', 'image7.jpg', 'image8.jpg', 'image9.jpg', 'image10.jpg'],
            actualImageNames: [],
            allActualImages: [],
            showModal: false,
            currentImageIndex: 0,
            touchStartX: 0,
            touchEndX: 0,
        }
    },
    created() {
        this.actualImageNames = this.potentialImageNames.filter(imageName => {
            try {
                require(`@/assets/posts/${this.imagePath}/${imageName}`);
                return true; // The image is present, keep it
            } catch (e) {
                return false;
            }
        }).slice(0, 4); // Slice the array to keep only the first 4 elements
        this.allActualImages = this.potentialImageNames.filter(imageName => {
            try {
                require(`@/assets/posts/${this.imagePath}/${imageName}`);
                return true; // The image is present, keep it
            } catch (e) {
                return false;
            }
        });
    },
    computed: {
        modalImagePath() {
            return this.getImagePath(this.allActualImages[this.currentImageIndex]);
        }
    },
    methods: {
        getImagePath(imageName) {
            try {
                return require(`@/assets/posts/${this.imagePath}/${imageName}`);
            } catch (e) {
                return ''; // Return an empty string or a fallback image path
            }
        },
        openModal(imageIndex) {
            this.currentImageIndex = imageIndex;
            this.showModal = true;

            // Wait for the next DOM update cycle before trying to access the modal
            this.$nextTick(() => {
                const modalElement = document.querySelector('.modal');
                if (modalElement) {
                    modalElement.style.display = 'block';
                } else {
                    console.error('Modal element not found');
                }
                const modalImage = document.querySelector('.modal-content');
                if (modalImage) {
                    modalImage.addEventListener('touchstart', this.handleTouchStart, false);
                    modalImage.addEventListener('touchend', this.handleTouchEnd, false);
                }
            });
        },
        closeModal() {
            this.showModal = false;
            const modalImage = document.querySelector('.modal-content');
            if (modalImage) {
                modalImage.removeEventListener('touchstart', this.handleTouchStart, false);
                modalImage.removeEventListener('touchend', this.handleTouchEnd, false);
            }
        },
        handleTouchStart(event) {
            this.touchStartX = event.changedTouches[0].screenX;
        },
        handleTouchMove(event) {
            this.touchEndX = event.changedTouches[0].screenX;
        },
        handleTouchEnd() {
            if (this.touchStartX - this.touchEndX > 50) {
                // Swipe left
                this.nextImage();
            } else if (this.touchStartX - this.touchEndX < -50) {
                // Swipe right
                this.previousImage();
            }
        },
        // Modify nextImage and previousImage to include transitions
        nextImage() {
            this.currentImageIndex = (this.currentImageIndex + 1) % this.allActualImages.length;
            // Trigger animation here if needed
        },
        previousImage() {
            this.currentImageIndex = (this.currentImageIndex + this.allActualImages.length - 1) % this.allActualImages.length;
            // Trigger animation here if needed
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
    border: 1px solid #EB00FF;
}

.text-element {
    align-self: stretch;
}

.images {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-items: flex-start;
    align-content: flex-start;
}

.image-container {
    border: 1px solid white;
    width: 49%;
    padding-top: 49%;
    position: relative;
}

.plus {
    position: absolute;
    width: 49%;
    height: 49%;
    background-color: rgba(0, 0, 0, 0.5);
    color: rgb(133, 133, 133);
    font-size: 5rem;
    font-weight: 100 !important;
    bottom: 0;
    right: 0;
    transform: translate(-3%, -2%);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    cursor: pointer;
}

.post-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    opacity: 1;
}

.post-image:hover {
    opacity: 0.7;
    transition: 0.3s ease-in-out;
}

.images {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    position: relative;
    /* This ensures that the .plus div can be absolutely positioned within it */
    align-items: flex-start;
    align-content: flex-start;
}

.modal {
    display: none;
    position: fixed;
    z-index: 1;
    padding-top: 25vh;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.9);
}

.modal[style*="display: block"] {
    display: block;
}

.modal-content {
    margin: auto;
    display: block;
    max-height: 70vh;
}

.close {
    position: absolute;
    top: 7rem;
    color: white;
    font-size: 40px;
    font-weight: bold;
    right: 3rem;
}

button {
    background-color: transparent;
    border: none;
    cursor: pointer;
}

.prev,
.next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 3rem;
    margin-top: -50px;
    color: white;
    font-weight: bold;
    font-size: 20px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
}

.next {
    right: 0;
}

.prev {
    left: 0;
}

@media (max-width: 900px) {
    .wrapper {
        width: 90%;
    }

    .modal-content {
        max-width: 80vw;
        max-height: 70vh;
    }

    .prev,
    .next {
        padding-left: 1rem;
        padding-right: 1rem;
    }
    .plus {
        font-size: 15vw;
    }
}</style>