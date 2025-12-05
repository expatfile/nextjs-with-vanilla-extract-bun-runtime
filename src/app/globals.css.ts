import { createGlobalTheme, globalStyle } from '@vanilla-extract/css';

// Create global theme contract for light/dark mode
export const vars = createGlobalTheme(':root', {
  background: '#ffffff',
  foreground: '#171717',
});

// Dark mode variables
globalStyle(':root', {
  '@media': {
    '(prefers-color-scheme: dark)': {
      vars: {
        [vars.background]: '#0a0a0a',
        [vars.foreground]: '#ededed',
      },
    },
  },
});

// Reset styles
globalStyle('html, body', {
  maxWidth: '100vw',
  overflowX: 'hidden',
});

globalStyle('body', {
  color: vars.foreground,
  background: vars.background,
  fontFamily: 'Arial, Helvetica, sans-serif',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
});

globalStyle('*', {
  boxSizing: 'border-box',
  padding: 0,
  margin: 0,
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});

// Dark mode color scheme
globalStyle('html', {
  '@media': {
    '(prefers-color-scheme: dark)': {
      colorScheme: 'dark',
    },
  },
});

