export type UserCategory = 'POPULAR' | 'LIVE' | 'MILFS' | 'FETISHISTS';

export type UserProfile = {
  id: string;
  name: string;
  image: string;
  online: boolean;
  followers: number;
  privateVideos: number;
  rating: number;
  height: number;
  age: number;
  gender: 'FEMALE' | 'MALE' | 'NON-BINARY';
  category: UserCategory;
  images: string[];
};

export const USERS: UserProfile[] = [
  {
    id: 'sophia-pozz',
    name: 'SOPHIA POZZ',
    image: 'https://i.pravatar.cc/300?u=a042581f4e29026704d',
    online: true,
    followers: 12410,
    privateVideos: 82,
    rating: 4.9,
    height: 170,
    age: 27,
    gender: 'FEMALE',
    category: 'POPULAR',
    images: [
      'https://i.pravatar.cc/400?u=a042581f4e29026704d-1',
      'https://i.pravatar.cc/400?u=a042581f4e29026704d-2',
      'https://i.pravatar.cc/400?u=a042581f4e29026704d-3',
      'https://i.pravatar.cc/400?u=a042581f4e29026704d-4',
    ],
  },
  {
    id: 'olifinia',
    name: 'OLIFINIA',
    image: 'https://i.pravatar.cc/300?u=a042581f4e29026705d',
    online: false,
    followers: 8312,
    privateVideos: 54,
    rating: 4.7,
    height: 166,
    age: 30,
    gender: 'FEMALE',
    category: 'MILFS',
    images: [
      'https://i.pravatar.cc/400?u=a042581f4e29026705d-1',
      'https://i.pravatar.cc/400?u=a042581f4e29026705d-2',
      'https://i.pravatar.cc/400?u=a042581f4e29026705d-3',
      'https://i.pravatar.cc/400?u=a042581f4e29026705d-4',
    ],
  },
  {
    id: 'sandra-kiss',
    name: 'SANDRA KISS',
    image: 'https://i.pravatar.cc/300?u=a042581f4e29026706d',
    online: true,
    followers: 15245,
    privateVideos: 93,
    rating: 5,
    height: 172,
    age: 29,
    gender: 'FEMALE',
    category: 'LIVE',
    images: [
      'https://i.pravatar.cc/400?u=a042581f4e29026706d-1',
      'https://i.pravatar.cc/400?u=a042581f4e29026706d-2',
      'https://i.pravatar.cc/400?u=a042581f4e29026706d-3',
      'https://i.pravatar.cc/400?u=a042581f4e29026706d-4',
    ],
  },
  {
    id: 'oprah-mogs',
    name: 'OPRAH MOGS',
    image: 'https://i.pravatar.cc/300?u=a042581f4e29026707d',
    online: true,
    followers: 8067,
    privateVideos: 69,
    rating: 5,
    height: 168,
    age: 28,
    gender: 'FEMALE',
    category: 'POPULAR',
    images: [
      'https://i.pravatar.cc/400?u=a042581f4e29026707d-1',
      'https://i.pravatar.cc/400?u=a042581f4e29026707d-2',
      'https://i.pravatar.cc/400?u=a042581f4e29026707d-3',
      'https://i.pravatar.cc/400?u=a042581f4e29026707d-4',
    ],
  },
  {
    id: 'oliva',
    name: 'OLIVA',
    image: 'https://i.pravatar.cc/300?u=a042581f4e29026708d',
    online: false,
    followers: 6201,
    privateVideos: 41,
    rating: 4.6,
    height: 165,
    age: 26,
    gender: 'FEMALE',
    category: 'FETISHISTS',
    images: [
      'https://i.pravatar.cc/400?u=a042581f4e29026708d-1',
      'https://i.pravatar.cc/400?u=a042581f4e29026708d-2',
      'https://i.pravatar.cc/400?u=a042581f4e29026708d-3',
      'https://i.pravatar.cc/400?u=a042581f4e29026708d-4',
    ],
  },
  {
    id: 'margo',
    name: 'MARGO',
    image: 'https://i.pravatar.cc/300?u=a042581f4e29026709d',
    online: true,
    followers: 7340,
    privateVideos: 59,
    rating: 4.8,
    height: 169,
    age: 31,
    gender: 'FEMALE',
    category: 'LIVE',
    images: [
      'https://i.pravatar.cc/400?u=a042581f4e29026709d-1',
      'https://i.pravatar.cc/400?u=a042581f4e29026709d-2',
      'https://i.pravatar.cc/400?u=a042581f4e29026709d-3',
      'https://i.pravatar.cc/400?u=a042581f4e29026709d-4',
    ],
  },
  {
    id: 'lana-velle',
    name: 'LANA VELLE',
    image: 'https://i.pravatar.cc/300?u=a042581f4e29026711d',
    online: true,
    followers: 9184,
    privateVideos: 48,
    rating: 4.7,
    height: 171,
    age: 25,
    gender: 'FEMALE',
    category: 'POPULAR',
    images: [
      'https://i.pravatar.cc/400?u=a042581f4e29026711d-1',
      'https://i.pravatar.cc/400?u=a042581f4e29026711d-2',
      'https://i.pravatar.cc/400?u=a042581f4e29026711d-3',
      'https://i.pravatar.cc/400?u=a042581f4e29026711d-4',
    ],
  },
  {
    id: 'nina-flame',
    name: 'NINA FLAME',
    image: 'https://i.pravatar.cc/300?u=a042581f4e29026712d',
    online: false,
    followers: 5145,
    privateVideos: 26,
    rating: 4.5,
    height: 164,
    age: 34,
    gender: 'FEMALE',
    category: 'MILFS',
    images: [
      'https://i.pravatar.cc/400?u=a042581f4e29026712d-1',
      'https://i.pravatar.cc/400?u=a042581f4e29026712d-2',
      'https://i.pravatar.cc/400?u=a042581f4e29026712d-3',
      'https://i.pravatar.cc/400?u=a042581f4e29026712d-4',
    ],
  },
  {
    id: 'rhea-noir',
    name: 'RHEA NOIR',
    image: 'https://i.pravatar.cc/300?u=a042581f4e29026713d',
    online: true,
    followers: 11022,
    privateVideos: 76,
    rating: 4.9,
    height: 173,
    age: 29,
    gender: 'FEMALE',
    category: 'FETISHISTS',
    images: [
      'https://i.pravatar.cc/400?u=a042581f4e29026713d-1',
      'https://i.pravatar.cc/400?u=a042581f4e29026713d-2',
      'https://i.pravatar.cc/400?u=a042581f4e29026713d-3',
      'https://i.pravatar.cc/400?u=a042581f4e29026713d-4',
    ],
  },
  {
    id: 'ivy-james',
    name: 'IVY JAMES',
    image: 'https://i.pravatar.cc/300?u=a042581f4e29026714d',
    online: true,
    followers: 6981,
    privateVideos: 37,
    rating: 4.6,
    height: 167,
    age: 24,
    gender: 'FEMALE',
    category: 'LIVE',
    images: [
      'https://i.pravatar.cc/400?u=a042581f4e29026714d-1',
      'https://i.pravatar.cc/400?u=a042581f4e29026714d-2',
      'https://i.pravatar.cc/400?u=a042581f4e29026714d-3',
      'https://i.pravatar.cc/400?u=a042581f4e29026714d-4',
    ],
  },
  {
    id: 'mila-rivers',
    name: 'MILA RIVERS',
    image: 'https://i.pravatar.cc/300?u=a042581f4e29026715d',
    online: false,
    followers: 4303,
    privateVideos: 21,
    rating: 4.4,
    height: 162,
    age: 22,
    gender: 'FEMALE',
    category: 'POPULAR',
    images: [
      'https://i.pravatar.cc/400?u=a042581f4e29026715d-1',
      'https://i.pravatar.cc/400?u=a042581f4e29026715d-2',
      'https://i.pravatar.cc/400?u=a042581f4e29026715d-3',
      'https://i.pravatar.cc/400?u=a042581f4e29026715d-4',
    ],
  },
  {
    id: 'zara-lane',
    name: 'ZARA LANE',
    image: 'https://i.pravatar.cc/300?u=a042581f4e29026716d',
    online: true,
    followers: 9892,
    privateVideos: 64,
    rating: 4.8,
    height: 170,
    age: 33,
    gender: 'FEMALE',
    category: 'MILFS',
    images: [
      'https://i.pravatar.cc/400?u=a042581f4e29026716d-1',
      'https://i.pravatar.cc/400?u=a042581f4e29026716d-2',
      'https://i.pravatar.cc/400?u=a042581f4e29026716d-3',
      'https://i.pravatar.cc/400?u=a042581f4e29026716d-4',
    ],
  },
];

export const DEFAULT_USER = USERS[0];

export function getUserById(id: string | undefined): UserProfile | undefined {
  if (!id) {
    return undefined;
  }

  return USERS.find((user) => user.id === id);
}
