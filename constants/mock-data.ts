export type LiveMessage = {
  id: number;
  user: string;
  message: string;
};

export type EventItem = {
  id: string;
  title: string;
  date: string;
  time: string;
  city: string;
  venue: string;
  attendees: number;
  ticketFrom: number;
  image: string;
};

export type LocationSpot = {
  id: string;
  city: string;
  country: string;
  activeUsers: number;
  topCategory: string;
  distanceKm: number;
  image: string;
};

export const HOME_HERO = {
  title: 'THE BEST WEBCAM MODELS FOR YOUR PLEASURE',
  brand: 'HOTCAM',
  subtitle: 'IMMERSE YOURSELF IN A WORLD OF SEXUAL FANTASY',
  backgroundImage: 'https://i.pravatar.cc/900?u=home-hero-banner',
};

export const LIVE_STREAM = {
  hostName: 'OPRAH MOSS',
  hostImage: 'https://i.pravatar.cc/900?u=live-oprah-moss',
  viewers: 256,
  messages: [
    { id: 1, user: 'Joseph Johnson', message: 'Are you new here?' },
    { id: 2, user: 'Sammill', message: 'Your broadcast rocks.' },
    { id: 3, user: 'James Mitchell', message: 'So sweet.' },
    { id: 4, user: 'Joel Grant', message: 'Amazing vibe tonight.' },
    { id: 5, user: 'Rita', message: 'Can you wave to Paris?' },
    { id: 6, user: 'Dan', message: 'This set design is wild.' },
  ] as LiveMessage[],
};

export const EVENTS: EventItem[] = [
  {
    id: 'after-dark-nyc',
    title: 'After Dark VIP Night',
    date: 'Fri, Feb 20',
    time: '9:00 PM',
    city: 'New York',
    venue: 'Velvet Loft',
    attendees: 342,
    ticketFrom: 39,
    image: 'https://i.pravatar.cc/600?u=event-nyc',
  },
  {
    id: 'miami-live-fest',
    title: 'Miami Live Fest',
    date: 'Sat, Feb 28',
    time: '8:30 PM',
    city: 'Miami',
    venue: 'Neon Pier',
    attendees: 519,
    ticketFrom: 49,
    image: 'https://i.pravatar.cc/600?u=event-miami',
  },
  {
    id: 'la-private-showcase',
    title: 'Private Showcase LA',
    date: 'Thu, Mar 5',
    time: '7:30 PM',
    city: 'Los Angeles',
    venue: 'Rose Room',
    attendees: 227,
    ticketFrom: 59,
    image: 'https://i.pravatar.cc/600?u=event-la',
  },
  {
    id: 'vegas-gold-room',
    title: 'Gold Room Weekend',
    date: 'Sat, Mar 14',
    time: '10:00 PM',
    city: 'Las Vegas',
    venue: 'Crimson Hall',
    attendees: 684,
    ticketFrom: 79,
    image: 'https://i.pravatar.cc/600?u=event-vegas',
  },
];

export const LOCATIONS: LocationSpot[] = [
  {
    id: 'manhattan',
    city: 'Manhattan',
    country: 'USA',
    activeUsers: 1280,
    topCategory: 'POPULAR',
    distanceKm: 4.2,
    image: 'https://i.pravatar.cc/600?u=loc-manhattan',
  },
  {
    id: 'south-beach',
    city: 'South Beach',
    country: 'USA',
    activeUsers: 940,
    topCategory: 'LIVE',
    distanceKm: 9.8,
    image: 'https://i.pravatar.cc/600?u=loc-south-beach',
  },
  {
    id: 'hollywood',
    city: 'Hollywood',
    country: 'USA',
    activeUsers: 1160,
    topCategory: 'MILFS',
    distanceKm: 14.6,
    image: 'https://i.pravatar.cc/600?u=loc-hollywood',
  },
  {
    id: 'fremont',
    city: 'Fremont',
    country: 'USA',
    activeUsers: 870,
    topCategory: 'FETISHISTS',
    distanceKm: 24.1,
    image: 'https://i.pravatar.cc/600?u=loc-fremont',
  },
];

export const PROFILE_MOCK = {
  username: '@uiux_demo_creator',
  plan: 'Premium',
  earningsThisWeek: 1240,
  streamHours: 36,
  privateBookings: 18,
};
