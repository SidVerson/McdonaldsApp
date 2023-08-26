import React from 'react';
import {Image, Linking, View, TouchableNativeFeedback} from 'react-native';
export default function Header() {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
      }}>
      <TouchableNativeFeedback
        onPress={() => Linking.openURL('https://google.com/')}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png',
          }}
          style={{width: 51, height: 45}}
        />
      </TouchableNativeFeedback>
      <View>
        <Image
          source={{
            uri: 'https://icon-library.com/images/white-shopping-cart-icon/white-shopping-cart-icon-9.jpg',
          }}
          style={{width: 45, height: 45}}
        />
      </View>
    </View>
  );
}
