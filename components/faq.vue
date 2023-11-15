<template>
  <section class="mt-20">
    <div class="grid grid-cols-12 ">
      <div class="col-span-12 lg:col-start-4 lg:col-span-6">

        <div v-for="(item, index) in faqItems" :key="index">
          <h5 class="block antialiased tracking-normal font-sans text-xl leading-snug text-inherit mt-6 mb-1 font-semibold !text-black">
            {{ item.question }}
          </h5>
          <div class="block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-600">
            {{ item.answer }}
          </div>
          <hr class="my-6 border-blue-gray-50">
        </div>
        
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  faqItems: Array
});
</script>