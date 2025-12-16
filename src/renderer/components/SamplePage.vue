<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 text-white">
    <!-- Main Content -->
    <div class="container mx-auto px-4 py-8 md:py-16">
      <!-- Header Section -->
      <div class="mb-12 md:mb-20">
        <!-- Logo and Brand -->
        <div class="mb-6 md:mb-8">
          <h1 class="text-3xl md:text-5xl font-bold mb-2">
            <span class="text-blue-400">$eed</span><span class="text-white">Bot</span>
          </h1>
          <p class="text-xl md:text-3xl italic text-gray-300">Originals</p>
        </div>

        <!-- Version Badge -->
        <div class="mb-8 md:mb-12">
          <span class="inline-block px-4 py-2 bg-teal-700/50 border border-teal-500 rounded-full text-sm md:text-base">
            Version 1.0.0
          </span>
        </div>

        <!-- Hero Text -->
        <div class="max-w-3xl mb-8 md:mb-12">
          <h2 class="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h2>
          <p class="text-base md:text-lg text-gray-300 max-w-2xl">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <!-- CTA Button -->
        <div>
          <button class="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-teal-500 hover:bg-teal-600 transition-colors rounded-lg text-base md:text-lg font-semibold">
            Join Now
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Cards Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <!-- Card 1 -->
        <div class="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-slate-700/50 hover:border-teal-500/50 transition-all">
          <h3 class="text-xl md:text-2xl font-bold mb-3 md:mb-4">Duis Aute Irure Dolor</h3>
          <p class="text-sm md:text-base text-gray-400 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <!-- Card 2 -->
        <div class="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-slate-700/50 hover:border-teal-500/50 transition-all">
          <h3 class="text-xl md:text-2xl font-bold mb-3 md:mb-4">Excepteur Sint</h3>
          <p class="text-sm md:text-base text-gray-400 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <!-- Card 3 -->
        <div class="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-slate-700/50 hover:border-teal-500/50 transition-all">
          <h3 class="text-xl md:text-2xl font-bold mb-3 md:mb-4">Sunt in Culpa</h3>
          <p class="text-sm md:text-base text-gray-400 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Component logic here if needed
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
