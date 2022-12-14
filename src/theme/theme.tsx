//theme.ts
import { DefaultTheme } from 'styled-components';
import { colorsV3, fonts } from '@hedviginsurance/brand';

export const defaultTheme: DefaultTheme = {
  palette: {
    common: {
      black: '#222831',
      white: '#ffffff',
      transparent: '#ffffff00',
    },
    primary: {
      main: '#726a95',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#709fb0',
      contrastText: '#ffffff',
    },
  },
  size: {
    margin: {
      m1: '1px',
      m2: '2px',
      m3: '3px',
      m4: '4px',
      m5: '5px',
      m6: '6px',
      m7: '7px',
      m8: '8px',
      m9: '9px',
      m10: '10px',
      m11: '11px',
      m12: '12px',
      m16: '16px',
      m20: '20px',
      m40: '40px',
    },
    padding: {
      p1: '1px',
      p2: '2px',
      p3: '3px',
      p4: '4px',
      p5: '5px',
      p6: '6px',
      p7: '7px',
      p8: '8px',
      p9: '9px',
      p10: '10px',
      p11: '11px',
      p12: '12px',
      p16: '16px',
      p20: '20px',
      p24: '24px',
      p32: '32px',
      p56: '56px',
    },
    borderRadius: {
      br1: '2px',
      br2: '4px',
      br3: '6px',
      br4: '8px',
      br5: '10px',
      br6: '12px',
    },
    fontSizes: {
      f1: '12px',
      f2: '14px',
      f3: '16px',
      f4: '18px',
      f5: '20px',
      f6: '24px',
      f7: '32px',
      f8: '40px',
      f9: '48px',
      f10: '56px',
      f11: '72px',
    },
    lineHeights: {
      lh1: '16px',
      lh2: '20px',
      lh3: '22px',
      lh4: '24px',
      lh5: '26px',
      lh6: '28px',
      lh7: '30px',
      lh8: '32px',
      lh9: '40px',
      lh10: '44px',
      lh11: '56px',
      lh12: '64px',
      lh13: '72px',
    },
    letterSpacings: {
      ls1: '0px',
      ls2: '-1px',
      ls3: '1%',
      lsp1: '-1%',
      lsp2: '-2%',
    },
  },
  color: colorsV3,
  fonts: fonts,
};

export default defaultTheme;
