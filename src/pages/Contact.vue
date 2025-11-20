<script setup lang="ts">
import { ref } from 'vue';
import { Send, MapPin, Phone, Globe } from 'lucide-vue-next';

const form = ref({
    name: '',
    email: '',
    subject: '',
    message: ''
});

const handleSubmit = () => {
    // Mock submission
    alert('Secure transmission initialized.');
    
};
</script>

<template>
  <div class="min-h-screen pt-32 pb-20 bg-marine-900">
      <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-16">
          
          <!-- Info Column -->
          <div class="md:col-span-5">
              <h1 class="text-5xl font-serif text-white mb-6">Secure Line</h1>
              <div class="w-20 h-1 bg-rebel mb-8"></div>
              <p class="text-marine-300 mb-12 leading-relaxed">
                  Maritime incidents require immediate, discreet intervention. Whether you require a preliminary assessment or full forensic deployment, our lines are monitored 24/7.
              </p>

              <div class="space-y-8 font-mono text-sm">
                  <div class="flex items-start space-x-4">
                      <div class="p-3 border border-marine-400/30 text-marine-400">
                          <MapPin class="w-5 h-5" />
                      </div>
                      <div>
                          <span class="block text-slate-400 text-xs uppercase tracking-widest mb-1">Headquarters</span>
                          <span class="text-white">14 Dockside Road, Canary Wharf<br/>London, E14 5AB, UK</span>
                      </div>
                  </div>

                  <div class="flex items-start space-x-4">
                      <div class="p-3 border border-marine-400/30 text-marine-400">
                          <Phone class="w-5 h-5" />
                      </div>
                      <div>
                          <span class="block text-slate-400 text-xs uppercase tracking-widest mb-1">Emergency (24/7)</span>
                          <span class="text-white">+44 20 7946 0958</span>
                      </div>
                  </div>

                  <div class="flex items-start space-x-4">
                      <div class="p-3 border border-marine-400/30 text-marine-400">
                          <Globe class="w-5 h-5" />
                      </div>
                      <div>
                          <span class="block text-slate-400 text-xs uppercase tracking-widest mb-1">Global Operations</span>
                          <span class="text-white">Available for deployment worldwide<br/>within 24 hours notice.</span>
                      </div>
                  </div>
              </div>
          </div>

          <!-- Form Column -->
          <div class="md:col-span-7 bg-marine-800/20 p-8 md:p-12 border border-white/5 backdrop-blur-sm">
              <h3 class="text-xl font-serif text-white mb-8">Case Inquiry</h3>
              <form @submit.prevent="handleSubmit" class="space-y-6">
                  <div class="grid md:grid-cols-2 gap-6">
                      <div class="space-y-2">
                          <label class="text-xs font-mono uppercase tracking-widest text-marine-300">Identity</label>
                          <input v-model="form.name" type="text" class="w-full bg-marine-900/50 border border-white/10 focus:border-marine-400 text-white px-4 py-3 outline-none transition-colors" placeholder="Full Name / Organization" />
                      </div>
                      <div class="space-y-2">
                          <label class="text-xs font-mono uppercase tracking-widest text-marine-300">Contact Channel</label>
                          <input v-model="form.email" type="email" class="w-full bg-marine-900/50 border border-white/10 focus:border-marine-400 text-white px-4 py-3 outline-none transition-colors" placeholder="Email Address" />
                      </div>
                  </div>

                  <div class="space-y-2">
                      <label class="text-xs font-mono uppercase tracking-widest text-marine-300">Subject</label>
                      <select v-model="form.subject" class="w-full bg-marine-900/50 border border-white/10 focus:border-marine-400 text-white px-4 py-3 outline-none transition-colors appearance-none">
                          <option value="" disabled selected>Select Inquiry Type</option>
                          <option>Incident Reconstruction</option>
                          <option>Expert Witness Request</option>
                          <option>Salvage Consultation</option>
                          <option>Urgent Deployment</option>
                      </select>
                  </div>

                  <div class="space-y-2">
                      <label class="text-xs font-mono uppercase tracking-widest text-marine-300">Briefing</label>
                      <textarea v-model="form.message" rows="5" class="w-full bg-marine-900/50 border border-white/10 focus:border-marine-400 text-white px-4 py-3 outline-none transition-colors resize-none" placeholder="Provide initial details regarding the incident or requirement..."></textarea>
                  </div>

                  <button type="submit" class="w-full py-4 bg-marine-400/10 hover:bg-marine-400 text-marine-400 hover:text-marine-900 border border-marine-400 transition-all duration-300 uppercase font-bold tracking-widest flex items-center justify-center group">
                      <span>Transmit Inquiry</span>
                      <Send class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
              </form>
          </div>
      </div>
  </div>
</template>
