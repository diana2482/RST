<template>
    <div class="main-header">
        <div class="navigation">
            sluzby
            sluzby
            sluzby
        </div>

    </div>
</template>

<script>

</script>

<style>
.main-header{
    /* background-color: #ff000080; */
    font-size: 20px;
    font-weight: bold;
    
    position: fixed;
    width: 100%;
    height: 100px;
    line-height: 100px;
    text-align: center;
    z-index: 1000; 
}
.navigation {
    display: flex;
    justify-content: flex-end; /* Aligns items to the right */
    align-items: center; /* Vertically centers items in the container */
    height: 100%; /* Takes the full height of the header */
    position: absolute; /* Position relative to the header */
    right: 0; /* Align to the right side of the header */
    top: 0; /* Align to the top of the header */
    /* Remove the background-color if you don't want it */
}

</style>