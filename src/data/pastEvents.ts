import type { ImageMetadata } from 'astro';

// Photo imports — Astro optimises these (resize, WebP/AVIF, srcset) at build.
import ensembleFinale from '../assets/photos/ensemble-finale.jpg';
import massChoir from '../assets/photos/mass-choir.jpg';
import voices from '../assets/photos/voices.jpg';
import openingSet from '../assets/photos/opening-set.jpg';
import worship from '../assets/photos/worship.jpg';
import liveBand from '../assets/photos/live-band.jpg';
import soloists from '../assets/photos/soloists.jpg';
import congregation from '../assets/photos/congregation.jpg';
import onStage from '../assets/photos/on-stage.jpg';
import praise from '../assets/photos/praise.jpg';
import crowd from '../assets/photos/crowd.jpg';

export type Photo = { src: ImageMetadata; alt: string; caption?: string };

export type PastEvent = {
  year: number;
  title: string;
  blurb: string;
  cover: ImageMetadata | null;
  gallery: Photo[];
};

// Newest first. Add a new object each year; drop in photos and they appear.
// Only years with real photos are shown as galleries; the rest read "photos coming soon".
export const pastEvents: PastEvent[] = [
  {
    year: 2023,
    title: 'Peterborough Alive 2023',
    blurb:
      'A full room, a live band and voices from across the city — a night of gospel, praise and prayer that brought Peterborough together.',
    cover: ensembleFinale,
    gallery: [
      { src: ensembleFinale, alt: 'Full ensemble on stage under gold light', caption: 'The finale' },
      { src: massChoir, alt: 'The Mass Choir performing under purple stage light', caption: 'The Mass Choir' },
      { src: voices, alt: 'Singers in colourful outfits mid-worship', caption: 'Voices of the city' },
      { src: openingSet, alt: 'Ensemble in white on a blue-lit stage', caption: 'Opening set' },
      { src: worship, alt: 'Performer leading the congregation in worship', caption: 'Leading worship' },
      { src: liveBand, alt: 'Band and singers performing together', caption: 'Live band' },
      { src: soloists, alt: 'Soloists sharing the stage', caption: 'Soloists' },
      { src: onStage, alt: 'Artist on stage in front of a large screen', caption: 'On stage' },
      { src: praise, alt: 'Singers raised in praise', caption: 'In full praise' },
      { src: congregation, alt: 'The congregation gathered for the night', caption: 'Together' },
      { src: crowd, alt: 'The audience seated for the concert', caption: 'A full house' },
    ],
  },
  {
    year: 2019,
    title: 'Peterborough Alive 2019',
    blurb: 'Our second year, welcoming more artists and more of the city than ever.',
    cover: null,
    gallery: [],
  },
  {
    year: 2018,
    title: 'Peterborough Alive 2018 — the first night',
    blurb: 'Where it began: a free gift of gospel music to the city of Peterborough.',
    cover: null,
    gallery: [],
  },
];
