import {fontSize} from '~utils';

// Font family
const Black = 'Gilroy-Black';
const BlackItalic = 'Gilroy-BlackItalic';
const Bold = 'Gilroy-Bold';
const BoldItalic = 'Gilroy-BoldItalic';
const Extrabold = 'Gilroy-Extrabold';
const ExtraboldItalic = 'Gilroy-ExtraboldItalic';
const Heavy = 'Gilroy-Heavy';
const HeavyItalic = 'Gilroy-HeavyItalic';
const Light = 'Gilroy-Light';
const LightItalic = 'Gilroy-LightItalic';
const Medium = 'Gilroy-Medium';
const MediumItalic = 'Gilroy-MediumItalic';
const Regular = 'Gilroy-Regular';
const RegularItalic = 'Gilroy-RegularItalic';
const Semibold = 'Gilroy-Semibold';
const SemiboldItalic = 'Gilroy-SemiboldItalic';
const Thin = 'Gilroy-Thin';
const ThinItalic = 'Gilroy-ThinItalic';
const UltraLight = 'Gilroy-UltraLight';
const UltraLightItalic = 'Gilroy-UltraLightItalic';
// Export font size
const sizes = {
  base: fontSize(14),
  h1: fontSize(30),
  h2: fontSize(24),
  h3: fontSize(18),
  h4: fontSize(16),
  h5: fontSize(14),
  h6: fontSize(12),
  h7: fontSize(10),
  t17: fontSize(17),
  t20: fontSize(20),
  t31: fontSize(31),
};

// Export lineheights
const lineHeights = {
  base: 20,
  h1: 43,
  h2: 33,
  h3: 28,
  h4: 23,
  h5: fontSize(20),
  h6: 17,
  h7: 14,
};

// Export font family
const fonts = {
  Black: {
    fontFamily: Black,
  },
  BlackItalic: {
    fontFamily: BlackItalic,
  },
  Bold: {
    fontFamily: Bold,
  },
  BoldItalic: {
    fontFamily: BoldItalic,
  },
  Extrabold: {
    fontFamily: Extrabold,
  },
  ExtraboldItalic: {
    fontFamily: ExtraboldItalic,
  },
  Heavy: {
    fontFamily: Heavy,
  },
  HeavyItalic: {
    fontFamily: HeavyItalic,
  },
  Light: {
    fontFamily: Light,
  },
  LightItalic: {
    fontFamily: LightItalic,
  },
  Medium: {
    fontFamily: Medium,
  },
  MediumItalic: {
    fontFamily: MediumItalic,
  },
  Regular: {
    fontFamily: Regular,
  },
  RegularItalic: {
    fontFamily: RegularItalic,
  },
  Semibold: {
    fontFamily: Semibold,
  },
  SemiboldItalic: {
    fontFamily: SemiboldItalic,
  },
  Thin: {
    fontFamily: Thin,
  },
  ThinItalic: {
    fontFamily: ThinItalic,
  },
  UltraLight: {
    fontFamily: UltraLight,
  },
  UltraLightItalic: {
    fontFamily: UltraLightItalic,
  },
  default: {},
};
export {fonts, lineHeights, sizes};
