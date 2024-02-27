<template>
    <footer class="footer">
        <span>{{ $t("footer.created") }} <a href="https://www.linkedin.com/in/diana-or%C5%A1olyov%C3%A1-099292276/" target="_blank">Diana Oršolyová</a>
             | {{ $t("footer.design") }} <a href="https://www.artstation.com/daliborjancura" target="_blank">Dalibor Jancura</a></span>
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
    text-align: center;
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
        height: auto;
        flex-direction: column;
        justify-content: center;
        padding: 1rem;
        gap: 5rem;
    }
}</style>
