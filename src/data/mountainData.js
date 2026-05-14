// ============================================================
// Alpine Ascents — Static Data
// ============================================================

export const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  {
    label: 'Explore',
    dropdown: [
      { label: 'About Mountaineering', href: '#about' },
      { label: 'History', href: '#history' },
      { label: 'Types & Styles', href: '#explore' },
      { label: 'Techniques', href: '#explore' },
      { label: 'Hazards', href: '#survival' },
      { label: 'Guidelines', href: '#guidelines' },
    ],
  },
  {
    label: 'Expeditions',
    dropdown: [
      { label: 'Services', href: '#services' },
      { label: 'Clubs', href: '#clubs' },
      { label: 'Stories', href: '#records' },
    ],
  },
  {
    label: 'Media',
    dropdown: [
      { label: 'Gallery', href: '#gallery' },
      { label: 'Records', href: '#records' },
    ],
  },
  { label: 'Contact', href: '#contact' },
]

export const STATS = [
  { value: '8,849m', label: 'Height of Everest' },
  { value: '14', label: 'Eight-thousanders' },
  { value: '7', label: 'Summits on 7 Continents' },
  { value: '200+', label: 'Countries with Climbers' },
]

export const TIMELINE = [
  {
    year: '1786',
    title: 'Mont Blanc First Ascent',
    desc: 'Jacques Balmat and Michel Paccard made the first recorded ascent of Mont Blanc (4,808m), the highest peak in the Alps — marking the dawn of modern mountaineering.',
    img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
  },
  {
    year: '1865',
    title: 'Matterhorn Conquered',
    desc: 'Edward Whymper led the first ascent of the Matterhorn (4,478m) — a triumph marred by tragedy as four climbers fell to their deaths on the descent.',
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    year: '1953',
    title: 'Everest Summit — The Pinnacle',
    desc: 'Edmund Hillary and Tenzing Norgay became the first confirmed climbers to reach the summit of Mount Everest (8,849m) on May 29, 1953.',
    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
  },
  {
    year: '1978',
    title: 'Everest Without Oxygen',
    desc: 'Reinhold Messner and Peter Habeler made the first ascent of Everest without supplemental oxygen, redefining what the human body is capable of at extreme altitude.',
    img: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=1200&auto=format&fit=crop',
  },
  {
  year: '1986',
  title: 'All 14 Eight-thousanders',
  desc: 'Reinhold Messner became the first person to climb all fourteen peaks above 8,000 metres, completing this superhuman feat without supplemental oxygen.',
  img: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=1400&auto=format&fit=crop',
},
  {
    year: '2010',
    title: 'Speed Records & Modern Era',
    desc: 'The rise of speed climbing and alpine-style ascents redefined expedition standards — Ueli Steck set legendary speed records on the Eiger North Face.',
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
  },
]

export const CLIMBING_TYPES = [
  {
    name: 'Alpine Climbing',
    desc: 'Ascents in high mountain environments combining rock, ice, and snow in a continuous push from base to summit.',
    icon: '⛰️',
  },
  {
    name: 'Ice Climbing',
    desc: 'Technical ascent of frozen waterfalls, ice faces, and glacial features using ice axes and crampons.',
    icon: '🧊',
  },
  {
    name: 'Rock Climbing',
    desc: 'Free climbing on rock faces using natural features for holds, from sport to trad and big wall disciplines.',
    icon: '🪨',
  },
  {
    name: 'Expedition Climbing',
    desc: 'Large-scale ascents of the world\'s highest peaks with fixed ropes, camps, and logistical support teams.',
    icon: '🏔️',
  },
  {
    name: 'Mixed Climbing',
    desc: 'Combining rock and ice techniques on routes featuring both frozen and dry terrain on the same pitch.',
    icon: '🌨️',
  },
]

export const TECHNIQUES = [
  {
    name: 'Rope Systems',
    desc: 'Understanding knots, anchors, belay systems, and rescue techniques to manage fall risk on all terrain.',
    icon: '🪢',
  },
  {
    name: 'Belaying',
    desc: 'Managing a climbing partner\'s rope to arrest falls using belay devices, Münter hitch, and guide mode.',
    icon: '🔗',
  },
  {
    name: 'Navigation',
    desc: 'Map, compass, GPS, and terrain reading skills essential for safe route-finding in whiteout or complex terrain.',
    icon: '🧭',
  },
  {
    name: 'Ice Axe Use',
    desc: 'Self-arrest, plunge step, step cutting, and front-pointing techniques critical for glaciated terrain safety.',
    icon: '⛏️',
  },
  {
    name: 'Survival Techniques',
    desc: 'Emergency bivouac construction, snow shelters, signalling, and wilderness first aid at extreme altitude.',
    icon: '🏕️',
  },
]

export const HAZARDS = [
  {
    name: 'Avalanche',
    desc: 'Mass displacement of snow that can reach speeds of 300 km/h. Requires avalanche training, transceiver, probe, and shovel.',
    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1400&auto=format&fit=crop',
    severity: 'Extreme',
  },
  {
    name: 'Altitude Sickness',
    desc: 'AMS, HACE, and HAPE can be fatal above 3,000m. Acclimatisation, descent, and medication are critical responses.',
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    severity: 'High',
  },
  {
    name: 'Frostbite',
    desc: 'Tissue damage caused by freezing, affecting extremities first. Prevention requires layering, vapor barriers, and constant circulation awareness.',
    img: 'https://images.unsplash.com/photo-1551524164-687a55dd1126?w=800&q=80',
    severity: 'High',
  },
  {
    name: 'Weather Extremes',
    desc: 'Sudden storms, whiteouts, lightning, and extreme cold can trap climbers without warning. Forecast monitoring is non-negotiable.',
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
    severity: 'Extreme',
  },
  {
    name: 'Falls & Rockfall',
    desc: 'Leader falls, anchor failures, and spontaneous rockfall are leading causes of mountaineering fatalities. Helmet and belay technique are essential.',
    img: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&q=80',
    severity: 'Critical',
  },
]

export const SHELTERS = [
  {
    name: 'Base Camp',
    desc: 'A well-established camp at the foot of technical terrain, providing a logistical hub for acclimatisation, rest, and supply management.',
    img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop',
  },
  {
    name: 'High Altitude Camp',
    desc: 'Lightweight tents pitched on exposed ridges and faces above base camp, requiring storm-proof construction and expert anchoring.',
    img: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
  },
  {
    name: 'Emergency Bivouac',
    desc: 'Unplanned overnight stops in snow caves, under overhangs, or inside bivy sacks when progress becomes impossible.',
    img: 'https://images.unsplash.com/photo-1533240332313-0db49b459ad6?w=800&q=80',
  },
]

export const SERVICES = [
  {
    title: 'Guided Expeditions',
    desc: 'Expert-led ascents of the world\'s greatest peaks, from Himalayan giants to Andean volcanoes. Full logistical support and professional mountain guides.',
    icon: '🏔️',
    features: ['IFMGA certified guides', 'Full logistics support', 'Permit handling', 'Camp setup'],
  },
  {
    title: 'Professional Training',
    desc: 'Comprehensive mountaineering courses from beginner to advanced alpine techniques, wilderness first aid, and leadership programs.',
    icon: '📚',
    features: ['Basic to advanced levels', 'Ice and rock skills', 'Wilderness first aid', 'Leadership training'],
  },
  {
    title: 'Gear Rental',
    desc: 'Premium expedition-grade equipment rental for all mountain environments. Regularly inspected and maintained to the highest safety standards.',
    icon: '🎒',
    features: ['Technical hardware', 'High-altitude clothing', 'Navigation tools', 'Safety devices'],
  },
  {
    title: 'Survival Training',
    desc: 'Intensive wilderness and high-altitude survival courses teaching emergency response, weather reading, and self-rescue skills.',
    icon: '🧭',
    features: ['Snow shelter construction', 'Emergency navigation', 'Self-rescue techniques', 'Medical response'],
  },
  {
    title: 'Custom Expeditions',
    desc: 'Bespoke expedition planning for private groups, corporate teams, and experienced climbers seeking unique objectives worldwide.',
    icon: '✨',
    features: ['Custom route planning', 'Private guide teams', 'Flexible scheduling', 'Global destinations'],
  },
]

export const PACKAGES = [
  {
    name: 'Base Camp',
    tier: 'Basic',
    price: '$1,200',
    duration: '7 Days',
    color: '#4a7fa5',
    features: [
      'Guided base camp trek',
      'Basic mountaineering instruction',
      'Camp setup & breakdown',
      'Shared equipment',
      'Daily briefings',
      'Emergency support',
    ],
  },
  {
    name: 'Summit Seeker',
    tier: 'Standard',
    price: '$3,800',
    duration: '14 Days',
    color: '#c9a84c',
    featured: true,
    features: [
      'Guided peak ascent (up to 5,500m)',
      'Full acclimatisation program',
      'Personal gear fitting',
      'Glacier travel training',
      'Weather monitoring',
      'Rescue insurance included',
      'All permits & logistics',
    ],
  },
  {
    name: 'Expedition Elite',
    tier: 'Premium',
    price: '$9,500',
    duration: '28 Days',
    color: '#8b4513',
    features: [
      'High-altitude peak (7,000m+)',
      '1:1 certified guide assignment',
      'Full expedition kit provided',
      'Oxygen system training',
      'Helicopter standby',
      'Full media documentation',
      'Pre-expedition fitness program',
      'Post-expedition debrief',
    ],
  },
]

export const CLUBS = [
  {
    name: 'Alpine Club of Great Britain',
    country: 'United Kingdom',
    desc: 'The world\'s oldest mountaineering club, founded in 1857. Members have pioneered routes across the Himalayas, Alps, and beyond.',
    img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000&auto=format&fit=crop',
    lat: 51.5074,
    lng: -0.1278,
    website: 'https://www.alpine-club.org.uk',
  },
  {
    name: 'American Alpine Club',
    country: 'United States',
    desc: 'Founded in 1902, the AAC supports American climbers worldwide through grants, rescues, huts, and the premier annual climbing journal.',
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
    lat: 39.7392,
    lng: -104.9903,
    website: 'https://americanalpineclub.org',
  },
  {
    name: 'Himalayan Club',
    country: 'India',
    desc: 'Established in 1928, the Himalayan Club promotes high-altitude expeditions and maintains the world\'s most comprehensive Himalayan climbing archive.',
    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1000&auto=format&fit=crop',
    lat: 27.1751,
    lng: 78.0421,
    website: 'https://www.himalayanclub.org',
  },
  {
    name: 'Club Alpin Français',
    country: 'France',
    desc: 'One of Europe\'s largest mountaineering federations with over 100,000 members, offering courses, huts, and advocacy for mountain access.',
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop',
    lat: 45.8992,
    lng: 6.9292,
    website: 'https://www.ffcam.fr',
  },
  {
    name: 'Mountain Club of Kenya',
    country: 'Kenya',
    desc: 'Based in Nairobi, MCK has been at the forefront of East African climbing since 1946, with regular expeditions on Mount Kenya, Kilimanjaro, and beyond.',
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    lat: -1.2921,
    lng: 36.8219,
    website: 'https://www.mountainclubofkenya.org',
  },
  {
    name: 'New Zealand Alpine Club',
    country: 'New Zealand',
    desc: 'Supporting New Zealand\'s proud mountaineering tradition since 1891, with the Southern Alps providing a world-class training ground for international alpinism.',
    img: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80',
    lat: -43.5321,
    lng: 172.1362,
    website: 'https://alpineclub.org.nz',
  },
]

export const RECORDS = [
  {
    title: 'Fastest Everest Ascent',
    holder: 'Mingma Gyalje Sherpa',
    year: '2023',
    detail: 'Summit reached in under 10 hours from South Base Camp — a record that redefines human performance at 8,849m.',
    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
    category: 'Speed',
  },
  {
    title: 'First Woman on All 14 Eight-thousanders',
    holder: 'Nirmal Purja & Kristin Harila',
    year: '2023',
    detail: 'Harila completed all 14 eight-thousanders in 92 days — the fastest ever for any climber, male or female.',
    img: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=1200&auto=format&fit=crop',
    category: 'Achievement',
  },
  {
    title: 'K2 Winter First Ascent',
    holder: 'Nirmal Purja & Nepal Team',
    year: '2021',
    detail: 'Ten Nepali climbers became the first to summit K2 in winter, conquering the last 8,000m peak never climbed in the cold season.',
    img: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=1200&auto=format&fit=crop',
    category: 'Historic',
  },
  {
    title: 'Eiger North Face Speed Record',
    holder: 'Ueli Steck',
    year: '2015',
    detail: 'The Swiss Machine solo-climbed the 1,800m Eiger North Face in 2 hours, 22 minutes and 50 seconds — utterly incomprehensible.',
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
    category: 'Speed',
  },
]

export const STORIES = [
  {
    title: 'The 1996 Everest Disaster',
    excerpt: 'On May 10–11, 1996, a ferocious storm above 8,000 metres claimed eight lives in a single night — the deadliest day in Everest\'s history at that time. The events changed expedition mountaineering forever.',
    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Annapurna South Face — The Wall',
    excerpt: 'Chris Bonington\'s 1970 expedition tackled the 2,700m South Face of Annapurna — one of the most technically demanding walls ever attempted, opening a new era of extreme alpinism.',
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Free Solo — El Capitan',
    excerpt: 'In 2017, Alex Honnold free-soloed the Freerider route on El Capitan (900m) without rope or protection — widely regarded as the greatest athletic achievement in the history of climbing.',
    img: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=1200&auto=format&fit=crop',
  },
]

export const GALLERY_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80',
    caption: 'Storm light over the Himalayas',
    tall: true,
  },
  {
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    caption: 'Summit ridge at dawn',
    tall: false,
  },
  {
    url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1400&auto=format&fit=crop',
    caption: 'Mount Everest North Face',
    tall: true,
  },
  {
    url: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&q=80',
    caption: 'Glacier traverse, Southern Alps',
    tall: false,
  },
  {
    url: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=1400&auto=format&fit=crop',
    caption: 'K2 — The Savage Mountain',
    tall: true,
  },
  {
    url: 'https://images.unsplash.com/photo-1551524164-687a55dd1126?w=1200&q=80',
    caption: 'Ice climbing in the Alps',
    tall: false,
  },
  {
    url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1400&auto=format&fit=crop',
    caption: 'Matterhorn from the Domhütte',
    tall: false,
  },
  {
    url: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1400&auto=format&fit=crop',
    caption: 'Annapurna South Face',
    tall: true,
  },
  {
    url: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?w=1200&q=80',
    caption: 'Technical rock climbing',
    tall: false,
  },
  {
    url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop',
    caption: 'Mont Blanc — Roof of the Alps',
    tall: true,
  },
  {
    url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80',
    caption: 'High camp before summit push',
    tall: false,
  },
  {
    url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1400&auto=format&fit=crop',
    caption: 'Eiger North Face, Bernese Alps',
    tall: false,
  },
]

export const GUIDELINES = [
  {
    title: 'Safety First',
    icon: '🛡️',
    points: [
      'Never climb beyond your skill level',
      'Always inform someone of your route plan',
      'Carry emergency communication devices',
      'Know and practice self-rescue techniques',
    ],
  },
  {
    title: 'Preparation',
    icon: '📋',
    points: [
      'Physical conditioning months before departure',
      'Study route conditions and weather patterns',
      'Complete gear inspection before every climb',
      'Acclimatise properly — never rush altitude',
    ],
  },
  {
    title: 'Environmental Ethics',
    icon: '🌿',
    points: [
      'Pack out all waste — leave no trace',
      'Avoid damaging fragile alpine ecosystems',
      'Respect local communities and customs',
      'Support sustainable expedition operators',
    ],
  },
  {
    title: 'Ethical Climbing',
    icon: '⚖️',
    points: [
      'Respect first ascent traditions and ethics',
      'Do not place unnecessary fixed protection',
      'Credit and support local climbing communities',
      'Oppose commercial exploitation of wild places',
    ],
  },
  {
    title: 'Equipment',
    icon: '🎒',
    points: [
      'Use certified, current-standard equipment only',
      'Retire hardware after impact or age limits',
      'Know how to use every piece of gear',
      'Redundancy is not optional at altitude',
    ],
  },
  {
    title: 'Health & Fitness',
    icon: '💪',
    points: [
      'Undergo a medical evaluation before expeditions',
      'Train altitude-specific fitness at least 3 months prior',
      'Carry a comprehensive expedition medical kit',
      'Know the signs of altitude illness and HAPE/HACE',
    ],
  },
]

export const MOUNTAINEERING_FACTS = [
  'Mount Everest grows approximately 4mm taller every year due to tectonic uplift.',
  'The "Death Zone" above 8,000m has oxygen levels too low to sustain human life indefinitely.',
  'K2 has a fatality rate of roughly 1 death per 4 summits — far deadlier than Everest.',
  'The first ascent of all 7 summits was completed by Dick Bass in 1985.',
  'Nepal has 8 of the world\'s 10 highest mountains within its borders.',
  'The Khumbu Icefall on Everest moves 1 metre per day due to glacial flow.',
  'Climbers on Everest can experience jet-stream winds exceeding 300 km/h.',
  'Tenzing Norgay was the first person to summit Everest twice.',
  'The South Col of Everest sits at 7,906m — higher than most mountains on Earth.',
  'Annapurna I has the highest fatality rate of all eight-thousanders at over 30%.',
]
