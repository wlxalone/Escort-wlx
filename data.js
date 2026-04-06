'use strict';

const PROFILES = [
  {
    id: 1,
    name: 'Sophia',
    city: 'Warsaw',
    district: 'Srodmiescie',
    age: 24,
    height: 168,
    weight: 52,
    bust: 'C',
    priceFrom: '500 PLN / hour',
    phone: '+48 500 210 111',
    languages: ['English', 'Polish'],
    availability: 'Daily, 12:00 - 02:00',
    aboutMe: 'Elegant companion for dinners, private meetings, city evenings and premium social events.',
    services: ['Dinner dates', 'Private meetings', 'Travel companion', 'City evenings', 'VIP events', 'Relax massage'],
    rates: [
      { label: '1 hour', price: '500 PLN' },
      { label: '2 hours', price: '900 PLN' },
      { label: 'Night', price: '2000 PLN' }
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
    city: 'Krakow',
    district: 'Kazimierz',
    age: 22,
    height: 162,
    weight: 48,
    bust: 'B',
    priceFrom: '400 PLN / hour',
    phone: '+48 500 210 112',
    languages: ['English', 'Russian'],
    availability: 'Daily, 11:00 - 01:00',
    aboutMe: 'Warm, playful and discreet. Ideal for relaxed evenings, stylish dinners and friendly company.',
    services: ['Dinner dates', 'Private meetings', 'Event companion', 'Weekend company', 'Massage', 'Roleplay'],
    rates: [
      { label: '1 hour', price: '400 PLN' },
      { label: '2 hours', price: '750 PLN' },
      { label: 'Night', price: '1600 PLN' }
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
    city: 'Warsaw',
    district: 'Mokotow',
    age: 27,
    height: 171,
    weight: 56,
    bust: 'D',
    priceFrom: '600 PLN / hour',
    phone: '+48 500 210 113',
    languages: ['English', 'German'],
    availability: 'Daily, 13:00 - 03:00',
    aboutMe: 'Sophisticated model companion with a calm, polished style for business travel and premium evenings.',
    services: ['Business events', 'Private meetings', 'Travel companion', 'VIP evenings', 'Cocktail dates', 'Massage'],
    rates: [
      { label: '1 hour', price: '600 PLN' },
      { label: '2 hours', price: '1100 PLN' },
      { label: 'Night', price: '2400 PLN' }
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
    city: 'Gdansk',
    district: 'Oliwa',
    age: 21,
    height: 165,
    weight: 51,
    bust: 'B',
    priceFrom: '350 PLN / hour',
    phone: '+48 500 210 114',
    languages: ['English', 'Polish'],
    availability: 'Daily, 10:00 - 23:30',
    aboutMe: 'Fresh face with a soft and friendly energy. Best for light evenings, city walks and relaxed private time.',
    services: ['Dinner dates', 'Private meetings', 'Coffee dates', 'Massage', 'Weekend company', 'Outcalls'],
    rates: [
      { label: '1 hour', price: '350 PLN' },
      { label: '2 hours', price: '650 PLN' },
      { label: 'Night', price: '1300 PLN' }
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
    city: 'Wroclaw',
    district: 'Stare Miasto',
    age: 29,
    height: 170,
    weight: 58,
    bust: 'C',
    priceFrom: '450 PLN / hour',
    phone: '+48 500 210 115',
    languages: ['English', 'French'],
    availability: 'Daily, 14:00 - 02:00',
    aboutMe: 'Confident and mature with a private, polished atmosphere. Great choice for guests who value calm and discretion.',
    services: ['Private meetings', 'Travel companion', 'VIP evenings', 'City evenings', 'Massage', 'Roleplay'],
    rates: [
      { label: '1 hour', price: '450 PLN' },
      { label: '2 hours', price: '820 PLN' },
      { label: 'Night', price: '1800 PLN' }
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
    city: 'Warsaw',
    district: 'Ursynow',
    age: 25,
    height: 169,
    weight: 54,
    bust: 'C',
    priceFrom: '550 PLN / hour',
    phone: '+48 500 210 116',
    languages: ['English', 'Italian', 'Polish'],
    availability: 'Daily, 15:00 - 03:00',
    aboutMe: 'Luxury host with model looks and a soft personality. Perfect for premium evenings and exclusive companionship.',
    services: ['VIP evenings', 'Private meetings', 'Travel companion', 'Luxury dinners', 'Massage', 'Weekend company'],
    rates: [
      { label: '1 hour', price: '550 PLN' },
      { label: '2 hours', price: '1000 PLN' },
      { label: 'Night', price: '2200 PLN' }
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
    city: 'Poznan',
    district: 'Jezyce',
    age: 23,
    height: 163,
    weight: 49,
    bust: 'B',
    priceFrom: '380 PLN / hour',
    phone: '+48 500 210 117',
    languages: ['English', 'Polish'],
    availability: 'Daily, 09:00 - 00:00',
    aboutMe: 'Energetic and easy to talk to. Best for active company, city evenings and casual premium dates.',
    services: ['City evenings', 'Dinner dates', 'Private meetings', 'Travel companion', 'Massage', 'Outcalls'],
    rates: [
      { label: '1 hour', price: '380 PLN' },
      { label: '2 hours', price: '700 PLN' },
      { label: 'Night', price: '1500 PLN' }
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
    city: 'Krakow',
    district: 'Podgorze',
    age: 26,
    height: 167,
    weight: 53,
    bust: 'C',
    priceFrom: '490 PLN / hour',
    phone: '+48 500 210 118',
    languages: ['English', 'Czech'],
    availability: 'Daily, 12:00 - 01:30',
    aboutMe: 'Refined companion with excellent manners and a luxury apartment setup for discreet premium meetings.',
    services: ['Private meetings', 'VIP evenings', 'Dinner dates', 'Weekend company', 'Massage', 'Travel companion'],
    rates: [
      { label: '1 hour', price: '490 PLN' },
      { label: '2 hours', price: '880 PLN' },
      { label: 'Night', price: '1900 PLN' }
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
    city: 'Warsaw',
    district: 'Wola',
    age: 28,
    height: 172,
    weight: 57,
    bust: 'D',
    priceFrom: '520 PLN / hour',
    phone: '+48 500 210 119',
    languages: ['English', 'Ukrainian', 'Russian'],
    availability: 'Daily, 13:00 - 02:30',
    aboutMe: 'Tall, elegant and polished. A strong fit for premium clients who want a composed luxury experience.',
    services: ['Luxury dinners', 'Private meetings', 'Travel companion', 'VIP evenings', 'Event companion', 'Massage'],
    rates: [
      { label: '1 hour', price: '520 PLN' },
      { label: '2 hours', price: '950 PLN' },
      { label: 'Night', price: '2100 PLN' }
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
    city: 'Lodz',
    district: 'Baluty',
    age: 22,
    height: 160,
    weight: 47,
    bust: 'B',
    priceFrom: '320 PLN / hour',
    phone: '+48 500 210 120',
    languages: ['English', 'Polish'],
    availability: 'Daily, 10:00 - 23:00',
    aboutMe: 'Petite, bright and easygoing. Good choice for a relaxed date, city walk or private quality time.',
    services: ['Dinner dates', 'Private meetings', 'Coffee dates', 'Massage', 'City evenings', 'Outcalls'],
    rates: [
      { label: '1 hour', price: '320 PLN' },
      { label: '2 hours', price: '600 PLN' },
      { label: 'Night', price: '1200 PLN' }
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
    city: 'Gdansk',
    district: 'Wrzeszcz',
    age: 31,
    height: 168,
    weight: 59,
    bust: 'C',
    priceFrom: '570 PLN / hour',
    phone: '+48 500 210 121',
    languages: ['English', 'Spanish'],
    availability: 'Daily, 16:00 - 03:00',
    aboutMe: 'Confident and mature with excellent conversation and a warm, stylish atmosphere for premium company.',
    services: ['VIP evenings', 'Private meetings', 'Travel companion', 'Luxury dinners', 'Massage', 'Weekend company'],
    rates: [
      { label: '1 hour', price: '570 PLN' },
      { label: '2 hours', price: '1050 PLN' },
      { label: 'Night', price: '2300 PLN' }
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
    city: 'Wroclaw',
    district: 'Krzyki',
    age: 24,
    height: 166,
    weight: 52,
    bust: 'C',
    priceFrom: '430 PLN / hour',
    phone: '+48 500 210 122',
    languages: ['English', 'Polish'],
    availability: 'Daily, 11:30 - 01:00',
    aboutMe: 'Alternative style with an adventurous but discreet character. Best for private quality time and creative dates.',
    services: ['Private meetings', 'City evenings', 'Event companion', 'Massage', 'Roleplay', 'Weekend company'],
    rates: [
      { label: '1 hour', price: '430 PLN' },
      { label: '2 hours', price: '790 PLN' },
      { label: 'Night', price: '1700 PLN' }
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
    city: 'Warsaw',
    area: 'Center / 2 rooms',
    price: '220 PLN / hour',
    imageClass: 'apt-card__img--1',
    icon: 'Suite',
    description: 'Discrete premium apartment with concierge access and late-night self check-in.'
  },
  {
    id: 2,
    title: 'Amber Loft',
    city: 'Gdansk',
    area: 'Old Town / loft',
    price: '180 PLN / hour',
    imageClass: 'apt-card__img--2',
    icon: 'Loft',
    description: 'Modern loft for private meetings with parking and a separate side entrance.'
  },
  {
    id: 3,
    title: 'Velvet Rooms',
    city: 'Krakow',
    area: 'Kazimierz / 1 bedroom',
    price: '190 PLN / hour',
    imageClass: 'apt-card__img--3',
    icon: 'Room',
    description: 'Soft lighting, premium linen and discreet arrival designed for short bookings.'
  },
  {
    id: 4,
    title: 'Platinum Flat',
    city: 'Wroclaw',
    area: 'Center / studio',
    price: '170 PLN / hour',
    imageClass: 'apt-card__img--4',
    icon: 'Flat',
    description: 'Clean and stylish studio with contactless access for independent guests.'
  },
  {
    id: 5,
    title: 'Garden Apartment',
    city: 'Poznan',
    area: 'Jezyce / 2 rooms',
    price: '165 PLN / hour',
    imageClass: 'apt-card__img--5',
    icon: 'Stay',
    description: 'Quiet building, private parking and flexible day or evening reservations.'
  },
  {
    id: 6,
    title: 'Moonlight House',
    city: 'Lodz',
    area: 'Center / 1 bedroom',
    price: '150 PLN / hour',
    imageClass: 'apt-card__img--6',
    icon: 'House',
    description: 'Affordable private space with same-day availability and easy key pickup.'
  }
];
