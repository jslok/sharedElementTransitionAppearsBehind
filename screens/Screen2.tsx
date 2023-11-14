import React from 'react';
import { View } from 'react-native';
import Animated, {
  SharedTransition,
  withTiming,
} from 'react-native-reanimated';

const animationConfig = {
  duration: 250,
};
const transition = SharedTransition.custom(values => {
  'worklet';
  return {
    height: withTiming(values.targetHeight, animationConfig),
    width: withTiming(values.targetWidth, animationConfig),
    originY: withTiming(values.targetOriginY, animationConfig),
    originX: withTiming(values.targetOriginX, animationConfig),
  };
});

const Screen2: React.FC = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Animated.View
        style={{
          width: 200,
          height: 200,
          backgroundColor: 'green',
        }}
        sharedTransitionTag={'STT'}
        sharedTransitionStyle={transition}
      />
    </View>
  );
};

export default Screen2;
