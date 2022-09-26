import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { Colors } from '../Colors';
import { TextProps } from './types';

const H3: React.FC<TextProps> = ({
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
    fontSize: 24,
    // lineHeight: 28,
  },
});

export default H3;
