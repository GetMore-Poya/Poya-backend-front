<script setup>
import { useMainStore } from "@/store/main";
import UserAvatar from "./UserAvatar.vue";
const mainStore = useMainStore();
</script>

<template>
  <UserAvatar :username="mainStore.userName" :avatar="mainStore.userAvatar">
    <slot />
  </UserAvatar>
</template>
