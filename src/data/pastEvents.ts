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
  { alt: 'The Sienna Gospel Choir on stage dressed in white', caption: 'The Sienna Gospel Choir' },
  { alt: 'The ensemble singing with hands raised', caption: 'Lifted together' },
  { alt: 'The full band performing on stage', caption: 'The band in full swing' },
  { alt: 'Vocal ensemble in white singing with hands raised', caption: 'Voices raised' },
  { alt: 'A man and woman hosting from the stage', caption: 'Hosting the night' },
  { alt: 'A parent holding a baby among the audience', caption: 'All ages, all welcome' },
  { alt: 'A singer leading with the choir behind', caption: 'Leading with the choir' },
  { alt: 'A guitarist performing with backing singers', caption: 'Guitar and voices' },
  { alt: 'Wide view of the whole group on stage', caption: 'The whole stage' },
  { alt: 'A singer-guitarist performing solo', caption: 'Just a voice and a guitar' },
  { alt: 'The choir singing together in white', caption: 'In full voice' },
  { alt: 'A man and woman singing a duet', caption: 'A duet' },
  { alt: 'A vocalist performing with the band', caption: 'With the band' },
  { alt: 'The ensemble on stage together', caption: 'The ensemble' },
  { alt: 'A woman singing with the choir behind', caption: 'A song with the choir' },
  { alt: 'A rapper performing centre stage', caption: 'Centre stage' },
  { alt: 'A male vocal ensemble in white', caption: 'The men’s ensemble' },
  { alt: 'Two vocalists singing together', caption: 'Two voices' },
  { alt: 'Young musicians performing on stage', caption: 'The next generation on stage' },
  { alt: 'The choir gathering on stage', caption: 'The choir gathers' },
  { alt: 'A singer performing with the band', caption: 'Singer and band' },
  { alt: 'Two performers side by side on stage', caption: 'Side by side' },
  { alt: 'A guitarist playing with the group', caption: 'Playing together' },
  { alt: 'A vocalist singing in floral dress', caption: 'A voice that carries' },
  { alt: 'The full choir on stage', caption: 'The full choir' },
  { alt: 'A guitarist performing under green light', caption: 'Under the lights' },
];

const caps2022: Cap[] = [
  { alt: 'The Guildhall, stage and crowd in Cathedral Square', caption: 'Cathedral Square comes alive' },
  { alt: 'The full choir performing on the open-air stage', caption: 'The choir in the open air' },
  { alt: 'Singers in red and white on the main stage', caption: 'Voices on the main stage' },
  { alt: 'Families filling the city square', caption: 'Families fill the square' },
  { alt: 'A family together in Peterborough Alive t-shirts', caption: 'A family day out' },
  { alt: 'Women leading the singing on stage', caption: 'Leading the singing' },
  { alt: 'The ensemble singing together', caption: 'The ensemble sings' },
  { alt: 'The crowd out in the city centre', caption: 'Out in the city' },
  { alt: 'Wide view of the whole choir on stage', caption: 'The whole choir' },
  { alt: 'People dancing in the square', caption: 'Dancing in the square' },
  { alt: 'Singers with hands raised in the open air', caption: 'Hands raised outdoors' },
  { alt: 'A group performing under the marquee', caption: 'Under the marquee' },
  { alt: 'People dancing together at the festival', caption: 'Everybody moves' },
  { alt: 'The crowd gathered in the heart of town', caption: 'Right in the heart of town' },
  { alt: 'A song rising from the outdoor stage', caption: 'A song rises' },
  { alt: 'Singers performing to the gathered crowd', caption: 'Singing to the city' },
  { alt: 'People sheltering under umbrellas in the sun', caption: 'Shade in the sunshine' },
  { alt: 'A vocalist opening the day on stage', caption: 'Opening the day' },
  { alt: 'People filming at the front of the crowd', caption: 'Front of the crowd' },
  { alt: 'Faces watching from the crowd', caption: 'Faces in the crowd' },
  { alt: 'A host engaging the crowd with a microphone', caption: 'Bringing everyone in' },
  { alt: 'Two of the team, one in a hi-vis vest', caption: 'The team behind the day' },
  { alt: 'A steward helping among the crowd', caption: 'Keeping everyone safe' },
  { alt: 'A gathered crowd watching the stage', caption: 'A gathered crowd' },
  { alt: 'Stewards and children at a family activity', caption: 'Fun for the families' },
  { alt: 'The crowd with hands in the air', caption: 'Caught up in it' },
  { alt: 'Two men sharing a moment of prayer', caption: 'A moment of prayer' },
  { alt: 'Neighbours together among the stewards', caption: 'Neighbours together' },
  { alt: 'A man and woman greeting each other warmly', caption: 'Old friends, new friends' },
  { alt: 'Wide view of the crowd beneath the Guildhall', caption: 'Under the Guildhall' },
  { alt: 'A man cheering with the crowd', caption: 'On their feet' },
  { alt: 'A woman in a bright floral dress in the sun', caption: 'Dressed for the sunshine' },
];

const caps2023: Cap[] = [
  { alt: 'The room standing, caught up in worship', caption: 'A room caught up in worship' },
  { alt: 'The crowd with every hand raised', caption: 'Every hand raised' },
  { alt: 'Wide view of the full choir and stage', caption: 'The whole stage sings' },
  { alt: 'A packed, seated audience fills the room', caption: 'A full house' },
  { alt: 'The choir performing on stage', caption: 'The choir' },
  { alt: 'The crowd gathered at the front of the stage', caption: 'At the front' },
  { alt: 'Singers performing together on stage', caption: 'On stage together' },
  { alt: 'Two women singing in harmony', caption: 'In harmony' },
  { alt: 'People gathered in the crowd', caption: 'In the crowd' },
  { alt: 'Singers performing under coloured light', caption: 'Voices in the light' },
  { alt: 'Two women singing joyfully together', caption: 'Joy on stage' },
  { alt: 'The crowd together in praise', caption: 'Together in praise' },
  { alt: 'The stage and crowd as one', caption: 'Stage and crowd as one' },
  { alt: 'Two women singing together', caption: 'Two voices' },
  { alt: 'A singer leading with the choir', caption: 'Leading with the choir' },
  { alt: 'Two men singing a duet', caption: 'A duet' },
  { alt: 'A performer with the crowd on their feet', caption: 'On their feet' },
  { alt: 'The saxophonist performing with the band', caption: 'The horn section' },
  { alt: 'The crowd standing as the band plays', caption: 'Playing to the room' },
  { alt: 'Members of the audience singing along', caption: 'Singing along' },
  { alt: 'A guitarist performing with the band', caption: 'With the band' },
  { alt: 'The keyboardist performing', caption: 'On the keys' },
  { alt: 'A vocalist performing centre stage', caption: 'Centre stage' },
  { alt: 'A packed room during the concert', caption: 'A packed room' },
  { alt: 'A performer giving it everything with the audience behind', caption: 'Giving it everything' },
  { alt: 'A saxophonist mid-solo under green light', caption: 'The saxophone solo' },
  { alt: 'Among the crowd during the show', caption: 'Among the crowd' },
  { alt: 'A dancer mid-movement on stage', caption: 'A moment of movement' },
  { alt: 'A vocalist singing with the backing singers', caption: 'Heart and soul' },
  { alt: 'A performer reaching upward on stage', caption: 'Reaching higher' },
];

const caps2025: Cap[] = [
  { alt: 'The full choir on stage with hands raised', caption: 'The whole choir, hands raised' },
  { alt: 'A performer reaching out to the front row of the crowd', caption: 'Reaching the front row' },
  { alt: 'A singer-guitarist performing with the band', caption: 'Guitar and voice' },
  { alt: 'Three women singing together', caption: 'In three-part harmony' },
  { alt: 'A packed, seated audience fills the room', caption: 'A full house' },
  { alt: 'Lead vocalist singing with the backing singers', caption: 'Leading the room' },
  { alt: 'The choir singing beneath the Halleluyah screen', caption: 'Voices of the choir' },
  { alt: 'Two vocalists singing a duet', caption: 'A duet' },
  { alt: 'Singers taking the stage together', caption: 'Take the stage' },
  { alt: 'Members of the audience clapping along', caption: 'Every hand clapping' },
  { alt: 'Rapper performing with the live band', caption: 'Word and rhythm' },
  { alt: 'Wide view of the choir and stage with the audience watching', caption: 'The whole stage sings' },
  { alt: 'Two women singing together', caption: 'Two voices as one' },
  { alt: 'A singer leads as the choir joins in', caption: 'Singer and choir' },
  { alt: 'The crowd on their feet at the front of the stage', caption: 'On their feet' },
  { alt: 'Vocalist singing with the choir behind', caption: 'Heart and soul' },
  { alt: 'Two singer-guitarists performing side by side', caption: 'Side by side' },
  { alt: 'A singer performing with the backing singers', caption: 'With the backing singers' },
  { alt: 'The hosts welcoming the room from the stage', caption: 'Welcoming the room' },
  { alt: 'A vocalist performing with the keyboardist', caption: 'On the keys' },
  { alt: 'A singer leads as the audience looks on', caption: 'A song rises' },
  { alt: 'Vocalist giving it everything with the band', caption: 'Giving it everything' },
  { alt: 'Wide view of the stage and a room ready to worship', caption: 'A room ready to worship' },
  { alt: 'Group photo of the organising team', caption: 'The team behind the night' },
  { alt: 'Guests being welcomed in the foyer', caption: 'Everyone’s welcome' },
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
