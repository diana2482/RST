<template>
  <div class="main-page-image-background">
    <div class="main-logo-text">
      <div class="main-logo-text-element">rychlejsie</div>
      <div class="main-logo-text-element">rychlejsie</div>
      <div class="main-logo-text-element">rychlejsie</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPage'
}

</script>

<style>
.main-page-image-background{
  display: flex;
  width: 100vw;
  height: 100vh;
  min-height: 500px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  background-image: url('../assets/Header_computer.jpg');
  background-size: cover;
  background-position: center;
}
.main-logo-text{
  display: flex;
height: 17.3125rem;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: -2.8125rem;
position: absolute;
}
.main-logo-text-element{
  color: #FFF;
-webkit-text-stroke-width: 0.30000001192092896;
-webkit-text-stroke-color: #FFF;
font-family: Poppins, sans-serif;
font-size: 4.6875rem;
font-style: normal;
font-weight: 500;
line-height: 150.667%; /* 7.0625rem */
letter-spacing: -0.32813rem;
text-transform: uppercase;
}
</style>
