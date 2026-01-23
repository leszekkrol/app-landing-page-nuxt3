<template>
  <footer class="relative mt-32 px-4 pb-12">
    <div class="max-w-6xl mx-auto">
      <!-- Main Footer Content -->
      <div class="space-y-8">
        
        <!-- Top Section -->
        <div class="flex flex-col md:flex-row items-center justify-between gap-8 pb-6 border-b border-slate-200/30">
          
          <!-- Social Links -->
          <div class="flex items-center gap-4">
            <span class="text-slate-500 text-sm">Follow us</span>
            <div class="flex gap-2">
              <a 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Follow on X (formerly Twitter)" 
                class="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition-all duration-200 hover:bg-slate-200 hover:text-slate-900" 
                href="https://x.com/leszekkrol">
                <svg fill="currentColor" viewBox="0 0 16 16" class="h-4 w-4" aria-hidden="true">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 0.5H5.75L9.48421 5.71053L14 0.5H16L10.3895 6.97368L16.5 15.5H11.25L7.51579 10.2895L3 15.5H1L6.61053 9.02632L0.5 0.5ZM12.0204 14L3.42043 2H4.97957L13.5796 14H12.0204Z"></path>
                </svg>
              </a>
              
              <a 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Follow on LinkedIn" 
                class="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition-all duration-200 hover:bg-slate-200 hover:text-slate-900" 
                href="https://www.linkedin.com/in/leszekkrol/">
                <svg fill="currentColor" viewBox="0 0 24 24" class="h-4 w-4" aria-hidden="true">
                  <path d="M21 1.5H3c-.83 0-1.5.68-1.5 1.51V21c0 .83.67 1.51 1.5 1.51h18c.82 0 1.5-.68 1.5-1.51V3c0-.83-.68-1.51-1.5-1.51Zm-13.15 18H4.73V9.48h3.12V19.5ZM6.29 8.1a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6Zm13.22 11.4h-3.1v-4.88c0-1.16-.03-2.65-1.63-2.65-1.62 0-1.87 1.26-1.87 2.57v4.96h-3.1V9.48h2.98v1.37h.04a3.28 3.28 0 0 1 2.95-1.62c3.15 0 3.73 2.08 3.73 4.78v5.49Z"></path>
                </svg>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <nav class="flex flex-wrap items-center justify-center gap-6 text-sm">
            <NuxtLink 
              to="#" 
              class="text-slate-500 transition-colors duration-200 hover:text-slate-700">
              Terms & Conditions
            </NuxtLink>
            <NuxtLink 
              to="#" 
              class="text-slate-500 transition-colors duration-200 hover:text-slate-700">
              Privacy Policy
            </NuxtLink>
            <NuxtLink 
              to="#" 
              class="text-slate-500 transition-colors duration-200 hover:text-slate-700">
              Contact
            </NuxtLink>
          </nav>
        </div>

        <!-- Bottom Section -->
        <div class="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p class="text-center md:text-left">
            © 2026 Leszek W. Król. All rights reserved.
          </p>
          
          <p class="text-center md:text-right text-slate-400 text-xs">
            Built with Nuxt 4 & Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>