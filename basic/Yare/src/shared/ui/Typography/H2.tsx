import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { Colors } from '../Colors';
import { TextProps } from './types';

const H2: React.FC<TextProps> = ({
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
    fontSize: 28,
    // lineHeight: 34,
  },
});

export default H2;
