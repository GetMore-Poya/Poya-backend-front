<script setup>
import {defineProps, defineEmits} from "vue";
import { mdiLogout, mdiClose } from "@mdi/js";
import { computed } from "vue";
import { useStyleStore } from "@/store/style";
import AsideMenuList from "@/components/structure/AsideMenuList.vue";
import AsideMenuItem from "@/components/structure/AsideMenuItem.vue";
import BaseIcon from "@/components/structure/BaseIcon.vue";
import { useUserStore } from '@/store/user-store';
import { useRouter } from 'vue-router';

import axios from "axios";
defineProps({
  menu: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["menu-click", "aside-lg-close-click"]);

const styleStore = useStyleStore();
const userStore=useUserStore()
const router=useRouter()

const logoutItem = computed(() => ({
  label: "Logout",
  icon: mdiLogout,
  color: "info",
  isLogout: true,
}));


const logout= async () => {
        console.log(logout)
        try{
                let res = await axios.post('api/v1/logout',{
                    user_id: userStore.id
                })
                console.log(res.data)

                userStore.clearUser()
                router.push('/')

        }catch(err){
            console.log(err)
        }

    }


const menuClick = (event, item) => {
  emit("menu-click", event, item);
};

const asideLgCloseClick = (event) => {
  emit("aside-lg-close-click", event);
};
</script>

<template>
  <aside
    id="aside"
    class="lg:py-2 lg:pl-2 w-60 fixed flex z-40 top-0 h-screen transition-position overflow-hidden"
  >
    <div
      :class="styleStore.asideStyle"
      class="lg:rounded-2xl flex-1 flex flex-col overflow-hidden dark:bg-slate-900"
    >
      <div
        :class="styleStore.asideBrandStyle"
        class="flex flex-row h-14 items-center justify-between dark:bg-slate-900"
      >
        <div
          class="text-center flex-1 lg:text-left lg:pl-6 xl:text-center xl:pl-0"
        >
          <b class="font-black">Poya</b>
        </div>
        <button
          class="hidden lg:inline-block xl:hidden p-3"
          @click.prevent="asideLgCloseClick"
        >
          <BaseIcon :path="mdiClose" />
        </button>
      </div>
      <div
        :class="
          styleStore.darkMode
            ? 'aside-scrollbars-[slate]'
            : styleStore.asideScrollbarsStyle
        "
        class="flex-1 overflow-y-auto overflow-x-hidden"
      >
        <AsideMenuList :menu="menu" @menu-click="menuClick" />
      </div>

      <ul>
        <AsideMenuItem :item="logoutItem" @menu-click="logout" @click="logout"/>
      </ul>
    </div>
  </aside>
</template>
