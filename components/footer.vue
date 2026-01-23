<template>
  <footer class="relative mt-32 px-4 pb-12">
    <!-- Background Gradient -->
    <div class="absolute inset-0 bg-gradient-to-t from-slate-100 via-blue-50/50 to-transparent -z-10"></div>
    
    <div class="max-w-7xl mx-auto">
      <!-- Main Footer Content -->
      <div class="glass-effect rounded-3xl p-8 md:p-12 space-y-8">
        
        <!-- Top Section -->
        <div class="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-slate-200/50">
          
          <!-- Social Links -->
          <div class="flex items-center gap-4">
            <span class="text-slate-600 font-medium">Follow us:</span>
            <div class="flex gap-3">
              <a 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Follow on X (formerly Twitter)" 
                class="group flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white transition-all duration-300 hover:scale-110 hover:shadow-xl" 
                href="https://x.com/leszekkrol">
                <svg fill="currentColor" viewBox="0 0 16 16" class="h-5 w-5" aria-hidden="true">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 0.5H5.75L9.48421 5.71053L14 0.5H16L10.3895 6.97368L16.5 15.5H11.25L7.51579 10.2895L3 15.5H1L6.61053 9.02632L0.5 0.5ZM12.0204 14L3.42043 2H4.97957L13.5796 14H12.0204Z"></path>
                </svg>
              </a>
              
              <a 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Follow on LinkedIn" 
                class="group flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 text-white transition-all duration-300 hover:scale-110 hover:shadow-xl" 
                href="https://www.linkedin.com/in/leszekkrol/">
                <svg fill="currentColor" viewBox="0 0 24 24" class="h-5 w-5" aria-hidden="true">
                  <path d="M21 1.5H3c-.83 0-1.5.68-1.5 1.51V21c0 .83.67 1.51 1.5 1.51h18c.82 0 1.5-.68 1.5-1.51V3c0-.83-.68-1.51-1.5-1.51Zm-13.15 18H4.73V9.48h3.12V19.5ZM6.29 8.1a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6Zm13.22 11.4h-3.1v-4.88c0-1.16-.03-2.65-1.63-2.65-1.62 0-1.87 1.26-1.87 2.57v4.96h-3.1V9.48h2.98v1.37h.04a3.28 3.28 0 0 1 2.95-1.62c3.15 0 3.73 2.08 3.73 4.78v5.49Z"></path>
                </svg>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <nav class="flex flex-wrap items-center justify-center gap-6 text-sm font-medium">
            <NuxtLink 
              to="#" 
              class="text-slate-600 transition-all duration-300 hover:text-purple-600 hover:scale-105">
              Terms & Conditions
            </NuxtLink>
            <NuxtLink 
              to="#" 
              class="text-slate-600 transition-all duration-300 hover:text-purple-600 hover:scale-105">
              Privacy Policy
            </NuxtLink>
            <NuxtLink 
              to="#" 
              class="text-slate-600 transition-all duration-300 hover:text-purple-600 hover:scale-105">
              Contact
            </NuxtLink>
          </nav>
        </div>

        <!-- Bottom Section -->
        <div class="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p class="text-slate-600 text-center md:text-left">
            © 2026 <span class="font-semibold gradient-text">Leszek W. Król</span>. All rights reserved.
          </p>
          
          <p class="text-slate-500 text-center md:text-right max-w-md">
            Built with ❤️ using Nuxt 4 & Tailwind CSS
          </p>
        </div>
      </div>

      <!-- Extra Bottom Text -->
      <div class="mt-6 text-center">
        <p class="text-sm text-slate-500 max-w-2xl mx-auto">
          Experience the next generation of mobile applications. Download today and join thousands of satisfied users.
        </p>
      </div>
    </div>
  </footer>
</template>