'use strict';

const PROFILES = [
  {
    id: 1,
    name: 'Sophia',
    city: 'Dubai',
    district: 'Downtown Dubai',
    age: 24,
    height: 168,
    weight: 52,
    bust: 'C',
    priceFrom: '200 USD / hour',
    phone: '+48 500 210 111',
    languages: ['English', 'Polish'],
    availability: 'Daily, 12:00 - 02:00',
    aboutMe: 'Elegant companion for dinners, private meetings, city evenings and premium social events.',
    services: ['Dinner dates', 'Private meetings', 'Travel companion', 'City evenings', 'VIP events', 'Relax massage'],
    rates: [
      { label: '1 hour', price: '200 USD' },
      { label: '2 hours', price: '360 USD' },
      { label: 'Night', price: '800 USD' }
    ],
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    gallery: [
      'https://randomuser.me/api/portraits/women/44.jpg',
      'https://randomuser.me/api/portraits/women/45.jpg',
      'https://randomuser.me/api/portraits/women/46.jpg',
      'https://randomuser.me/api/portraits/women/47.jpg'
    ],
    badges: ['vip', 'verified'],
    tags: ['Blonde', 'Slim', 'English'],
    color: '#c4a0b4'
  },
  {
    id: 2,
    name: 'Natalia',
    city: 'Abu Dhabi',
    district: 'Al Zahiyah',
    age: 22,
    height: 162,
    weight: 48,
    bust: 'B',
    priceFrom: '160 USD / hour',
    phone: '+48 500 210 112',
    languages: ['English', 'Russian'],
    availability: 'Daily, 11:00 - 01:00',
    aboutMe: 'Warm, playful and discreet. Ideal for relaxed evenings, stylish dinners and friendly company.',
    services: ['Dinner dates', 'Private meetings', 'Event companion', 'Weekend company', 'Massage', 'Roleplay'],
    rates: [
      { label: '1 hour', price: '160 USD' },
      { label: '2 hours', price: '300 USD' },
      { label: 'Night', price: '640 USD' }
    ],
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    gallery: [
      'https://randomuser.me/api/portraits/women/68.jpg',
      'https://randomuser.me/api/portraits/women/69.jpg',
      'https://randomuser.me/api/portraits/women/70.jpg',
      'https://randomuser.me/api/portraits/women/71.jpg'
    ],
    badges: ['new', 'online'],
    tags: ['Brunette', 'Curvy', 'Russian'],
    color: '#a0b4c4'
  },
  {
    id: 3,
    name: 'Victoria',
    city: 'Dubai',
    district: 'Dubai Marina',
    age: 27,
    height: 171,
    weight: 56,
    bust: 'D',
    priceFrom: '240 USD / hour',
    phone: '+48 500 210 113',
    languages: ['English', 'German'],
    availability: 'Daily, 13:00 - 03:00',
    aboutMe: 'Sophisticated model companion with a calm, polished style for business travel and premium evenings.',
    services: ['Business events', 'Private meetings', 'Travel companion', 'VIP evenings', 'Cocktail dates', 'Massage'],
    rates: [
      { label: '1 hour', price: '240 USD' },
      { label: '2 hours', price: '440 USD' },
      { label: 'Night', price: '960 USD' }
    ],
    photo: 'https://randomuser.me/api/portraits/women/25.jpg',
    gallery: [
      'https://randomuser.me/api/portraits/women/25.jpg',
      'https://randomuser.me/api/portraits/women/26.jpg',
      'https://randomuser.me/api/portraits/women/27.jpg',
      'https://randomuser.me/api/portraits/women/28.jpg'
    ],
    badges: ['vip'],
    tags: ['Redhead', 'Tall', 'German'],
    color: '#c4b0a0'
  },
  {
    id: 4,
    name: 'Mia',
    city: 'Sharjah',
    district: 'Al Majaz',
    age: 21,
    height: 165,
    weight: 51,
    bust: 'B',
    priceFrom: '140 USD / hour',
    phone: '+48 500 210 114',
    languages: ['English', 'Polish'],
    availability: 'Daily, 10:00 - 23:30',
    aboutMe: 'Fresh face with a soft and friendly energy. Best for light evenings, city walks and relaxed private time.',
    services: ['Dinner dates', 'Private meetings', 'Coffee dates', 'Massage', 'Weekend company', 'Outcalls'],
    rates: [
      { label: '1 hour', price: '140 USD' },
      { label: '2 hours', price: '260 USD' },
      { label: 'Night', price: '520 USD' }
    ],
    photo: 'https://randomuser.me/api/portraits/women/29.jpg',
    gallery: [
      'https://randomuser.me/api/portraits/women/29.jpg',
      'https://randomuser.me/api/portraits/women/30.jpg',
      'https://randomuser.me/api/portraits/women/31.jpg',
      'https://randomuser.me/api/portraits/women/32.jpg'
    ],
    badges: ['new', 'verified'],
    tags: ['Blonde', 'Athletic', 'Polish'],
    color: '#b4c4a0'
  },
  {
    id: 5,
    name: 'Aleksandra',
    city: 'Ajman',
    district: 'Al Nuaimiya',
    age: 29,
    height: 170,
    weight: 58,
    bust: 'C',
    priceFrom: '180 USD / hour',
    phone: '+48 500 210 115',
    languages: ['English', 'French'],
    availability: 'Daily, 14:00 - 02:00',
    aboutMe: 'Confident and mature with a private, polished atmosphere. Great choice for guests who value calm and discretion.',
    services: ['Private meetings', 'Travel companion', 'VIP evenings', 'City evenings', 'Massage', 'Roleplay'],
    rates: [
      { label: '1 hour', price: '180 USD' },
      { label: '2 hours', price: '330 USD' },
      { label: 'Night', price: '720 USD' }
    ],
    photo: 'https://randomuser.me/api/portraits/women/43.jpg',
    gallery: [
      'https://randomuser.me/api/portraits/women/43.jpg',
      'https://randomuser.me/api/portraits/women/48.jpg',
      'https://randomuser.me/api/portraits/women/49.jpg',
      'https://randomuser.me/api/portraits/women/50.jpg'
    ],
    badges: ['online'],
    tags: ['Brunette', 'Petite', 'French'],
    color: '#a4a0c4'
  },
  {
    id: 6,
    name: 'Isabella',
    city: 'Dubai',
    district: 'Jumeirah',
    age: 25,
    height: 169,
    weight: 54,
    bust: 'C',
    priceFrom: '220 USD / hour',
    phone: '+48 500 210 116',
    languages: ['English', 'Italian', 'Polish'],
    availability: 'Daily, 15:00 - 03:00',
    aboutMe: 'Luxury host with model looks and a soft personality. Perfect for premium evenings and exclusive companionship.',
    services: ['VIP evenings', 'Private meetings', 'Travel companion', 'Luxury dinners', 'Massage', 'Weekend company'],
    rates: [
      { label: '1 hour', price: '220 USD' },
      { label: '2 hours', price: '400 USD' },
      { label: 'Night', price: '880 USD' }
    ],
    photo: 'https://randomuser.me/api/portraits/women/52.jpg',
    gallery: [
      'https://randomuser.me/api/portraits/women/52.jpg',
      'https://randomuser.me/api/portraits/women/53.jpg',
      'https://randomuser.me/api/portraits/women/54.jpg',
      'https://randomuser.me/api/portraits/women/55.jpg'
    ],
    badges: ['vip', 'online'],
    tags: ['Dark', 'Model', 'Italian'],
    color: '#c4a4a0'
  },
  {
    id: 7,
    name: 'Karolina',
    city: 'Ras Al Khaimah',
    district: 'Al Hamra',
    age: 23,
    height: 163,
    weight: 49,
    bust: 'B',
    priceFrom: '150 USD / hour',
    phone: '+48 500 210 117',
    languages: ['English', 'Polish'],
    availability: 'Daily, 09:00 - 00:00',
    aboutMe: 'Energetic and easy to talk to. Best for active company, city evenings and casual premium dates.',
    services: ['City evenings', 'Dinner dates', 'Private meetings', 'Travel companion', 'Massage', 'Outcalls'],
    rates: [
      { label: '1 hour', price: '150 USD' },
      { label: '2 hours', price: '280 USD' },
      { label: 'Night', price: '600 USD' }
    ],
    photo: 'https://randomuser.me/api/portraits/women/58.jpg',
    gallery: [
      'https://randomuser.me/api/portraits/women/58.jpg',
      'https://randomuser.me/api/portraits/women/59.jpg',
      'https://randomuser.me/api/portraits/women/60.jpg',
      'https://randomuser.me/api/portraits/women/61.jpg'
    ],
    badges: ['new'],
    tags: ['Blonde', 'Sporty', 'Polish'],
    color: '#a0c4b8'
  },
  {
    id: 8,
    name: 'Veronika',
    city: 'Abu Dhabi',
    district: 'Corniche',
    age: 26,
    height: 167,
    weight: 53,
    bust: 'C',
    priceFrom: '195 USD / hour',
    phone: '+48 500 210 118',
    languages: ['English', 'Czech'],
    availability: 'Daily, 12:00 - 01:30',
    aboutMe: 'Refined companion with excellent manners and a luxury apartment setup for discreet premium meetings.',
    services: ['Private meetings', 'VIP evenings', 'Dinner dates', 'Weekend company', 'Massage', 'Travel companion'],
    rates: [
      { label: '1 hour', price: '195 USD' },
      { label: '2 hours', price: '350 USD' },
      { label: 'Night', price: '760 USD' }
    ],
    photo: 'https://randomuser.me/api/portraits/women/62.jpg',
    gallery: [
      'https://randomuser.me/api/portraits/women/62.jpg',
      'https://randomuser.me/api/portraits/women/63.jpg',
      'https://randomuser.me/api/portraits/women/64.jpg',
      'https://randomuser.me/api/portraits/women/65.jpg'
    ],
    badges: ['verified'],
    tags: ['Brunette', 'Elegant', 'Czech'],
    color: '#c4b8a0'
  },
  {
    id: 9,
    name: 'Elena',
    city: 'Dubai',
    district: 'Business Bay',
    age: 28,
    height: 172,
    weight: 57,
    bust: 'D',
    priceFrom: '210 USD / hour',
    phone: '+48 500 210 119',
    languages: ['English', 'Ukrainian', 'Russian'],
    availability: 'Daily, 13:00 - 02:30',
    aboutMe: 'Tall, elegant and polished. A strong fit for premium clients who want a composed luxury experience.',
    services: ['Luxury dinners', 'Private meetings', 'Travel companion', 'VIP evenings', 'Event companion', 'Massage'],
    rates: [
      { label: '1 hour', price: '210 USD' },
      { label: '2 hours', price: '380 USD' },
      { label: 'Night', price: '840 USD' }
    ],
    photo: 'https://randomuser.me/api/portraits/women/72.jpg',
    gallery: [
      'https://randomuser.me/api/portraits/women/72.jpg',
      'https://randomuser.me/api/portraits/women/73.jpg',
      'https://randomuser.me/api/portraits/women/74.jpg',
      'https://randomuser.me/api/portraits/women/75.jpg'
    ],
    badges: ['vip', 'verified'],
    tags: ['Blonde', 'Luxury', 'Ukrainian'],
    color: '#b0a0c4'
  },
  {
    id: 10,
    name: 'Dominika',
    city: 'Fujairah',
    district: 'Fujairah City',
    age: 22,
    height: 160,
    weight: 47,
    bust: 'B',
    priceFrom: '130 USD / hour',
    phone: '+48 500 210 120',
    languages: ['English', 'Polish'],
    availability: 'Daily, 10:00 - 23:00',
    aboutMe: 'Petite, bright and easygoing. Good choice for a relaxed date, city walk or private quality time.',
    services: ['Dinner dates', 'Private meetings', 'Coffee dates', 'Massage', 'City evenings', 'Outcalls'],
    rates: [
      { label: '1 hour', price: '130 USD' },
      { label: '2 hours', price: '240 USD' },
      { label: 'Night', price: '480 USD' }
    ],
    photo: 'https://randomuser.me/api/portraits/women/78.jpg',
    gallery: [
      'https://randomuser.me/api/portraits/women/78.jpg',
      'https://randomuser.me/api/portraits/women/79.jpg',
      'https://randomuser.me/api/portraits/women/80.jpg',
      'https://randomuser.me/api/portraits/women/81.jpg'
    ],
    badges: ['new', 'online'],
    tags: ['Brunette', 'Young', 'Polish'],
    color: '#a0c4a4'
  },
  {
    id: 11,
    name: 'Adriana',
    city: 'Sharjah',
    district: 'Al Khan',
    age: 31,
    height: 168,
    weight: 59,
    bust: 'C',
    priceFrom: '230 USD / hour',
    phone: '+48 500 210 121',
    languages: ['English', 'Spanish'],
    availability: 'Daily, 16:00 - 03:00',
    aboutMe: 'Confident and mature with excellent conversation and a warm, stylish atmosphere for premium company.',
    services: ['VIP evenings', 'Private meetings', 'Travel companion', 'Luxury dinners', 'Massage', 'Weekend company'],
    rates: [
      { label: '1 hour', price: '230 USD' },
      { label: '2 hours', price: '420 USD' },
      { label: 'Night', price: '920 USD' }
    ],
    photo: 'https://randomuser.me/api/portraits/women/82.jpg',
    gallery: [
      'https://randomuser.me/api/portraits/women/82.jpg',
      'https://randomuser.me/api/portraits/women/83.jpg',
      'https://randomuser.me/api/portraits/women/84.jpg',
      'https://randomuser.me/api/portraits/women/85.jpg'
    ],
    badges: ['vip'],
    tags: ['Redhead', 'Mature', 'Spanish'],
    color: '#c4a0a8'
  },
  {
    id: 12,
    name: 'Monika',
    city: 'Ajman',
    district: 'Al Rashidiya',
    age: 24,
    height: 166,
    weight: 52,
    bust: 'C',
    priceFrom: '170 USD / hour',
    phone: '+48 500 210 122',
    languages: ['English', 'Polish'],
    availability: 'Daily, 11:30 - 01:00',
    aboutMe: 'Alternative style with an adventurous but discreet character. Best for private quality time and creative dates.',
    services: ['Private meetings', 'City evenings', 'Event companion', 'Massage', 'Roleplay', 'Weekend company'],
    rates: [
      { label: '1 hour', price: '170 USD' },
      { label: '2 hours', price: '315 USD' },
      { label: 'Night', price: '680 USD' }
    ],
    photo: 'https://randomuser.me/api/portraits/women/86.jpg',
    gallery: [
      'https://randomuser.me/api/portraits/women/86.jpg',
      'https://randomuser.me/api/portraits/women/87.jpg',
      'https://randomuser.me/api/portraits/women/88.jpg',
      'https://randomuser.me/api/portraits/women/89.jpg'
    ],
    badges: ['online', 'verified'],
    tags: ['Dark', 'Tattooed', 'Polish'],
    color: '#a8c4a0'
  }
];

const BADGE_CONFIG = {
  vip: { label: 'VIP', cls: 'badge--vip' },
  new: { label: 'NEW', cls: 'badge--new' },
  online: { label: 'Online', cls: 'badge--online' },
  verified: { label: 'Verified', cls: 'badge--verified' }
};

const APARTMENTS = [
  {
    id: 1,
    title: 'Royal Residence',
    city: 'Dubai',
    area: 'Marina / 2 rooms',
    price: '90 USD / hour',
    imageClass: 'apt-card__img--1',
    icon: 'Suite',
    description: 'Discrete premium apartment with concierge access and late-night self check-in.'
  },
  {
    id: 2,
    title: 'Amber Loft',
    city: 'Sharjah',
    area: 'Al Majaz / loft',
    price: '75 USD / hour',
    imageClass: 'apt-card__img--2',
    icon: 'Loft',
    description: 'Modern loft for private meetings with parking and a separate side entrance.'
  },
  {
    id: 3,
    title: 'Velvet Rooms',
    city: 'Abu Dhabi',
    area: 'Corniche / 1 bedroom',
    price: '80 USD / hour',
    imageClass: 'apt-card__img--3',
    icon: 'Room',
    description: 'Soft lighting, premium linen and discreet arrival designed for short bookings.'
  },
  {
    id: 4,
    title: 'Platinum Flat',
    city: 'Ajman',
    area: 'City center / studio',
    price: '70 USD / hour',
    imageClass: 'apt-card__img--4',
    icon: 'Flat',
    description: 'Clean and stylish studio with contactless access for independent guests.'
  },
  {
    id: 5,
    title: 'Garden Apartment',
    city: 'Ras Al Khaimah',
    area: 'Al Hamra / 2 rooms',
    price: '65 USD / hour',
    imageClass: 'apt-card__img--5',
    icon: 'Stay',
    description: 'Quiet building, private parking and flexible day or evening reservations.'
  },
  {
    id: 6,
    title: 'Moonlight House',
    city: 'Fujairah',
    area: 'City center / 1 bedroom',
    price: '60 USD / hour',
    imageClass: 'apt-card__img--6',
    icon: 'House',
    description: 'Affordable private space with same-day availability and easy key pickup.'
  }
,
  {
    id: 13,
    name: 'Anisa',
    city: 'Dubai',
    district: 'Marina',
    age: 24,
    height: 171,
    weight: 52,
    bust: 'C',
    priceFrom: '900 AED / hour',
    phone: '+971 50 013 0039',
    languages: ['English', 'Russian'],
    availability: 'Daily, 12:00 - 02:00',
    aboutMe: 'Premium companion based in Dubai. Elegant, discreet and attentive to every detail.',
    services: ['Dinner dates', 'Private meetings', 'Travel companion', 'City evenings'],
    rates: [
      { label: '1 hour', price: '900 AED' },
      { label: '2 hours', price: '1620 AED' },
      { label: 'Night', price: '3600 AED' }
    ],
    photo: 'assets/models/anisa/photo_1.jpg',
    gallery: [
      'assets/models/anisa/photo_1.jpg',
      'assets/models/anisa/photo_2.jpg',
      'assets/models/anisa/photo_3.jpg',
      'assets/models/anisa/photo_4.jpg',
      'assets/models/anisa/photo_5.jpg'
    ],
    badges: ['new', 'verified'],
    tags: [],
    color: '#f72585'
  },
  {
    id: 14,
    name: 'Anita',
    city: 'Dubai',
    district: 'Downtown Dubai',
    age: 24,
    height: 167,
    weight: 50,
    bust: 'B',
    priceFrom: '750 AED / hour',
    phone: '+971 50 014 0042',
    languages: ['English', 'Russian'],
    availability: 'Daily, 12:00 - 02:00',
    aboutMe: 'Premium companion based in Dubai. Elegant, discreet and attentive to every detail.',
    services: ['VIP evenings', 'Private meetings', 'Dinner dates', 'Massage'],
    rates: [
      { label: '1 hour', price: '750 AED' },
      { label: '2 hours', price: '1350 AED' },
      { label: 'Night', price: '3000 AED' }
    ],
    photo: 'assets/models/anita/photo_1.jpg',
    gallery: [
      'assets/models/anita/photo_1.jpg',
      'assets/models/anita/photo_2.jpg',
      'assets/models/anita/photo_3.jpg',
      'assets/models/anita/photo_4.jpg',
      'assets/models/anita/photo_5.jpg'
    ],
    badges: ['new'],
    tags: [],
    color: '#f72585'
  },
  {
    id: 15,
    name: 'Berlina',
    city: 'Dubai',
    district: 'JBR',
    age: 25,
    height: 165,
    weight: 51,
    bust: 'C',
    priceFrom: '800 AED / hour',
    phone: '+971 50 015 0045',
    languages: ['English', 'Russian'],
    availability: 'Daily, 12:00 - 02:00',
    aboutMe: 'Premium companion based in Dubai. Elegant, discreet and attentive to every detail.',
    services: ['Dinner dates', 'City evenings', 'Event companion', 'Massage'],
    rates: [
      { label: '1 hour', price: '800 AED' },
      { label: '2 hours', price: '1440 AED' },
      { label: 'Night', price: '3200 AED' }
    ],
    photo: 'assets/models/berlina/photo_1.jpg',
    gallery: [
      'assets/models/berlina/photo_1.jpg',
      'assets/models/berlina/photo_2.jpg',
      'assets/models/berlina/photo_3.jpg',
      'assets/models/berlina/photo_4.jpg',
      'assets/models/berlina/photo_5.jpg'
    ],
    badges: ['new'],
    tags: [],
    color: '#f72585'
  },
  {
    id: 16,
    name: 'Varvara',
    city: 'Dubai',
    district: 'Palm Jumeirah',
    age: 19,
    height: 164,
    weight: 45,
    bust: 'C',
    priceFrom: '1100 AED / hour',
    phone: '+971 50 016 0048',
    languages: ['English', 'Russian'],
    availability: 'Daily, 12:00 - 02:00',
    aboutMe: 'Premium companion based in Dubai. Elegant, discreet and attentive to every detail.',
    services: ['Private meetings', 'VIP evenings', 'Travel companion', 'Luxury dinners'],
    rates: [
      { label: '1 hour', price: '1100 AED' },
      { label: '2 hours', price: '1980 AED' },
      { label: 'Night', price: '4400 AED' }
    ],
    photo: 'assets/models/varvara/photo_1.jpg',
    gallery: [
      'assets/models/varvara/photo_1.jpg',
      'assets/models/varvara/photo_2.jpg',
      'assets/models/varvara/photo_3.jpg',
      'assets/models/varvara/photo_4.jpg',
      'assets/models/varvara/photo_5.jpg'
    ],
    badges: ['vip', 'new', 'verified'],
    tags: [],
    color: '#f72585'
  },
  {
    id: 17,
    name: 'Victoria',
    city: 'Abu Dhabi',
    district: 'Corniche',
    age: 20,
    height: 168,
    weight: 49,
    bust: 'C',
    priceFrom: '950 AED / hour',
    phone: '+971 50 017 0051',
    languages: ['English', 'Russian'],
    availability: 'Daily, 12:00 - 02:00',
    aboutMe: 'Premium companion based in Abu Dhabi. Elegant, discreet and attentive to every detail.',
    services: ['City evenings', 'Dinner dates', 'Weekend company', 'Massage', 'Roleplay'],
    rates: [
      { label: '1 hour', price: '950 AED' },
      { label: '2 hours', price: '1710 AED' },
      { label: 'Night', price: '3800 AED' }
    ],
    photo: 'assets/models/victoria/photo_1.jpg',
    gallery: [
      'assets/models/victoria/photo_1.jpg',
      'assets/models/victoria/photo_2.jpg',
      'assets/models/victoria/photo_3.jpg',
      'assets/models/victoria/photo_4.jpg',
      'assets/models/victoria/photo_5.jpg'
    ],
    badges: ['new'],
    tags: [],
    color: '#f72585'
  },
  {
    id: 18,
    name: 'Joanna',
    city: 'Abu Dhabi',
    district: 'Yas Island',
    age: 20,
    height: 177,
    weight: 62,
    bust: 'C',
    priceFrom: '1000 AED / hour',
    phone: '+971 50 018 0054',
    languages: ['English', 'Russian'],
    availability: 'Daily, 12:00 - 02:00',
    aboutMe: 'Premium companion based in Abu Dhabi. Elegant, discreet and attentive to every detail.',
    services: ['Dinner dates', 'Private meetings', 'Travel companion', 'City evenings'],
    rates: [
      { label: '1 hour', price: '1000 AED' },
      { label: '2 hours', price: '1800 AED' },
      { label: 'Night', price: '4000 AED' }
    ],
    photo: 'assets/models/joanna/photo_1.jpg',
    gallery: [
      'assets/models/joanna/photo_1.jpg',
      'assets/models/joanna/photo_2.jpg',
      'assets/models/joanna/photo_3.jpg',
      'assets/models/joanna/photo_4.jpg',
      'assets/models/joanna/photo_5.jpg'
    ],
    badges: ['vip'],
    tags: [],
    color: '#f72585'
  },
  {
    id: 19,
    name: 'Zaritta',
    city: 'Abu Dhabi',
    district: 'Al Reem Island',
    age: 20,
    height: 166,
    weight: 52,
    bust: 'C',
    priceFrom: '850 AED / hour',
    phone: '+971 50 019 0057',
    languages: ['English', 'Russian'],
    availability: 'Daily, 12:00 - 02:00',
    aboutMe: 'Premium companion based in Abu Dhabi. Elegant, discreet and attentive to every detail.',
    services: ['VIP evenings', 'Private meetings', 'Dinner dates', 'Massage'],
    rates: [
      { label: '1 hour', price: '850 AED' },
      { label: '2 hours', price: '1530 AED' },
      { label: 'Night', price: '3400 AED' }
    ],
    photo: 'assets/models/zaritta/photo_1.jpg',
    gallery: [
      'assets/models/zaritta/photo_1.jpg',
      'assets/models/zaritta/photo_2.jpg',
      'assets/models/zaritta/photo_3.jpg',
      'assets/models/zaritta/photo_4.jpg',
      'assets/models/zaritta/photo_5.jpg'
    ],
    badges: ['verified'],
    tags: [],
    color: '#f72585'
  },
  {
    id: 20,
    name: 'Katie',
    city: 'Sharjah',
    district: 'Al Majaz',
    age: 19,
    height: 167,
    weight: 49,
    bust: 'C',
    priceFrom: '700 AED / hour',
    phone: '+971 50 020 0060',
    languages: ['English', 'Russian'],
    availability: 'Daily, 12:00 - 02:00',
    aboutMe: 'Premium companion based in Sharjah. Elegant, discreet and attentive to every detail.',
    services: ['Dinner dates', 'City evenings', 'Event companion', 'Massage'],
    rates: [
      { label: '1 hour', price: '700 AED' },
      { label: '2 hours', price: '1260 AED' },
      { label: 'Night', price: '2800 AED' }
    ],
    photo: 'assets/models/katie/photo_1.jpg',
    gallery: [
      'assets/models/katie/photo_1.jpg',
      'assets/models/katie/photo_2.jpg',
      'assets/models/katie/photo_3.jpg',
      'assets/models/katie/photo_4.jpg',
      'assets/models/katie/photo_5.jpg'
    ],
    badges: [],
    tags: [],
    color: '#f72585'
  },
  {
    id: 21,
    name: 'Lucy',
    city: 'Sharjah',
    district: 'Al Nahda',
    age: 21,
    height: 165,
    weight: 47,
    bust: 'B',
    priceFrom: '650 AED / hour',
    phone: '+971 50 021 0063',
    languages: ['English', 'Russian'],
    availability: 'Daily, 12:00 - 02:00',
    aboutMe: 'Premium companion based in Sharjah. Elegant, discreet and attentive to every detail.',
    services: ['Private meetings', 'VIP evenings', 'Travel companion', 'Luxury dinners'],
    rates: [
      { label: '1 hour', price: '650 AED' },
      { label: '2 hours', price: '1170 AED' },
      { label: 'Night', price: '2600 AED' }
    ],
    photo: 'assets/models/lucy/photo_1.jpg',
    gallery: [
      'assets/models/lucy/photo_1.jpg',
      'assets/models/lucy/photo_2.jpg',
      'assets/models/lucy/photo_3.jpg',
      'assets/models/lucy/photo_4.jpg',
      'assets/models/lucy/photo_5.jpg'
    ],
    badges: [],
    tags: [],
    color: '#f72585'
  },
  {
    id: 22,
    name: 'Malina',
    city: 'Ras Al Khaimah',
    district: 'Al Marjan Island',
    age: 22,
    height: 171,
    weight: 54,
    bust: 'B',
    priceFrom: '800 AED / hour',
    phone: '+971 50 022 0066',
    languages: ['English', 'Russian'],
    availability: 'Daily, 12:00 - 02:00',
    aboutMe: 'Premium companion based in Ras Al Khaimah. Elegant, discreet and attentive to every detail.',
    services: ['City evenings', 'Dinner dates', 'Weekend company', 'Massage', 'Roleplay'],
    rates: [
      { label: '1 hour', price: '800 AED' },
      { label: '2 hours', price: '1440 AED' },
      { label: 'Night', price: '3200 AED' }
    ],
    photo: 'assets/models/malina/photo_1.jpg',
    gallery: [
      'assets/models/malina/photo_1.jpg',
      'assets/models/malina/photo_2.jpg',
      'assets/models/malina/photo_3.jpg',
      'assets/models/malina/photo_4.jpg',
      'assets/models/malina/photo_5.jpg'
    ],
    badges: ['verified'],
    tags: [],
    color: '#f72585'
  },
  {
    id: 23,
    name: 'Sofia',
    city: 'Ajman',
    district: 'Corniche',
    age: 18,
    height: 166,
    weight: 49,
    bust: 'C',
    priceFrom: '600 AED / hour',
    phone: '+971 50 023 0069',
    languages: ['English', 'Russian'],
    availability: 'Daily, 12:00 - 02:00',
    aboutMe: 'Premium companion based in Ajman. Elegant, discreet and attentive to every detail.',
    services: ['Dinner dates', 'Private meetings', 'Travel companion', 'City evenings'],
    rates: [
      { label: '1 hour', price: '600 AED' },
      { label: '2 hours', price: '1080 AED' },
      { label: 'Night', price: '2400 AED' }
    ],
    photo: 'assets/models/sofia/photo_1.jpg',
    gallery: [
      'assets/models/sofia/photo_1.jpg',
      'assets/models/sofia/photo_2.jpg',
      'assets/models/sofia/photo_3.jpg',
      'assets/models/sofia/photo_4.jpg',
      'assets/models/sofia/photo_5.jpg'
    ],
    badges: [],
    tags: [],
    color: '#f72585'
  },
  {
    id: 24,
    name: 'Nana',
    city: 'Fujairah',
    district: 'Al Aqah',
    age: 20,
    height: 169,
    weight: 51,
    bust: 'C',
    priceFrom: '700 AED / hour',
    phone: '+971 50 024 0072',
    languages: ['English', 'Russian'],
    availability: 'Daily, 12:00 - 02:00',
    aboutMe: 'Premium companion based in Fujairah. Elegant, discreet and attentive to every detail.',
    services: ['VIP evenings', 'Private meetings', 'Dinner dates', 'Massage'],
    rates: [
      { label: '1 hour', price: '700 AED' },
      { label: '2 hours', price: '1260 AED' },
      { label: 'Night', price: '2800 AED' }
    ],
    photo: 'assets/models/nana/photo_1.jpg',
    gallery: [
      'assets/models/nana/photo_1.jpg',
      'assets/models/nana/photo_2.jpg',
      'assets/models/nana/photo_3.jpg',
      'assets/models/nana/photo_4.jpg',
      'assets/models/nana/photo_5.jpg'
    ],
    badges: [],
    tags: [],
    color: '#f72585'
  },
  {
    id: 25,
    name: 'Regina',
    city: 'Dubai',
    district: 'Business Bay',
    age: 21,
    height: 170,
    weight: 57,
    bust: 'C',
    priceFrom: '950 AED / hour',
    phone: '+971 50 025 0075',
    languages: ['English', 'Russian'],
    availability: 'Daily, 12:00 - 02:00',
    aboutMe: 'Premium companion based in Dubai. Elegant, discreet and attentive to every detail.',
    services: ['Dinner dates', 'City evenings', 'Event companion', 'Massage'],
    rates: [
      { label: '1 hour', price: '950 AED' },
      { label: '2 hours', price: '1710 AED' },
      { label: 'Night', price: '3800 AED' }
    ],
    photo: 'assets/models/regina/photo_1.webp',
    gallery: [
      'assets/models/regina/photo_1.webp',
      'assets/models/regina/photo_2.webp',
      'assets/models/regina/photo_3.webp',
      'assets/models/regina/photo_4.webp',
      'assets/models/regina/photo_5.webp'
    ],
    badges: ['verified'],
    tags: [],
    color: '#f72585'
  },
  {
    id: 26,
    name: 'Silvia',
    city: 'Dubai',
    district: 'DIFC',
    age: 18,
    height: 169,
    weight: 49,
    bust: 'B',
    priceFrom: '1200 AED / hour',
    phone: '+971 50 026 0078',
    languages: ['English', 'Russian'],
    availability: 'Daily, 12:00 - 02:00',
    aboutMe: 'Premium companion based in Dubai. Elegant, discreet and attentive to every detail.',
    services: ['Private meetings', 'VIP evenings', 'Travel companion', 'Luxury dinners'],
    rates: [
      { label: '1 hour', price: '1200 AED' },
      { label: '2 hours', price: '2160 AED' },
      { label: 'Night', price: '4800 AED' }
    ],
    photo: 'assets/models/silvia/photo_1.jpg',
    gallery: [
      'assets/models/silvia/photo_1.jpg',
      'assets/models/silvia/photo_2.jpg',
      'assets/models/silvia/photo_3.jpg',
      'assets/models/silvia/photo_4.jpg',
      'assets/models/silvia/photo_5.jpg'
    ],
    badges: ['vip'],
    tags: [],
    color: '#f72585'
  },
  {
    id: 27,
    name: 'Tatyana',
    city: 'Abu Dhabi',
    district: 'Al Zahiyah',
    age: 20,
    height: 170,
    weight: 56,
    bust: 'C',
    priceFrom: '880 AED / hour',
    phone: '+971 50 027 0081',
    languages: ['English', 'Russian'],
    availability: 'Daily, 12:00 - 02:00',
    aboutMe: 'Premium companion based in Abu Dhabi. Elegant, discreet and attentive to every detail.',
    services: ['City evenings', 'Dinner dates', 'Weekend company', 'Massage', 'Roleplay'],
    rates: [
      { label: '1 hour', price: '880 AED' },
      { label: '2 hours', price: '1584 AED' },
      { label: 'Night', price: '3520 AED' }
    ],
    photo: 'assets/models/tatyana/photo_1.jpg',
    gallery: [
      'assets/models/tatyana/photo_1.jpg',
      'assets/models/tatyana/photo_2.jpg',
      'assets/models/tatyana/photo_3.jpg',
      'assets/models/tatyana/photo_4.jpg',
      'assets/models/tatyana/photo_5.jpg'
    ],
    badges: [],
    tags: [],
    color: '#f72585'
  },
  {
    id: 28,
    name: 'Tina',
    city: 'Sharjah',
    district: 'Al Khan',
    age: 19,
    height: 165,
    weight: 49,
    bust: 'B',
    priceFrom: '720 AED / hour',
    phone: '+971 50 028 0084',
    languages: ['English', 'Russian'],
    availability: 'Daily, 12:00 - 02:00',
    aboutMe: 'Premium companion based in Sharjah. Elegant, discreet and attentive to every detail.',
    services: ['Dinner dates', 'Private meetings', 'Travel companion', 'City evenings'],
    rates: [
      { label: '1 hour', price: '720 AED' },
      { label: '2 hours', price: '1296 AED' },
      { label: 'Night', price: '2880 AED' }
    ],
    photo: 'assets/models/tina/photo_1.jpg',
    gallery: [
      'assets/models/tina/photo_1.jpg',
      'assets/models/tina/photo_2.jpg',
      'assets/models/tina/photo_3.jpg',
      'assets/models/tina/photo_4.jpg',
      'assets/models/tina/photo_5.jpg'
    ],
    badges: ['verified'],
    tags: [],
    color: '#f72585'
  },
  {
    id: 29,
    name: 'Helen',
    city: 'Dubai',
    district: 'Jumeirah',
    age: 20,
    height: 169,
    weight: 48,
    bust: 'C',
    priceFrom: '1050 AED / hour',
    phone: '+971 50 029 0087',
    languages: ['English', 'Russian'],
    availability: 'Daily, 12:00 - 02:00',
    aboutMe: 'Premium companion based in Dubai. Elegant, discreet and attentive to every detail.',
    services: ['VIP evenings', 'Private meetings', 'Dinner dates', 'Massage'],
    rates: [
      { label: '1 hour', price: '1050 AED' },
      { label: '2 hours', price: '1890 AED' },
      { label: 'Night', price: '4200 AED' }
    ],
    photo: 'assets/models/helen/photo_1.webp',
    gallery: [
      'assets/models/helen/photo_1.webp',
      'assets/models/helen/photo_2.webp',
      'assets/models/helen/photo_3.webp',
      'assets/models/helen/photo_4.webp',
      'assets/models/helen/photo_5.webp'
    ],
    badges: ['vip'],
    tags: [],
    color: '#f72585'
  },
  {
    id: 30,
    name: 'Emma',
    city: 'Abu Dhabi',
    district: 'Al Raha',
    age: 21,
    height: 178,
    weight: 50,
    bust: 'B',
    priceFrom: '780 AED / hour',
    phone: '+971 50 030 0090',
    languages: ['English', 'Russian'],
    availability: 'Daily, 12:00 - 02:00',
    aboutMe: 'Premium companion based in Abu Dhabi. Elegant, discreet and attentive to every detail.',
    services: ['Dinner dates', 'City evenings', 'Event companion', 'Massage'],
    rates: [
      { label: '1 hour', price: '780 AED' },
      { label: '2 hours', price: '1404 AED' },
      { label: 'Night', price: '3120 AED' }
    ],
    photo: 'assets/models/emma/photo_1.webp',
    gallery: [
      'assets/models/emma/photo_1.webp',
      'assets/models/emma/photo_2.webp',
      'assets/models/emma/photo_3.webp'
    ],
    badges: [],
    tags: [],
    color: '#f72585'
  },
  {
    id: 31,
    name: 'Yana',
    city: 'Dubai',
    district: 'Arabian Ranches',
    age: 19,
    height: 164,
    weight: 53,
    bust: 'A',
    priceFrom: '900 AED / hour',
    phone: '+971 50 031 0093',
    languages: ['English', 'Russian'],
    availability: 'Daily, 12:00 - 02:00',
    aboutMe: 'Premium companion based in Dubai. Elegant, discreet and attentive to every detail.',
    services: ['Private meetings', 'VIP evenings', 'Travel companion', 'Luxury dinners'],
    rates: [
      { label: '1 hour', price: '900 AED' },
      { label: '2 hours', price: '1620 AED' },
      { label: 'Night', price: '3600 AED' }
    ],
    photo: 'assets/models/yana/photo_1.jpg',
    gallery: [
      'assets/models/yana/photo_1.jpg',
      'assets/models/yana/photo_2.jpg',
      'assets/models/yana/photo_3.jpg',
      'assets/models/yana/photo_4.jpg',
      'assets/models/yana/photo_5.jpg'
    ],
    badges: ['verified'],
    tags: [],
    color: '#f72585'
  }
];
