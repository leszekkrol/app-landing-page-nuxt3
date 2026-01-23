<template>
  <header class="relative w-full mx-auto max-w-screen-xl px-4 pt-20 pb-32">
    <!-- Animated background elements -->
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <div class="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div class="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div class="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
    </div>

    <!-- Content -->
    <div class="flex flex-col items-center space-y-8 text-center relative z-10">
      <!-- Logo with subtle animation -->
      <div class="transform transition-all duration-500 hover:scale-110">
        <img class="w-24 h-24 drop-shadow-2xl" src="~/assets/app-logo.png" alt="Logo">
      </div>

      <!-- Title with gradient -->
      <div v-if="title" class="space-y-4">
        <h1 class="text-6xl md:text-7xl font-bold gradient-text leading-tight">
          {{ title }}
        </h1>
        <p class="text-xl md:text-2xl text-slate-600 font-light max-w-2xl mx-auto">
          Experience the future of mobile applications
        </p>
      </div>

      <!-- Download buttons with delicate styling -->
      <div class="flex flex-col sm:flex-row gap-4 mt-8">
        <a v-if="appStoreURL" 
           :href="appStoreURL" 
           target="_blank"
           class="group bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <img alt="Download on the App Store" 
               src="~/assets/download-app-store.svg"
               class="h-12 transition-opacity duration-300 group-hover:opacity-80">
        </a>
        
        <a v-if="macStoreURL" 
           :href="macStoreURL" 
           target="_blank"
           class="group bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <img alt="Download on the Mac App Store" 
               src="~/assets/download-mac-app-store.svg"
               class="h-12 transition-opacity duration-300 group-hover:opacity-80">
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
defineProps({
  title: String,
  appStoreURL: String,
  macStoreURL: String
});
</script>

<style scoped>
@keyframes blob {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>