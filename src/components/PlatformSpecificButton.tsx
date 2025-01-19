import React from 'react';
import { Platform, TouchableOpacity, TouchableNativeFeedback, View } from 'react-native';

import { PlatformSpecificButtonProps } from '../types/HomeScreenType';

const PlatformSpecificButton: React.FC<PlatformSpecificButtonProps> = ({ children, onPress }) => {
  return Platform.select({
    ios: (
      <TouchableOpacity activeOpacity={0.5} onPress={onPress} className="mb-6">
        {children}
      </TouchableOpacity>
    ),
    android: (
      <View className="overflow-hidden mb-6">
        <TouchableNativeFeedback onPress={onPress}>{children}</TouchableNativeFeedback>
      </View>
    ),
    default: <View className="overflow-hidden mb-6">{children}</View>, // `default`를 JSX로 설정
  })!;
};

export default PlatformSpecificButton;
