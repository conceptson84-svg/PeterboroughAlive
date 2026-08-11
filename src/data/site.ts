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

// Links used in navigation and the footer.
export const nav = [
  { label: 'About', href: '/#about' },
  { label: 'Lineup', href: '/#lineup' },
  { label: 'Past Events', href: '/past-events' },
  { label: 'Sponsors', href: '/#sponsors' },
  { label: 'Watch', href: '/#watch' },
  { label: 'Contact', href: '/#contact' },
];
