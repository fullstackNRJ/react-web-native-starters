import React from 'react';
import { View } from 'react-native';

type NumberRange =
  | 2
  | 4
  | 8
  | 12
  | 16
  | 20
  | 24
  | 26
  | 28
  | 32
  | 40
  | 48
  | 56
  | 64
  | 72
  | 80
  | 88
  | 96;

type PaddingType = {
  height?: NumberRange;
  width?: NumberRange;
};

const Padding: React.FC<PaddingType> = function ({ height = 2, width = 2 }) {
  return <View style={{ height, width }} />;
};

export default Padding;
