import { style, createVar, globalStyle } from '@vanilla-extract/css';

// Create scoped CSS variables
const backgroundVar = createVar();
const foregroundVar = createVar();
const textPrimaryVar = createVar();
const textSecondaryVar = createVar();
const buttonPrimaryHoverVar = createVar();
const buttonSecondaryHoverVar = createVar();
const buttonSecondaryBorderVar = createVar();

// Page container
export const page = style({
  vars: {
    [backgroundVar]: '#fafafa',
    [foregroundVar]: '#fff',
    [textPrimaryVar]: '#000',
    [textSecondaryVar]: '#666',
    [buttonPrimaryHoverVar]: '#383838',
    [buttonSecondaryHoverVar]: '#f2f2f2',
    [buttonSecondaryBorderVar]: '#ebebeb',
  },
  display: 'flex',
  minHeight: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'var(--font-geist-sans)',
  backgroundColor: backgroundVar,
  '@media': {
    '(prefers-color-scheme: dark)': {
      vars: {
        [backgroundVar]: '#000',
        [foregroundVar]: '#000',
        [textPrimaryVar]: '#ededed',
        [textSecondaryVar]: '#999',
        [buttonPrimaryHoverVar]: '#ccc',
        [buttonSecondaryHoverVar]: '#1a1a1a',
        [buttonSecondaryBorderVar]: '#1a1a1a',
      },
    },
  },
});

// Main content
export const main = style({
  display: 'flex',
  minHeight: '100vh',
  width: '100%',
  maxWidth: '800px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  backgroundColor: foregroundVar,
  padding: '120px 60px',
  '@media': {
    '(max-width: 600px)': {
      padding: '48px 24px',
    },
  },
});

// Intro section
export const intro = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  textAlign: 'left',
  gap: '24px',
  '@media': {
    '(max-width: 600px)': {
      gap: '16px',
    },
  },
});

// Intro heading styles
globalStyle(`${intro} h1`, {
  maxWidth: '320px',
  fontSize: '40px',
  fontWeight: 600,
  lineHeight: '48px',
  letterSpacing: '-2.4px',
  textWrap: 'balance',
  color: textPrimaryVar,
  '@media': {
    '(max-width: 600px)': {
      fontSize: '32px',
      lineHeight: '40px',
      letterSpacing: '-1.92px',
    },
  },
});

// Intro paragraph styles
globalStyle(`${intro} p`, {
  maxWidth: '440px',
  fontSize: '18px',
  lineHeight: '32px',
  textWrap: 'balance',
  color: textSecondaryVar,
});

// Intro link styles
globalStyle(`${intro} a`, {
  fontWeight: 500,
  color: textPrimaryVar,
});

// CTAs container
export const ctas = style({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  maxWidth: '440px',
  gap: '16px',
  fontSize: '14px',
});

// CTA link base styles
globalStyle(`${ctas} a`, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '40px',
  padding: '0 16px',
  borderRadius: '128px',
  border: '1px solid transparent',
  transition: '0.2s',
  cursor: 'pointer',
  width: 'fit-content',
  fontWeight: 500,
});

// Primary button
export const primary = style({
  background: textPrimaryVar,
  color: backgroundVar,
  gap: '8px',
});

// Primary button hover (only on non-touch devices)
globalStyle(`a${primary}:hover`, {
  '@media': {
    '(hover: hover) and (pointer: fine)': {
      background: buttonPrimaryHoverVar,
      borderColor: 'transparent',
    },
  },
});

// Secondary button
export const secondary = style({
  borderColor: buttonSecondaryBorderVar,
});

// Secondary button hover (only on non-touch devices)
globalStyle(`a${secondary}:hover`, {
  '@media': {
    '(hover: hover) and (pointer: fine)': {
      background: buttonSecondaryHoverVar,
      borderColor: 'transparent',
    },
  },
});

// Logo
export const logo = style({
  '@media': {
    '(prefers-color-scheme: dark)': {
      filter: 'invert()',
    },
  },
});

