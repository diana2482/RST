import { createWebHistory, createRouter } from "vue-router";
import MainPage from "@/views/MainPage.vue";
import ComputerPage from "@/views/ComputerPage.vue";
import DiagnosticsPage from "@/views/DiagnosticsPage.vue";
import LaptopPage from "@/views/LaptopPage.vue";
import MaintenancePage from "@/views/MaintenancePage.vue";
import PortfolioPage from "@/views/PortfolioPage.vue";
import RepairPage from "@/views/RepairPage.vue";
import PrivacyPolicyPage from "@/views/PrivacyPolicyPage.vue";

const routes = [
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
  },
  {
    path: "/pc-kosice",
    name: "ComputerPage",
    component: ComputerPage,
  },
  {
    path: "/servis-pc-notebook-kosice",
    name: "DiagnosticsPage",
    component: DiagnosticsPage,
  },
  {
    path: "/notebook-kosice",
    name: "LaptopPage",
    component: LaptopPage,
  },
  {
    path: "/udrzba-pc-kosice",
    name: "MaintenancePage",
    component: MaintenancePage,
  },
  {
    path: "/portfolio-pc-servis-kosice",
    name: "PortfolioPage",
    component: PortfolioPage,
  },
  {
    path: "/oprava-pc-notebook-kosice",
    name: "RepairPage",
    component: RepairPage,
  },
  {
    path: "/privacy-policy",
    name: "PrivacyPolicyPage",
    component: PrivacyPolicyPage,
  },
];

function smoothScrollTo(elementSelector, delay, duration) {
  setTimeout(() => {
    const element = document.querySelector(elementSelector);
    if (!element) return;

    const startingY = window.scrollY;
    const elementRect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    // Calculate the top offset to align the element to the middle of the viewport
    const elementY = startingY + elementRect.top - (viewportHeight / 2) + (elementRect.height / 2);
    const diff = elementY - startingY;
    let start;

    // Easing function: ease-out effect
    const easing = t => 1 - Math.pow(1 - t, 2);

    window.requestAnimationFrame(function step(timestamp) {
      if (!start) start = timestamp;
      const time = timestamp - start;
      let percent = Math.min(time / duration, 1);
      percent = easing(percent);

      window.scrollTo(0, startingY + diff * percent);

      if (time < duration) {
        window.requestAnimationFrame(step);
      }
    });
  }, delay);
}

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return new Promise(resolve => {
        // Adjust the delay and duration as needed
        smoothScrollTo(to.hash, 400, 700); 
        resolve(); // No position is returned because scrolling is handled by smoothScrollTo
      });
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
