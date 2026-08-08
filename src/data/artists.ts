// Artists shown on the homepage lineup. The 2027 bill is not yet confirmed,
// so these show the calibre of past performers. Replace when 2027 is booked.

export type Artist = {
  name: string;
  role: string;
  initial: string;
  bio: string;
};

export const lineupConfirmed = false; // flip to true once the 2027 bill is set

export const artists: Artist[] = [
  {
    name: 'Nathaniel Bassey',
    role: 'Gospel · Worship',
    initial: 'N',
    bio: 'Nigerian gospel artist behind “Onise Iyanu” and the global #HallelujahChallenge.',
  },
  {
    name: 'Philippa Hanna',
    role: 'Singer-songwriter',
    initial: 'P',
    bio: 'Acclaimed British artist splitting her time between Sheffield, Nashville and the road.',
  },
  {
    name: 'Faith Child',
    role: 'Rap · Spoken word',
    initial: 'F',
    bio: 'MOBO-nominated, multi-award-winning contemporary Christian artist from South London.',
  },
  {
    name: 'PA Mass Choir',
    role: 'Community choir',
    initial: 'M',
    bio: 'Voices from across the city’s churches, raised together for one unforgettable night.',
  },
];
