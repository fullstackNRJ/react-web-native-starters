// Gradient Types
type GradientType = 'Blue' | 'Green';
type Gradient = {
  start: string;
  end: string;
  angle: number;
};

export const Colors = {
  blue: '#2C49C7',
  skyBlue: '#46C3EB',
  darkBlue: '#14277B',
  buttonActive: '#2C49C70D',
  fadedYellow: '#F9ECDB',
  fadedPurple: '#CFD6F4',
  fadedBlue: '#D4EEFB',
  fadedGreen: '#CEF0ED',
  graphGreen: '#26cba3ab',

  background: '#F8F9FF',

  white: '#FFFFFF',
  dark: '#000A33',

  red: '#FF5E5E',

  green: '#26CBA3',
  darkGreen: '#198B6F',

  sunflower: '#FFB74A',
  lavender: '#9D8AEC',

  grey: '#D8D9E0',
  transparentGrey: '#D8D9E04D',
  darkGrey: '#7C8199',

  transparent: 'transparent',

  rippleColor: '#2C49C716',

  modalBackdrop: '#0006',
};

export const Gradients: Record<GradientType, Gradient> = {
  Blue: {
    start: Colors.blue,
    end: Colors.darkBlue,
    angle: 130,
  },
  Green: {
    start: Colors.green,
    end: Colors.darkGreen,
    angle: 130,
  },
};
