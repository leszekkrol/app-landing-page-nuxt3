<template>
  <div 
    :class="{'reverse-flex': shouldReverse, 'justify-between': shouldReverse}" 
    class="group m-auto mb-12 flex w-full max-w-5xl flex-col md:flex-row rounded-3xl glass-effect hover-lift overflow-hidden">
    
    <!-- Image Section -->
    <div 
      v-if="image" 
      :class="{'md:rounded-r-none': !shouldReverse, 'md:rounded-l-none': shouldReverse}" 
      class="relative w-full md:w-2/5 shrink-0 overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
      <img 
        :src="image" 
        alt="feature image" 
        class="h-64 md:h-full w-full object-cover transition-transform duration-500 group-hover:scale-110">
      <div class="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
    </div>
    
    <!-- Content Section -->
    <div class="flex flex-col justify-center p-8 md:p-10 space-y-4">
      <!-- Label Badge -->
      <span class="inline-flex items-center w-fit px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">
        {{ label }}
      </span>
      
      <!-- Title -->
      <h3 class="text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
        {{ title }}
      </h3>
      
      <!-- Description -->
      <p class="text-lg text-slate-600 leading-relaxed">
        {{ description }}
      </p>
      
      <!-- Action Button -->
      <a 
        v-if="actionUrl" 
        :href="actionUrl"
        class="group/btn inline-flex items-center gap-3 w-fit mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105">
        <span>Learn More</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke-width="2.5" 
          stroke="currentColor" 
          class="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
        </svg>
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  shouldReverse: Boolean,
  label: String,
  title: String,
  description: String,
  image: String,
  actionUrl: String
});
</script>