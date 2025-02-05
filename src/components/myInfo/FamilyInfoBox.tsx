import React from 'react';
import { View, Text } from 'react-native';

import { FamilyInfo } from '@_types/familyInfo';

function FamilyInfoBox({ name, relationship, phoneNumber }: FamilyInfo): React.JSX.Element {
  return (
    <View className="flex flex-row rounded-lg py-4 px-2 w-full">
      <View className="flex flex-row items-center w-1/2">
        <Text
          className="text-lg font-bold text-gray100 w-1/2"
          numberOfLines={1}
          ellipsizeMode="clip">
          {name}
        </Text>
        <Text className="flex text-base text-gray50 w-1/2" numberOfLines={1}>
          {relationship}
        </Text>
      </View>
      <View className="flex flex-row justify-center w-1/2">
        <Text className="text-lg text-center text-gray100">{phoneNumber}</Text>
      </View>
    </View>
  );
}

export default FamilyInfoBox;
