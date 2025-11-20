<script setup lang="ts">
import { Anchor } from 'lucide-vue-next';
</script>

<template>
  <footer class="bg-marine-900 border-t border-white/5 py-16 relative overflow-hidden">
    <!-- Decoration -->
    <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-12 bg-gradient-to-b from-marine-400 to-transparent opacity-50"></div>

    <div class="max-w-7xl mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-center">
        
        <div class="mb-8 md:mb-0 text-center md:text-left">
          <router-link to="/" class="flex items-center justify-center md:justify-start space-x-2 mb-4 group">
            <div class="p-1 border border-marine-400/50 transform rotate-45 group-hover:rotate-90 transition-transform duration-500">
               <Anchor class="w-4 h-4 text-marine-400 transform -rotate-45 group-hover:-rotate-90 transition-transform duration-500" />
            </div>
            <span class="font-serif font-bold text-slate-200 tracking-widest">Neptune</span>
          </router-link>
          <p class="text-marine-300 text-sm max-w-xs leading-relaxed">
            Defining the standard in marine forensic investigation and expert witness services.
          </p>
        </div>

        <div class="flex flex-col md:flex-row gap-8 text-sm tracking-widest text-marine-300 font-mono">
           <router-link to="/portfolio/lopez" class="hover:text-marine-400 transition-colors flex items-center gap-2">
             <span class="text-rebel opacity-0 hover:opacity-100 transition-opacity">>></span> LOPEZ
           </router-link>
           <router-link to="/portfolio/Trasmonte" class="hover:text-marine-400 transition-colors flex items-center gap-2">
             <span class="text-rebel opacity-0 hover:opacity-100 transition-opacity">>></span> TRASMONTE
           </router-link>
           <router-link to="/contact" class="hover:text-marine-400 transition-colors flex items-center gap-2">
             <span class="text-rebel opacity-0 hover:opacity-100 transition-opacity">>></span> CONTACT
           </router-link>
        </div>
      </div>
      
      <div class="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 font-mono">
        <p>&copy; {{ new Date().getFullYear() }} Neptune Reports. All rights reserved.</p>
        <p class="mt-2 md:mt-0">EST. 2012 // Barcelona // Copenhague</p>
      </div>
    </div>
  </footer>
</template>
