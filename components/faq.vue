<template>
  <section class="mt-32 mb-20 px-4">
    <div class="max-w-4xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16 space-y-4">
        <h2 class="text-5xl md:text-6xl font-bold gradient-text">
          Frequently Asked Questions
        </h2>
        <p class="text-xl text-slate-600">
          Everything you need to know about our app
        </p>
      </div>

      <!-- FAQ Items -->
      <div class="space-y-4">
        <div 
          v-for="(item, index) in faqItems" 
          :key="index"
          class="glass-effect rounded-2xl overflow-hidden hover-lift">
          
          <button
            @click="toggleItem(index)"
            class="w-full flex items-center justify-between p-6 text-left transition-all duration-300"
            :class="openItems.includes(index) ? 'bg-gradient-to-r from-blue-50 to-purple-50' : ''">
            
            <h3 class="text-xl md:text-2xl font-semibold text-slate-800 pr-8">
              {{ item.question }}
            </h3>
            
            <div 
              class="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 transition-transform duration-300"
              :class="openItems.includes(index) ? 'rotate-180' : ''">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="3" 
                stroke="currentColor" 
                class="w-5 h-5 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </button>
          
          <div 
            v-show="openItems.includes(index)"
            class="px-6 pb-6 text-lg text-slate-600 leading-relaxed animate-fadeIn">
            {{ item.answer }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  faqItems: Array
});

const openItems = ref([]);

const toggleItem = (index) => {
  const position = openItems.value.indexOf(index);
  if (position > -1) {
    openItems.value.splice(position, 1);
  } else {
    openItems.value.push(index);
  }
};
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease-out;
}
</style>