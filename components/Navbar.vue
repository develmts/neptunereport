<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Anchor, Menu, X } from 'lucide-vue-next';
import { useRoute } from 'vue-router';

const scrolled = ref(false);
const isOpen = ref(false);
const route = useRoute();

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const closeMenu = () => {
  isOpen.value = false;
};

const isCurrent = (path: string) => route.path === path;
</script>

<template>
  <nav
    class="fixed w-full z-50 transition-all duration-500"
    :class="scrolled ? 'bg-marine-900/95 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'"
  >
    <div class="max-w-7xl mx-auto px-6 flex justify-between items-center">
      
      <!-- Logo -->
      <router-link to="/" class="flex items-center space-x-3 group" @click="closeMenu">
        <div class="p-2 border border-marine-400/30 bg-marine-900/50 rounded-none transform group-hover:rotate-45 transition-transform duration-500">
          <Anchor class="w-6 h-6 text-marine-400 transform group-hover:-rotate-45 transition-transform duration-500" />
        </div>
        <div class="flex flex-col">
          <span class="font-serif text-xl font-bold tracking-widest text-slate-100 leading-none">
            MERIDIAN
          </span>
          <span class="text-[0.6rem] uppercase tracking-[0.3em] text-marine-400 mt-1 font-mono">
            Forensics
          </span>
        </div>
      </router-link>

      <!-- Desktop Menu -->
      <div class="hidden md:flex space-x-10 items-center">
        <router-link 
          to="/" 
          class="nav-link"
          :class="{ 'active': isCurrent('/') }"
        >Home</router-link>
        
        <router-link 
          to="/portfolio/sterling" 
          class="nav-link"
          :class="{ 'active': isCurrent('/portfolio/sterling') }"
        >Sterling</router-link>
        
        <router-link 
          to="/portfolio/vance" 
          class="nav-link"
          :class="{ 'active': isCurrent('/portfolio/vance') }"
        >Vance</router-link>
        
        <router-link 
          to="/contact" 
          class="nav-link"
          :class="{ 'active': isCurrent('/contact') }"
        >Contact</router-link>

        <router-link 
          to="/contact" 
          class="ml-4 px-6 py-2 border border-marine-400 text-marine-400 text-xs font-bold tracking-widest uppercase hover:bg-marine-400 hover:text-marine-900 transition-all duration-300 clip-corner"
        >
          Hire Us
        </router-link>
      </div>

      <!-- Mobile Toggle -->
      <button class="md:hidden text-slate-200 hover:text-marine-400 transition-colors" @click="isOpen = !isOpen">
        <component :is="isOpen ? X : Menu" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide-fade">
      <div v-if="isOpen" class="md:hidden absolute top-full left-0 w-full bg-marine-900 border-b border-marine-800 flex flex-col items-center py-12 space-y-8 shadow-2xl">
        <router-link to="/" @click="closeMenu" class="mobile-link">Home</router-link>
        <router-link to="/portfolio/sterling" @click="closeMenu" class="mobile-link">Capt. Sterling</router-link>
        <router-link to="/portfolio/vance" @click="closeMenu" class="mobile-link">Dr. Vance</router-link>
        <router-link to="/contact" @click="closeMenu" class="mobile-link">Contact</router-link>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
.nav-link {
  @apply relative text-xs uppercase tracking-widest transition-colors duration-300 text-slate-400 hover:text-marine-400 font-semibold;
}
.nav-link.active {
  @apply text-marine-400;
}
.nav-link::before {
  content: '';
  @apply absolute -bottom-2 left-0 w-0 h-px bg-marine-400 transition-all duration-300;
}
.nav-link:hover::before, .nav-link.active::before {
  @apply w-full;
}

.mobile-link {
  @apply text-slate-200 hover:text-marine-400 uppercase tracking-widest text-lg font-serif;
}

/* Stylized cut corner for button */
.clip-corner {
  clip-path: polygon(0 0, 100% 0, 100% 70%, 85% 100%, 0 100%);
}
</style>
