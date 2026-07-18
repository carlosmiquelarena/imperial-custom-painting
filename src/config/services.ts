export type Service = {
  name: string;
  slug: string;
  blurb: string;
  icon: 'exterior' | 'interior' | 'cabinet' | 'faux' | 'commercial' | 'pressure';
};

export const services: Service[] = [
  {
    name: 'Exterior Painting',
    slug: 'exterior-painting',
    blurb: 'Weather-resistant finishes that protect your home and hold color for years, not seasons.',
    icon: 'exterior',
  },
  {
    name: 'Interior Painting',
    slug: 'interior-painting',
    blurb: 'Clean lines, zero-mess prep, and color consultation so the room looks right the first time.',
    icon: 'interior',
  },
  {
    name: 'Cabinet Refinishing',
    slug: 'cabinet-refinishing',
    blurb: 'Factory-smooth cabinet finishes at a fraction of the cost of full replacement.',
    icon: 'cabinet',
  },
  {
    name: 'Faux Finishes',
    slug: 'faux-finishes',
    blurb: 'Custom textures and decorative finishes for accent walls and statement rooms.',
    icon: 'faux',
  },
  {
    name: 'Commercial Painting',
    slug: 'commercial-painting',
    blurb: 'Scheduled around your business hours, so your doors never have to close.',
    icon: 'commercial',
  },
  {
    name: 'Pressure Washing',
    slug: 'pressure-washing',
    blurb: 'Surface prep and standalone exterior cleaning that gets the grime off before the primer goes on.',
    icon: 'pressure',
  },
];
