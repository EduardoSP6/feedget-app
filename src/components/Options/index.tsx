import React from 'react';
import { View, Text } from 'react-native';
import { CopyRight } from '../CopyRight';

import { feedbackTypes } from '../../utils/feedbackTypes';

import { styles } from './styles';
import { Option } from '../Option';
import { FeedbackType } from '../Widget';

interface Props {
  onFeedbackTypeChanged: (feedbackType: FeedbackType) => void;
}

export function Options({ onFeedbackTypeChanged }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Deixe seu feedback
      </Text>

      <View style={styles.options}>
        {
          Object.entries(feedbackTypes).map(([key, value]) => (
            <Option
              key={key}
              title={value.title}
              image={value.image}
              onPress={() => onFeedbackTypeChanged(key as FeedbackType)}
            />
          ))
        }
      </View>
      <CopyRight />
    </View>
  );
}