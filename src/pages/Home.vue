<script setup lang="ts">
import HeroCarousel from '../components/Carousel.vue';
import { PARTNERS } from '../constants';
import { ArrowRight, ShieldCheck, FileSearch, Gavel } from 'lucide-vue-next';

const services = [
  {
    title: "Incident Reconstruction",
    desc: "Advanced simulation and kinematic analysis of vessel collisions.",
    icon: FileSearch
  },
  {
    title: "Expert Witness",
    desc: "Unshakable testimony for High Court Admiralty proceedings.",
    icon: Gavel
  },
  {
    title: "Forensic Auditing",
    desc: "Deep-dive technical verification of VDR and logbook data.",
    icon: ShieldCheck
  }
];
</script>

<template>
  <div class="bg-marine-900">
    <HeroCarousel />
    
    <!-- Mission Statement -->
    <section class="py-32 relative overflow-hidden">
      <div class="absolute top-0 left-0 w-24 h-full border-r border-white/5 hidden md:block"></div>
      
      <div class="max-w-5xl mx-auto px-6 text-center relative z-10">
        <div class="inline-block mb-6 px-3 py-1 border border-rebel/30 text-rebel text-xs font-mono uppercase tracking-widest">
          The Collective
        </div>
        <h2 class="text-3xl md:text-5xl font-serif text-slate-100 mb-8 leading-tight">
          We translate maritime chaos into <span class="text-marine-400">forensic certainty</span>.
        </h2>
        <p class="text-marine-300 text-lg font-light leading-relaxed max-w-3xl mx-auto">
          Neptune Reports bridges the gap between the raw reality of the engine room and the clinical precision of the courtroom. We are not just surveyors; we are the architects of truth in maritime disputes.
        </p>
      </div>
    </section>

    <!-- Partners -->
    <section class="py-20 bg-marine-800/30 border-y border-white/5 relative">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid md:grid-cols-2 gap-12 md:gap-24">
          <div v-for="(partner, index) in PARTNERS" :key="partner.id" 
               class="group relative" 
               :class="{ 'md:mt-24': index === 1 }">
            
            <!-- Image Container -->
            <div class="relative h-[500px] w-full overflow-hidden bg-marine-900 border border-white/10 transition-all duration-500 group-hover:border-marine-400/50">
              <div class="absolute inset-0 bg-marine-900/20 z-10 group-hover:bg-transparent transition-all duration-500"></div>
              <img :src="partner.image" :alt="partner.name" class="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700" />
              
              <!-- Hover Overlay -->
              <div class="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-marine-900 to-transparent z-20">
                <span class="text-marine-400 font-mono text-xs tracking-widest block mb-1">{{ partner.role }}</span>
                <h3 class="text-2xl font-serif text-white">{{ partner.name }}</h3>
              </div>
            </div>

            <!-- Content -->
            <div class="mt-8 pl-4 border-l border-marine-400/30 group-hover:border-marine-400 transition-colors duration-500">
              <p class="text-marine-300 mb-6 leading-relaxed">
                {{ partner.bio }}
              </p>
              <router-link :to="`/portfolio/${partner.id}`" class="inline-flex items-center text-sm font-bold uppercase tracking-widest text-slate-200 group-hover:text-marine-400 transition-colors">
                View Dossier <ArrowRight class="ml-2 w-4 h-4" />
              </router-link>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-32 px-6 max-w-7xl mx-auto">
      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="(service, idx) in services" :key="idx" class="p-8 border border-white/5 hover:border-marine-400/30 hover:bg-white/5 transition-all duration-300 group">
          <component :is="service.icon" class="w-10 h-10 text-marine-400 mb-6 group-hover:text-rebel transition-colors" />
          <h3 class="text-xl font-serif text-slate-200 mb-4">{{ service.title }}</h3>
          <p class="text-marine-300 text-sm leading-relaxed">{{ service.desc }}</p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 text-center bg-gradient-to-b from-marine-900 to-marine-800">
      <h2 class="text-4xl font-serif text-white mb-8">Ready to uncover the truth?</h2>
      <router-link to="/contact" class="inline-block px-10 py-4 border border-marine-400 text-marine-400 font-bold tracking-[0.2em] hover:bg-marine-400 hover:text-marine-900 transition-all duration-300 uppercase clip-corner">
        Initiate Contact
      </router-link>
    </section>
  </div>
</template>

<style scoped>
.clip-corner {
  clip-path: polygon(0 0, 100% 0, 100% 70%, 90% 100%, 0 100%);
}
</style>
