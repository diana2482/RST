<template>
    <div class="wrapper">
      <div class="text-element" v-text="title" style="font-size: 26px;"></div>
      <div class="text-element" v-text="date" style="font-size: 16px; color: #909090"></div>
      <div class="text-element" v-text="description" style="font-size: 18px;"></div>
      <div class="images">
        <div v-for="imageName in actualImageNames" :key="imageName" class="image-container">
          <img :src="getImagePath(imageName)" class="post-image" alt="" />
        </div>
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
    data() {
        return {
            // Assuming you know these are the potential images
            potentialImageNames: ['image1.png', 'image2.png', 'image3.png', 'image4.png'],
            actualImageNames: [],
        };
    },
    created() {
        this.actualImageNames = this.potentialImageNames.filter(imageName => {
            try {
                require(`@/assets/posts/post2/${imageName}`);
                return true; // The image is present, keep it
            } catch (e) {
                // The image is not present, filter it out
                return false;
            }
        });
    },
    methods: {
        getImagePath(imageName) {
            try {
                return require(`@/assets/posts/post2/${imageName}`);
            } catch (e) {
                // Handle the error as needed
                return ''; // Return an empty string or a fallback image path
            }
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
    flex-wrap: wrap;
    width: 100%;
    align-items: flex-start;
    align-content: flex-start;
}

.image-container {
    width: 50%;
    /* 2 images per row */
    padding-top: 50%;
    /* Equal to width for square */
    position: relative;
}

.post-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.images {
    display: flex;
    flex-wrap: wrap;
}



@media (max-width: 900px) {
    .wrapper {
        width: 90%;
    }
}
</style>