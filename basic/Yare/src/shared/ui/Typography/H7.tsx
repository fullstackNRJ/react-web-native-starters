import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { Colors } from '../Colors';
import { TextProps } from './types';

const H7: React.FC<TextProps> = ({
  children,
  color,
  weight,
  textAlign,
  ellipsizeMode,
  numberOfLines,
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
    fontSize: 10,
    // lineHeight: 16,
  },
});

export default H7;
