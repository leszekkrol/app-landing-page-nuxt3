<template>
  <footer class="w-full mx-auto max-w-screen-xl p-4 mt-10 mb-10 flex flex-col items-center space-y-5">
    <img class="w-20" src="~/assets/app-logo.png" alt="Logo">
    <h1 v-if="title" class="text-3xl font-extrabold text-center">{{ title }}</h1>
    <div class="flex flex-row space-x-5">
      <a v-if="appStoreURL" class="transition duration-500 hover:brightness-75" :href="appStoreURL" target="_blank">
        <img alt="Download on the App Store" src="~/assets/download-app-store.svg">
      </a>
      <a v-if="macStoreURL" class="transition duration-500 hover:brightness-75" :href="macStoreURL" target="_blank">
        <img alt="Download on the Mac App Store" src="~/assets/download-mac-app-store.svg">
      </a>
    </div>
  </footer>
</template>

<script setup>
defineProps({
  title: String,
  appStoreURL: String,
  macStoreURL: String
});
</script>