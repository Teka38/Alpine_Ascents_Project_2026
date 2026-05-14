// ===== ALPINE ASCENTS — SITE DATA =====

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  {
    label: 'Explore', href: '#about', dropdown: [
      { label: 'About Mountaineering', href: '#about' },
      { label: 'History', href: '#history' },
      { label: 'Types & Styles', href: '#explore' },
      { label: 'Techniques', href: '#explore' },
      { label: 'Hazards', href: '#survival' },
      { label: 'Guidelines', href: '#guidelines' },
    ]
  },
  {
    label: 'Expeditions', href: '#services', dropdown: [
      { label: 'Services', href: '#services' },
      { label: 'Clubs', href: '#clubs' },
      { label: 'Stories', href: '#records' },
    ]
  },
  {
    label: 'Media', href: '#gallery', dropdown: [
      { label: 'Gallery', href: '#gallery' },
      { label: 'Records', href: '#records' },
    ]
  },
  { label: 'Contact', href: '#contact' },
];

export const STATS = [
  { value: '8,849m', label: 'Everest Summit', icon: '🏔' },
  { value: '14', label: '8000m Peaks', icon: '⛰' },
  { value: '7', label: 'Continents Summited', icon: '🌍' },
  { value: '200+', label: 'Countries Represented', icon: '🧭' },
];

export const TIMELINE = [
  { year: '1786', title: 'Mont Blanc — First Ascent', description: 'Jacques Balmat and Michel-Gabriel Paccard made the first recorded ascent of Mont Blanc, the highest peak in the Alps, igniting the mountaineering era.', side: 'left' },
  { year: '1865', title: 'Matterhorn Conquered', description: 'Edward Whymper led the first ascent of the Matterhorn. The descent claimed four lives, sparking global debate about mountain safety and ethics.', side: 'right' },
  { year: '1953', title: 'Everest Summit', description: 'Sir Edmund Hillary and Tenzing Norgay Sherpa reached the summit of Mount Everest on 29 May 1953 — the highest point on Earth at 8,849 metres.', side: 'left' },
  { year: '1964', title: 'All 8000m Peaks Climbed', description: 'Shishapangma became the last of the 14 eight-thousanders to be summited, completing a chapter in high-altitude mountaineering history.', side: 'right' },
  { year: '1978', title: 'Everest Without Oxygen', description: 'Reinhold Messner and Peter Habeler summited Everest without supplemental oxygen — considered one of the greatest achievements in climbing history.', side: 'left' },
  { year: '2019', title: 'Speed Records Broken', description: 'Nirmal Purja completed all 14 eight-thousanders in 189 days — obliterating the previous record of nearly 8 years set by Jerzy Kukuczka.', side: 'right' },
];

export const CLIMBING_TYPES = [
  { name: 'Alpine Climbing', desc: 'A complete style involving snow, ice and rock in high mountain environments, often requiring multi-day ascents in remote conditions.' },
  { name: 'Ice Climbing', desc: 'Ascending frozen waterfalls and glacial ice formations using crampons, ice axes, and specialized protection.' },
  { name: 'Rock Climbing', desc: 'Technical ascent of rock faces using hands, feet and protection gear across grades from beginner to extreme.' },
  { name: 'Expedition Climbing', desc: 'Large-scale ascents of high-altitude peaks requiring weeks of acclimatization, logistics and team coordination.' },
  { name: 'Mixed Climbing', desc: 'Combining rock and ice techniques on the same route — among the most technically demanding disciplines in modern mountaineering.' },
];

export const TECHNIQUES = [
  { name: 'Rope Systems', desc: 'Understanding lead climbing, top-rope, fixed lines and rappelling systems forms the backbone of safe mountain travel.' },
  { name: 'Belaying', desc: 'The art of managing rope to protect a climbing partner — a fundamental skill requiring discipline and technique.' },
  { name: 'Navigation', desc: 'Map reading, compass work and GPS usage in whiteout conditions, glaciated terrain and complex ridgelines.' },
  { name: 'Ice Axe Use', desc: 'Carrying, self-arresting, chopping steps and anchoring with the ice axe — a climber\'s most essential tool.' },
  { name: 'Survival Techniques', desc: 'Snow shelters, emergency bivouacking, avalanche burial survival, and wilderness first aid in extreme altitude.' },
];

export const SHELTERS = [
  { name: 'Base Camp', desc: 'The operational hub for major expeditions — typically at 4,000–5,500m with tented infrastructure and acclimatization zones.', img: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80' },
  { name: 'High Camp', desc: 'Minimalist shelter at extreme altitude, designed for rapid deployment in harsh alpine conditions above 6,000m.', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80' },
  { name: 'Emergency Bivouac', desc: 'Unplanned overnight survival using snow caves, bivy sacks or natural formations when retreat is impossible.', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80' },
];

export const HAZARDS = [
  { name: 'Avalanche', desc: 'The deadliest mountain hazard — triggered by slope angle, snowpack instability, temperature change or human activity.', icon: '❄️' },
  { name: 'Frostbite', desc: 'Tissue freezing in extremities caused by prolonged cold exposure. Prevention and early recognition are critical.', icon: '🧊' },
  { name: 'Altitude Sickness', desc: 'AMS, HACE and HAPE can be fatal above 3,000m. Proper acclimatization is non-negotiable for any expedition.', icon: '🫁' },
  { name: 'Weather Extremes', desc: 'Sudden storm systems, whiteouts, and wind speeds exceeding 200 km/h are routine above 7,000m.', icon: '🌩️' },
  { name: 'Falls & Objective Hazard', desc: 'Rockfall, serac collapse and crevasses are constant threats requiring route awareness and decisive movement.', icon: '⚠️' },
];

export const SERVICES = [
  { title: 'Guided Expeditions', desc: 'Expert-led ascents from trekking peaks to Himalayan giants. Our IFMGA-certified guides ensure safety at every altitude.', icon: '🧭' },
  { title: 'Professional Training', desc: 'Structured courses covering crevasse rescue, high-altitude medicine, navigation, and technical rope work.', icon: '📋' },
  { title: 'Gear Rental', desc: 'World-class expedition equipment from leading manufacturers — fully serviced, inspected and certified.', icon: '🎒' },
  { title: 'Survival Training', desc: 'Immersive wilderness survival programs including avalanche awareness, emergency bivouac and first-aid certification.', icon: '🛡️' },
  { title: 'Custom Expeditions', desc: 'Bespoke itineraries crafted around your experience, goals and timeline — from acclimatization treks to first ascents.', icon: '🗺️' },
];

export const PACKAGES = [
  {
    id: 'basic',
    name: 'Base Camp',
    tier: 'Basic',
    duration: '7 Days',
    price: '$1,890',
    badge: '',
    features: [
      'Trekking to EBC (5,364m)',
      'Professional guide',
      'Gear kit included',
      'Accommodation & meals',
      'Emergency insurance',
      'Pre-trip briefing',
    ]
  },
  {
    id: 'standard',
    name: 'Summit Seeker',
    tier: 'Standard',
    duration: '14 Days',
    price: '$4,500',
    badge: 'Most Popular',
    features: [
      'Technical peak ascent',
      'IFMGA-certified guide',
      'Full gear package',
      'Helicopter rescue cover',
      'Medical oxygen',
      'Acclimatization schedule',
      'Porter support',
    ]
  },
  {
    id: 'premium',
    name: 'Himalayan Elite',
    tier: 'Premium',
    duration: '30 Days',
    price: '$12,800',
    badge: 'Premium',
    features: [
      '8000m peak attempt',
      '2 lead IFMGA guides',
      'Premium expedition gear',
      'Dedicated Sherpa team',
      'Satellite communication',
      'Full medical support',
      'Private helicopter evac',
      'Documentary filming',
    ]
  },
];

export const CLUBS = [
  { name: 'Alpine Club of London', country: 'United Kingdom', desc: 'Founded in 1857 — the world\'s oldest mountaineering club with a legacy spanning every major first ascent.', lat: 51.5074, lng: -0.1278, img: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=500&q=80' },
  { name: 'Club Alpin Français', country: 'France', desc: 'One of Europe\'s largest mountaineering federations — championing alpine safety, access and training since 1874.', lat: 45.8326, lng: 6.8652, img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=500&q=80' },
  { name: 'American Alpine Club', country: 'USA', desc: 'America\'s premier climbing organization, supporting expeditions, research, and conservation across North America.', lat: 39.7392, lng: -104.9903, img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&q=80' },
  { name: 'Nepal Mountaineering Association', country: 'Nepal', desc: 'The governing body for climbing in the Himalayas — steward of the world\'s highest peaks and Sherpa culture.', lat: 27.7172, lng: 85.3240, img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500&q=80' },
  { name: 'Deutscher Alpenverein', country: 'Germany', desc: 'With over 1.3 million members, the DAV is the world\'s largest mountaineering association, renowned for Alpine safety standards.', lat: 47.8095, lng: 13.0550, img: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=500&q=80' },
  { name: 'Himalayan Club', country: 'India', desc: 'Established in 1928, promoting high-altitude exploration, expedition support and documentation across the Indian subcontinent.', lat: 28.6139, lng: 77.2090, img: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=500&q=80' },
];

export const RECORDS = [
  { title: 'Fastest Everest Ascent', name: 'Pemba Dorje Sherpa', detail: '8 hours 10 minutes — 2004', img: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=600&q=80' },
  { title: 'All 14 Eight-Thousanders', name: 'Nirmal Purja', detail: '189 Days — 2019', img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80' },
  { title: 'Oldest Everest Summiteer', name: 'Yuichiro Miura', detail: '80 Years Old — 2013', img: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80' },
  { title: 'Solo Winter Everest', name: 'Krzysztof Wielicki', detail: 'First Solo Winter Ascent — 1980', img: 'https://images.unsplash.com/photo-1505156868547-9b49f4df4e04?w=600&q=80' },
];

export const STORIES = [
  { title: 'Into the Death Zone', subtitle: 'K2 Winter Expedition 2021', desc: 'Ten climbers reached the summit of K2 in winter for the first time in history — a feat once deemed impossible by the mountaineering world.', img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=700&q=80' },
  { title: 'The Last Great Problem', subtitle: 'Annapurna South Face', desc: 'Reinhold Messner\'s ascent of Annapurna\'s south face redefined what is possible in alpine-style climbing above 8,000 metres.', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&q=80' },
  { title: 'Above the Clouds', subtitle: 'Denali Solo Traverse', desc: 'A lone climber\'s 22-day traverse of Denali\'s west buttress in whiteout conditions — a story of endurance, solitude and summit glory.', img: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=700&q=80' },
];

export const GALLERY_IMAGES = [
  { src: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&q=80', alt: 'Himalayan Ridge', span: 'tall' },
  { src: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80', alt: 'High Altitude Camp', span: '' },
  { src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80', alt: 'Snow Peak at Dusk', span: '' },
  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', alt: 'Mountain Summit View', span: 'wide' },
  { src: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&q=80', alt: 'Alpine Glacier', span: '' },
  { src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80', alt: 'Climber on Ridge', span: 'tall' },
  { src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80', alt: 'Mountain Panorama', span: '' },
  { src: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80', alt: 'Expedition Team', span: '' },
  { src: 'https://images.unsplash.com/photo-1505156868547-9b49f4df4e04?w=800&q=80', alt: 'Ice Wall Ascent', span: 'wide' },
  { src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80', alt: 'Dawn on the Summit', span: '' },
];

export const GUIDELINES = [
  { title: 'Safety First', icon: '🛡️', desc: 'Never compromise on safety protocols. Brief all team members before departure and establish clear turnaround times regardless of weather.' },
  { title: 'Pre-Expedition Preparation', icon: '📋', desc: 'Maintain peak physical fitness, complete acclimatization cycles, study the route thoroughly and prepare for every weather scenario.' },
  { title: 'Environmental Responsibility', icon: '🌿', desc: 'Leave No Trace principles apply at altitude. Pack out all waste, respect wildlife corridors, and follow local environmental regulations.' },
  { title: 'Ethical Climbing', icon: '🤝', desc: 'Respect local cultures, support Sherpa communities fairly, and maintain honest reporting of ascents. The summit is only half the story.' },
  { title: 'Equipment Standards', icon: '⚙️', desc: 'Use only UIAA or CE-certified equipment. Inspect gear before every outing and replace items showing wear, damage or age degradation.' },
  { title: 'Health & Acclimatization', icon: '❤️', desc: 'Follow the "climb high, sleep low" protocol. Recognize AMS, HAPE and HACE symptoms early. Never ascend with symptoms — descend immediately.' },
];

export const MOUNTAINEERING_FACTS = [
  'Mount Everest grows approximately 4mm taller every year due to tectonic activity.',
  'The Death Zone above 8,000m has oxygen levels too low to sustain human life indefinitely.',
  'K2 has a fatality rate nearly 3x higher than Everest and has never been summited in winter before 2021.',
  'Tenzing Norgay was the first person to consume food on Everest\'s summit — chocolate and sardines.',
  'The word "Sherpa" means "Easterner" in Tibetan — they are the backbone of Himalayan expedition culture.',
  'Annapurna I has the highest fatality-to-summit ratio of all 14 eight-thousanders.',
  'The first woman to summit Everest was Junko Tabei of Japan on May 16, 1975.',
  'Reinhold Messner completed all 14 eight-thousanders without supplemental oxygen — a feat unmatched.',
  'Mont Blanc was first climbed in 1786 — marking the birth of modern alpinism.',
  'Crevasses on glaciers can exceed 45 metres in depth and are often hidden under thin snow bridges.',
];
