<template>
    <footer class="footer">
      <span>{{ $t("footer.created") }} Dianka | {{ $t("footer.design") }} Daliborko</span>
      <div class="social-icons">
        <a href="https://www.facebook.com/rstskservis" target="_blank">
          <img src="@/assets/facebook.png" alt="Facebook" class="icon" />
        </a>
        <a href="https://www.instagram.com/rstskservis/" target="_blank">
          <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
        </a>
      </div>
      <router-link to="/privacy-policy" class="footer-text">{{ $t("footer.privacy") }}</router-link>
    </footer>
  </template>
  
<script>
export default {
    name: 'FooterComponent'
}
</script>
  
<style>
.footer {
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3rem;
  box-sizing: border-box;
}
.social-icons {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1.5rem;
  align-items: center;
}
.icon {
  width: 2rem;
  height: auto;
}
@media (max-width: 900px) {
  .footer {
    height: auto; /* Adjust height to content */
    flex-direction: column; /* Stack children vertically */
    justify-content: center; /* Center children vertically */
    padding: 1rem; /* Adjust padding as needed */
    gap: 4rem;
  }
  .social-icons {
    height: 5rem;
    margin: 1rem 0; /* Add some vertical space */
  }
  .footer-text, .social-icons {
    text-align: center; /* Center text for all children */
  }
}
</style>
