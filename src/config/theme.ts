// theme.ts — the only file that changes when you clone this for a new client.
// Every color/font in the site pulls from here via CSS variables (see Layout.astro).

export const theme = {
  colors: {
    ink: '#0b2545',       // deep navy — header, footer, banded sections (matches original brand)
    primary: '#123a6b',   // buttons, nav active states
    secondary: '#e8a23d', // warm accent, used sparingly (financing badge, etc.)
    accent: '#2dd4e0',    // teal — the site's signature color: links, icons, highlighted words, CTAs
    cream: '#ffffff',     // page background — clean white like the original, not off-white
  },
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Inter', sans-serif",
  },
  fontImportUrl:
    'https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap',
};
