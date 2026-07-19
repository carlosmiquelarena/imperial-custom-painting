// theme.ts — the only file that changes when you clone this for a new client.
// Every color/font in the site pulls from here via CSS variables (see Layout.astro).
//
// Values below pulled directly from the original site's Elementor Global Kit CSS
// (elementor-kit-6 variables), not eyeballed — see pixel-fidelity-sop.md.

export const theme = {
  colors: {
    ink: '#021125',       // Elementor --e-global-color-secondary — header/footer/banded sections
    primary: '#223471',   // Elementor --e-global-color-primary — buttons, nav active states
    secondary: '#61CE70', // Elementor --e-global-color-accent — used for checkmarks/success accents
    accent: '#28a0b1',    // Elementor --e-global-color-6664345 — CTA buttons, highlighted words, links
    cream: '#ffffff',
  },
  fonts: {
    heading: "'Francois One', sans-serif",
    body: "'Poppins', sans-serif",
  }

}