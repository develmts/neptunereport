<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { ChevronLeft, ChevronRight, Compass } from 'lucide-vue-next';
import { CAROUSEL_ITEMS } from '../constants';
import {cdn} from '../utils/cdn';

const currentIndex = ref(0);
const direction = ref<'next' | 'prev'>('next');
let timer: number | null = null;
let milliseconds= 30000

const nextSlide = () => {
  direction.value = 'next';
  currentIndex.value = (currentIndex.value + 1) % CAROUSEL_ITEMS.length;
};

const prevSlide = () => {
  direction.value = 'prev';
  currentIndex.value = (currentIndex.value - 1 + CAROUSEL_ITEMS.length) % CAROUSEL_ITEMS.length;
};

const setIndex = (idx: number) => {
  // Direcció basada en la diferència d’índex (simple i suficient per un carrusel circular)
  direction.value = idx > currentIndex.value ? 'next' : 'prev';
  currentIndex.value = idx;
  resetTimer();
};

const resetTimer = () => {
  if (timer) clearInterval(timer);
  timer = window.setInterval(nextSlide, milliseconds);
};

onMounted(() => {
  timer = window.setInterval(nextSlide, milliseconds);
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>

<template>
  <div class="relative h-screen w-full overflow-hidden bg-marine-900">
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0 z-0">
      <img 
        src="https://picsum.photos/id/452/1920/1080" 
        alt="Ocean background" 
        class="w-full h-full object-cover opacity-30 grayscale contrast-125 scale-105 animate-pulse-slow"
      />
      <!-- Gradients -->
      <div class="absolute inset-0 bg-gradient-to-b from-marine-900/90 via-marine-900/50 to-marine-900"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-marine-900/80 via-transparent to-marine-900/80"></div>
      
      <!-- Tech Grid Overlay -->
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBWMGg0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNjRmZmRhIiBzdHJva2Utb3BhY2l0eT0iMC4wMyIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
    </div>

    <!-- Center Content -->
    <div class="absolute inset-0 z-10 flex items-center justify-center px-4">
      <div class="w-full max-w-6xl mx-auto flex justify-between items-center">
        
        <button
          @click="prevSlide"
          class="hidden md:flex p-4 border border-white/10 text-white/50 hover:text-marine-400 hover:border-marine-400 transition-all duration-300 group rounded-none hover:bg-marine-900/50"
        >
          <ChevronLeft class="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
        </button>

        <!-- CONTENT AREA: 2 columnes asimètriques -->
        <div class="w-full md:w-4/5 relative h-80 flex flex-col items-center justify-center overflow-hidden">
          <transition :name="direction === 'next' ? 'slide-left' : 'slide-right'" mode="out-in">
            <div 
              :key="currentIndex" 
              class="grid grid-cols-1 md:grid-cols-5 gap-10 items-center w-full"
            >
              <!-- Columna 1: text -->
              <div class="md:col-span-3 flex flex-col items-center md:items-start text-center md:text-left">
                <div class="flex items-center space-x-2 mb-6 opacity-70">
                  <Compass class="w-4 h-4 text-rebel animate-spin-slow" />
                  <span class="text-xs font-mono text-marine-400 tracking-widest uppercase">
                    Incident Report #{{ 2024 + currentIndex }}
                  </span>
                </div>
                
                <h1 class="text-3xl md:text-6xl font-serif font-bold text-slate-100 tracking-tighter mb-6 leading-tight">
                  {{ CAROUSEL_ITEMS[currentIndex].title }}
                </h1>
                
                <div class="w-24 h-px bg-gradient-to-r from-transparent via-marine-400 to-transparent mb-6"></div>
                
                <p class="text-lg md:text-xl text-marine-300 max-w-2xl font-light leading-relaxed">
                  {{ CAROUSEL_ITEMS[currentIndex].subtitle }}
                </p>
              </div>

              <!-- Columna 2: imatge -->
              <div class="md:col-span-2 w-full h-full flex items-center justify-center mt-6 md:mt-0">
                <div class="relative w-56 h-56 md:w-72 md:h-72 overflow-hidden rounded-3xl border border-white/10 bg-marine-900/40 shadow-lg shadow-marine-900/60">
                  <img
                    :src="cdn(CAROUSEL_ITEMS[currentIndex].image)"
                    :alt="CAROUSEL_ITEMS[currentIndex].imageAlt || CAROUSEL_ITEMS[currentIndex].title"
                    class="w-full h-full object-cover"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-marine-900/60 via-transparent"></div>
                </div>
              </div>
            </div>
          </transition>
        </div>

        <button
          @click="nextSlide"
          class="hidden md:flex p-4 border border-white/10 text-white/50 hover:text-marine-400 hover:border-marine-400 transition-all duration-300 group rounded-none hover:bg-marine-900/50"
        >
          <ChevronRight class="w-8 h-8 group-hover:translate-x-1 transition-transform" />
        </button>

      </div>
    </div>

    <!-- Progress & Metadata -->
    <div class="absolute bottom-12 left-0 w-full z-20">
      <div class="max-w-7xl mx-auto px-6 flex justify-between items-end border-b border-white/5 pb-4">
        <div class="hidden md:block text-xs font-mono text-marine-300">
          <div>LAT: 51° 30' N</div>
          <div>LON: 00° 07' W</div>
        </div>

        <div class="flex space-x-3 mx-auto md:mx-0">
          <button
            v-for="(_, idx) in CAROUSEL_ITEMS"
            :key="idx"
            @click="setIndex(idx)"
            class="h-1 transition-all duration-500"
            :class="idx === currentIndex ? 'w-12 bg-marine-400' : 'w-4 bg-white/20 hover:bg-white/40'"
          ></button>
        </div>

        <div class="hidden md:block text-xs font-mono text-marine-300 text-right">
          <div>STATUS: ACTIVE</div>
          <div class="text-rebel">PRIORITY: HIGH</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-pulse-slow {
  animation: pulse 10s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
.animate-spin-slow {
  animation: spin 8s linear infinite;
}
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Animació direccional: NEXT → cap a l'esquerra */
.slide-left-enter-from {
  opacity: 0;
  transform: translateX(50px);
}
.slide-left-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.slide-left-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.6s ease;
}

/* Animació direccional: PREV → cap a la dreta */
.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-50px);
}
.slide-right-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.slide-right-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(50px);
}
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.6s ease;
}
</style>
