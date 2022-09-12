import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export function CopyRight() {
  return (
    <View>
        <Text style={styles.text}>
            Feito com ♥ pela Rocketseat
        </Text>
    </View>
  );
}