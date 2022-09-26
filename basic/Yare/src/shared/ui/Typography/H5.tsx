import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { Colors } from '../Colors';
import { TextProps } from './types';

const H5: React.FC<TextProps> = ({
  children,
  color,
  weight,
  textAlign,
  numberOfLines,
  ellipsizeMode,
}) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      style={[
        styles.text,
        { color: color || Colors.dark, fontWeight: weight, textAlign },
      ]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    // lineHeight: 22,
  },
});

export default H5;
