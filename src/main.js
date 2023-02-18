import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './axios'
////pinia

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { useStyleStore } from './store/style.js'
import { darkModeKey, styleKey } from "@/config.js";


import { useMainStore } from "@/store/main.js";

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const mainStore = useMainStore(pinia);
const styleStore = useStyleStore(pinia);

/* Fetch sample data */
mainStore.fetch("clients");
mainStore.fetch("history");
/* App style */
styleStore.setStyle(localStorage[styleKey] ?? "basic");


if (
    (!localStorage[darkModeKey] &&
      window.matchMedia("(prefers-color-scheme: dark)").matches) ||
    localStorage[darkModeKey] === "1"
  ) {
    styleStore.setDarkMode(true);
  }

const defaultDocumentTitle = "Poya Backend Front";

router.afterEach((to) => {
    document.title = to.meta?.title
      ? `${to.meta.title} — ${defaultDocumentTitle}`
      : defaultDocumentTitle;
  });

createApp(App)
.use(router)
.use(pinia)
.mount('#app')


