import React from 'react';
import { View, Button, SafeAreaView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { ScrollView } from 'react-native-reanimated/lib/typescript/Animated';

export function LoginScreen(navigation: NavigationProp<any>): React.JSX.Element {
  return (
    <SafeAreaView className="flex-1 bg-gray0">
      <ScrollView>
        <View></View>
      </ScrollView>
    </SafeAreaView>
  );
}
