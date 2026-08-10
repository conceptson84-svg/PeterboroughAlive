import type { ImageMetadata } from 'astro';

// Photos live in src/assets/photos/<year>/ and are optimised by Astro at build.
// Drop more numbered files (p15.jpg, …) into a year folder and they appear
// automatically, in filename order.
const load = (glob: Record<string, unknown>): ImageMetadata[] =>
  Object.entries(glob)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, v]) => v as ImageMetadata);

const imgs2018 = load(import.meta.glob('../assets/photos/2018/*.jpg', { eager: true, import: 'default' }));
const imgs2022 = load(import.meta.glob('../assets/photos/2022/*.jpg', { eager: true, import: 'default' }));
const imgs2023 = load(import.meta.glob('../assets/photos/2023/*.jpg', { eager: true, import: 'default' }));
const imgs2025 = load(import.meta.glob('../assets/photos/2025/*.jpg', { eager: true, import: 'default' }));

type Cap = { alt: string; caption?: string };

const caps2018: Cap[] = [
  { alt: 'Singer in white worshipping under blue stage light', caption: 'Lost in worship' },
  { alt: 'Woman singing into a microphone under purple light', caption: 'Voices of the city' },
  { alt: 'Male vocal ensemble in white suits on stage', caption: 'The ensemble' },
  { alt: 'Artist performing in a spotlight', caption: 'Centre stage' },
  { alt: 'Performer bent over the mic amid stage haze', caption: 'Giving it everything' },
  { alt: 'A parent holding a baby among the audience', caption: 'All ages, all welcome' },
  { alt: 'Vocalist singing, lit in deep blue', caption: 'A song of praise' },
  { alt: 'Musician leading worship with an acoustic guitar', caption: 'Leading worship' },
  { alt: 'Artist in a cap performing under green and gold light', caption: 'In the spotlight' },
  { alt: 'The crowd at the front with hands raised', caption: 'Hands raised' },
  { alt: 'Wide view of the full stage and audience at the finale', caption: 'The finale' },
  { alt: 'Singer in a teal shirt performing with a guitar', caption: 'Heart and voice' },
  { alt: 'Speaker on stage with an arm raised', caption: 'A word for the city' },
  { alt: 'Singer-guitarist performing against blue bokeh lights', caption: 'Just a voice and a guitar' },
];

const caps2022: Cap[] = [
  { alt: 'Crowds fill Cathedral Square by the Guildhall for the festival', caption: 'The city centre comes alive' },
  { alt: 'Man preaching with a Bible raised, choir behind him', caption: 'The good news, out loud' },
  { alt: 'Two artists performing together on the outdoor stage', caption: 'Live on the main stage' },
  { alt: 'Choir gathered in matching outfits beside the marquee', caption: 'The choir gathers' },
  { alt: 'Hands raised in worship in the open air', caption: 'Praise in the open air' },
  { alt: 'Woman in a bright floral dress with a parasol, smiling', caption: 'Dressed for the sunshine' },
  { alt: 'Young people smiling in the crowd', caption: 'Faces in the crowd' },
  { alt: 'Black-and-white portrait of a man in the square', caption: 'A city of many stories' },
  { alt: 'A volunteer steward in hi-vis with a friend', caption: 'The team behind the day' },
  { alt: 'A group dancing and celebrating together', caption: 'Everybody dance' },
  { alt: 'Young women singing and clapping along', caption: 'Singing along' },
  { alt: 'The crowd gathered among the historic city buildings', caption: 'Right in the heart of town' },
  { alt: 'Vocalist opening the day on the outdoor stage', caption: 'Opening the day' },
  { alt: 'Wide view of the crowd beneath the Guildhall', caption: 'Under the Guildhall' },
];

const caps2023: Cap[] = [
  { alt: 'Spotlight beams sweep across the concert stage', caption: 'Under the lights' },
  { alt: 'Vocalist in magenta singing close to the microphone', caption: 'A voice that carries' },
  { alt: 'Guitarist performing in a spotlight', caption: 'The band' },
  { alt: 'Colourfully dressed ensemble singing together', caption: 'Voices of the city' },
  { alt: 'Wide view of the full stage and a packed audience', caption: 'A full house' },
  { alt: 'Singer with a raised hand, lit in colour', caption: 'Caught up in the moment' },
  { alt: 'Women singing with hands lifted high', caption: 'Hands lifted high' },
  { alt: 'Musician playing the keyboard', caption: 'On the keys' },
  { alt: 'The full band performing beneath the lyric screen', caption: 'I call you Jehovah' },
  { alt: 'Two vocalists singing a duet in blue light', caption: 'In harmony' },
  { alt: 'Singer in sequins performing centre stage', caption: 'Centre stage' },
  { alt: 'Saxophonist leaning back mid-solo', caption: 'The saxophone solo' },
  { alt: 'The choir performing under purple light', caption: 'The choir' },
  { alt: 'Performer leaning out towards the crowd', caption: 'Giving it everything' },
  { alt: 'A packed, seated audience fills the room', caption: 'The room fills up' },
  { alt: 'Vocalist in a suit singing with feeling', caption: 'Heart and soul' },
  { alt: 'Guitarist playing towards the audience amid stage beams', caption: 'Playing to the room' },
  { alt: 'The crowd dancing at the front of the stage', caption: 'On their feet' },
  { alt: 'Performer bringing a spoken word to the crowd', caption: 'Bringing the word' },
  { alt: 'The audience standing together in worship', caption: 'Together as one' },
];

const caps2025: Cap[] = [
  { alt: 'Wide view of the 2025 concert stage and audience beneath the screen', caption: 'The 2025 concert begins' },
  { alt: 'Lead vocalist in a navy suit singing with backing singers', caption: 'Leading the room' },
  { alt: 'Three women singing together under green light', caption: 'In three-part harmony' },
  { alt: 'Singer in a checked waistcoat performing with energy', caption: 'Giving it everything' },
  { alt: 'The stage and a gathered audience ready to worship', caption: 'A room ready to worship' },
  { alt: 'Vocalist in a black jacket leading with the choir behind', caption: 'Take the lead' },
  { alt: 'Keyboard player performing with singers', caption: 'On the keys' },
  { alt: 'Singer and choir in call and response under green light', caption: 'Call and response' },
  { alt: 'Members of the audience clapping along', caption: 'Every generation' },
  { alt: 'A singer leads as the choir joins in', caption: 'A song rises' },
  { alt: 'Vocalist leaning into a passionate moment with the band', caption: 'Poured out in praise' },
  { alt: 'Three vocalists singing, eyes closed', caption: 'Voices lifted' },
  { alt: 'Two vocalists sharing a duet in blue light', caption: 'A duet' },
  { alt: 'Singer performing alongside the bass player', caption: 'With the band' },
  { alt: 'Performer caught up in the music under green light', caption: 'Caught up in it' },
  { alt: 'Vocalist and keyboardist mid-song', caption: 'Between the notes' },
  { alt: 'The full choir and stage with the audience watching', caption: 'The whole stage sings' },
  { alt: 'Group photo of the organising team', caption: 'The team behind the night' },
  { alt: 'A guest being welcomed with a gift in the foyer', caption: 'Everyone’s welcome' },
  { alt: 'A young child among the crowd', caption: 'The next generation' },
];

const zip = (imgs: ImageMetadata[], caps: Cap[]) =>
  imgs.map((src, i) => ({ src, alt: caps[i]?.alt ?? '', caption: caps[i]?.caption }));

export type Photo = { src: ImageMetadata; alt: string; caption?: string };

export type PastEvent = {
  year: number;
  title: string;
  blurb: string;
  cover: ImageMetadata | null;
  gallery: Photo[];
};

// Newest first. Peterborough Alive ran 2018, 2019, 2021, 2022, 2023
// (no event in 2020, and none in 2024–2026 — next is 2027).
export const pastEvents: PastEvent[] = [
  {
    year: 2025,
    title: 'Peterborough Alive 2025 — Halleluyah',
    blurb:
      'Our most recent night: an indoor music concert with a live band, a full choir and a city lifting its voice in praise.',
    cover: imgs2025[0] ?? null,
    gallery: zip(imgs2025, caps2025),
  },
  {
    year: 2023,
    title: 'Peterborough Alive 2023 — Kavod',
    blurb:
      'Themed “Kavod” — glory. Back indoors for our biggest concert yet: a packed room, a live band and choir, and a whole city lifting its voice late into the night.',
    cover: imgs2023[4] ?? imgs2023[0] ?? null,
    gallery: zip(imgs2023, caps2023),
  },
  {
    year: 2022,
    title: 'Peterborough Alive 2022 — out in the city',
    blurb:
      'We took the celebration outdoors into Cathedral Square: a free, open-air day of gospel music, worship and community right in the heart of Peterborough.',
    cover: imgs2022[0] ?? null,
    gallery: zip(imgs2022, caps2022),
  },
  {
    year: 2021,
    title: 'Peterborough Alive 2021 — Spirit Break Out',
    blurb:
      'Themed “Spirit Break Out.” After the pandemic paused 2020, Peterborough Alive returned with faith and hope renewed — a night of unity, togetherness and the love of God. Video highlights available.',
    cover: null,
    gallery: [],
  },
  {
    year: 2019,
    title: 'Peterborough Alive 2019',
    blurb:
      'Our second edition, at The Cresset — a wonderful night in God’s presence with Faith Child, Philippa Hanna, Pastor Nathaniel Bassey from Nigeria and the Peterborough Alive Mass Choir. Video highlights available.',
    cover: null,
    gallery: [],
  },
  {
    year: 2018,
    title: 'Peterborough Alive 2018 — the first night',
    blurb:
      'Our very first edition, at the Broadway Theatre — one stage shared by Noel Robinson, Philippa Hanna, Poland’s Sienna Gospel Choir, David Brackenridge from Scotland, Stephanie Staples from the US and the Peterborough Alive Mass Choir. Staged with local charities SHINE, TimeStop and Smiles International, and even featured by the BBC.',
    cover: imgs2018[10] ?? imgs2018[0] ?? null,
    gallery: zip(imgs2018, caps2018),
  },
];
