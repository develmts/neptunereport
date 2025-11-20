<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { PARTNERS } from '../constants';
import { Mail, Award, ChevronRight } from 'lucide-vue-next';

const route = useRoute();
const partner = computed(() => PARTNERS.find(p => p.id === route.params.id));

const initials = computed(() => partner.value ? partner.value.name.split(' ').map(n => n[0]).join('') : '');
</script>

<template>
  <div v-if="partner" class="min-h-screen pt-24 pb-12">
    
    <!-- Header / Hero -->
    <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 mb-20">
      
      <!-- Image Column -->
      <div class="md:col-span-5 relative">
        <div class="relative z-10 border border-white/10 p-2 bg-marine-900">
            <img :src="partner.image" :alt="partner.name" class="w-full aspect-[3/4] object-cover grayscale contrast-125 shadow-2xl" />
            <!-- Tech overlays -->
            <div class="absolute top-6 right-6 text-4xl font-bold text-white/10 font-mono z-20">{{ initials }}</div>
            <div class="absolute bottom-6 left-6 flex space-x-1">
                <div class="w-2 h-2 bg-marine-400"></div>
                <div class="w-2 h-2 bg-rebel"></div>
                <div class="w-2 h-2 bg-white/20"></div>
            </div>
        </div>
        <!-- Decorative background element -->
        <div class="absolute top-8 -left-8 w-full h-full border border-marine-400/20 -z-0 hidden md:block"></div>
      </div>

      <!-- Text Column -->
      <div class="md:col-span-7 flex flex-col justify-center">
        <div class="flex items-center space-x-4 mb-6">
            <div class="h-px w-12 bg-rebel"></div>
            <span class="text-rebel font-mono text-sm uppercase tracking-widest">Dossier #00{{ partner.id === 'trasmonte' ? '1' : '2' }}</span>
        </div>
        
        <h1 class="text-5xl md:text-7xl font-serif text-white mb-4">{{ partner.name }}</h1>
        <h2 class="text-xl text-marine-400 font-mono uppercase tracking-widest mb-8">{{ partner.role }}</h2>
        
        <p class="text-lg text-marine-300 leading-relaxed mb-8 border-l-2 border-white/10 pl-6">
            {{ partner.detailedBio }}
        </p>

        <div class="flex items-center space-x-2 text-sm text-marine-400 hover:text-white transition-colors cursor-pointer">
            <Mail class="w-4 h-4" />
            <a :href="`mailto:${partner.email}`" class="tracking-widest border-b border-marine-400/50 hover:border-marine-400 pb-0.5">{{ partner.email }}</a>
        </div>
      </div>
    </div>

    <!-- Details Grid -->
    <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        
        <!-- Specialties -->
        <div class="bg-marine-800/30 border border-white/5 p-8 relative overflow-hidden">
             <div class="absolute top-0 right-0 p-4 text-9xl font-serif text-white/5 pointer-events-none leading-none select-none">S</div>
             <h3 class="text-2xl font-serif text-white mb-8 flex items-center">
                <span class="w-8 h-px bg-marine-400 mr-4"></span>
                Technical Specialties
             </h3>
             <ul class="space-y-4">
                 <li v-for="item in partner.specialties" :key="item" class="flex items-start text-marine-300 group">
                     <ChevronRight class="w-5 h-5 text-marine-400 mr-2 mt-0.5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                     <span class="group-hover:text-white transition-colors">{{ item }}</span>
                 </li>
             </ul>
        </div>

        <!-- Experience -->
        <div class="bg-marine-800/30 border border-white/5 p-8 relative overflow-hidden">
             <div class="absolute top-0 right-0 p-4 text-9xl font-serif text-white/5 pointer-events-none leading-none select-none">E</div>
             <h3 class="text-2xl font-serif text-white mb-8 flex items-center">
                <span class="w-8 h-px bg-rebel mr-4"></span>
                Professional History
             </h3>
             <ul class="space-y-4">
                 <li v-for="item in partner.experience" :key="item" class="flex items-start text-marine-300 group">
                     <Award class="w-5 h-5 text-rebel mr-2 mt-0.5 flex-shrink-0" />
                     <span class="group-hover:text-white transition-colors">{{ item }}</span>
                 </li>
             </ul>
        </div>

    </div>

    <!-- Navigation Footer -->
    <div class="max-w-7xl mx-auto px-6 mt-20 pt-10 border-t border-white/10 flex justify-between">
        <router-link to="/" class="text-sm font-mono text-marine-400 hover:text-white transition-colors uppercase tracking-widest flex items-center">
            <ChevronRight class="w-4 h-4 rotate-180 mr-2" /> Return to Base
        </router-link>
    </div>

  </div>
  <div v-else class="h-screen flex items-center justify-center text-marine-400 font-mono">
      // PARTNER NOT FOUND //
  </div>
</template>
