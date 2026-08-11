// ---------------------------------------------------------------------------
// Global site content. Non-technical editors can safely change the text below.
// ---------------------------------------------------------------------------

export const org = {
  name: 'Peterborough Alive',
  established: 2018,
  tagline: 'Uniting Communities, Transforming Lives',
  organiser: 'RCCG City of Grace Church, Peterborough',
  // Registered charity number — fill in for the footer / trust.
  charityNumber: '',
};

export const contact = {
  email: 'info@peterboroughaliveconcert.org',
  addressLines: ['Wellington Street, Peterborough', 'Cambridgeshire, PE1 5DU'],
  // Map link for the address (footer). Update if the pin is off.
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Wellington+Street+Peterborough+PE1+5DU',
  // Paste a Formspree endpoint (https://formspree.io/f/XXXX) to receive form
  // submissions in your inbox. Left empty, the form opens the visitor's email
  // app pre-filled instead — so it still works today.
  formEndpoint: '',
  social: {
    instagram: 'https://www.instagram.com/peterboroughaliveconcert',
    facebook: 'https://www.facebook.com/peterborough.alive.3',
    youtube: 'https://www.youtube.com/@peterboroughalive8603',
  },
};

// The "Next Event" the whole homepage points at.
// After the 2025 and 2026 pause, the next gathering is Peterborough Alive 2027.
export const nextEvent = {
  year: 2027,
  title: 'Peterborough Alive 2027',
  // Set once confirmed; leave empty to show the "to be announced" state.
  date: '', // e.g. 'Saturday 9 October 2027'
  isoDate: '', // e.g. '2027-10-09T18:00' (used for the Google Event listing)
  venue: '', // e.g. 'The Cresset, Peterborough'
  city: 'Peterborough, Cambridgeshire',
  free: true,
  // Shown under the hero headline. 2025 was the most recent night; no 2026; next is 2027.
  note: 'Our most recent celebration was in 2025. There’s no event in 2026 — but we’ll be back. Save the date for Peterborough Alive 2027, our biggest night of gospel music yet.',
};

// Concert videos for the "Watch" section. `id` is the YouTube video id
// (the part after watch?v= , youtu.be/ or /live/ ). Add more any time.
export const watchVideos: { id: string; title: string; year: number }[] = [
  { id: 'baiFaPApU_s', title: 'Peterborough Alive 2025 — Halleluyah', year: 2025 },
  { id: 'Ez2gnk6LkAE', title: 'Peterborough Alive 2023 — Kavod', year: 2023 },
  { id: '8yXZArTQGxk', title: 'Peterborough Alive 2022', year: 2022 },
  { id: 'A1CugwMvOdg', title: 'Peterborough Alive 2021 — Spirit Break Out (virtual)', year: 2021 },
];

// Links used in navigation and the footer.
export const nav = [
  { label: 'About', href: '/#about' },
  { label: 'Artists', href: '/#lineup' },
  { label: 'Past Events', href: '/past-events' },
  { label: 'Watch', href: '/#watch' },
  { label: 'Sponsors', href: '/#sponsors' },
  { label: 'Contact', href: '/#contact' },
];
