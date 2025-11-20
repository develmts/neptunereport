import { Partner, CarouselItem } from './types';

export const PARTNERS: Partner[] = [
  {
    id: 'lopez',
    name: 'PhD Manuel Lopez',
    role: 'Chief Engineer & Failure Analyst',
    specialties: ['Collision Reconstruction', 'Navigation Audits', 'Salvage Operations'],
    bio: 'With 30 years at sea and a decade in forensics, PhD. Manuel López. deciphers the chaotic movements of vessels with surgical precision.',
    image: 'https://picsum.photos/id/433/600/800',
    detailedBio: 'Starting as a cadet and rising to Chief Engineer, Manuel went on to earn a PhD in Metallurgy. He bridges the gap between the grease of the engine room and the sterility of the lab. His innovative use of drone-based internal inspections has revolutionized how we document confined space incidents.',
    experience: [
      'PhD in Marine Metallurgy',
      'Chief Engineer (Steam & Motor)',
      'Patent Holder: Sub-surface hull scanning array',
      'Lead Technical Analyst: North Sea Rig Fire'
    ],
    email: 'lopez@neptune-reports.com',
    imageAlt: 'Portrait of PhD Manuel Lopez'
  },
  {
    id: 'trasmonte',
    name: 'Capt, Emili Trasmonte',
    role: 'Master Mariner & Navigation Expert',
    specialties: ['Propulsion Failure', 'Hull Integrity', 'Fire Causation'],
    bio: 'Capt, Trasmonte looks beneath the waterline. He translates twisted metal and scorched engine rooms into irrefutable timelines of failure.',
    image: 'https://picsum.photos/id/338/600/800',
    detailedBio: 'Captain Emili Trasmonte served as Master on VLCCs and container vessels for over 10 years before turning his eye to forensic investigation. His approach is rooted in the practical reality of bridge management combined with advanced simulation data. He is known for his "rebel" approach to traditional accident theory, often challenging established narratives with hard data.',
    experience: [
      'Expert Witness in High Court of Admiralty',
      'Lead Investigator: Strait of Malacca Collision 2019',
      'Master Mariner Unlimited Tonnage',
      'Author: "The fallacy of the stopping distance"'
    ],
    email: 'trasmonte@neptune-reports.com',
    imageAlt: 'Portrait of Capt. Emili Trasmonte'

  }
];

export const CAROUSEL_ITEMS: CarouselItem[] = [
  {
    title: "UNCOMPROMISING TRUTH",
    subtitle: "We don't just read the report. We rewrite the understanding of the incident.",
    image:"hero/u-truth.png",
    imageAlt:""
  },
  {
    title: "FORENSIC PRECISION",
    subtitle: "Where others see chaos, we see a sequence of events waiting to be decoded.",
    image:"hero/f-prec.png",
    imageAlt:""
  },
  {
    title: "MARINE AUTHORITY",
    subtitle: "Decades of ocean-going experience applied to modern legal challenges.",
    image:"hero/m-auth.png",
    imageAlt:""
  }
];
