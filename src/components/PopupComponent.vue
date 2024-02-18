<template>
    <div class="popup-background">
        <img class="popup-image" src="../assets/game_days.png"/>
        <div class="popup-text">
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
        </div>
        <a class="popup-link">gamedays.sk</a>

    </div>
</template>

<script>
export default {
    name: 'PopupComponent',
}
</script>

<style>
.popup-background {
    display: flex;
    width: 16rem;
    padding: 1.25rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.1875rem;
    border-radius: 1.875rem;
    border: 1px solid #FFF;
    background: rgba(235, 0, 255, 0.16);

    z-index: 1000;
}
.popup-image {
    height: 6.6875rem;
    align-self: stretch;
    /* background: url("../assets/game_days.png"), lightgray 10% / cover no-repeat; */
}
.popup-text {
    align-self: stretch;
    text-align: center;
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150.667%; /* 2.07169rem */
    letter-spacing: -0.06875rem;
}
.popup-link {
    align-self: stretch;
    text-align: center;
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150.667%; /* 2.07169rem */
    letter-spacing: -0.06875rem;
}
</style>