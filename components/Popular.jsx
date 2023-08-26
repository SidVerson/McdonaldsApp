import React from 'react';
import {
  Image,
  Linking,
  View,
  TouchableNativeFeedback,
  Text,
} from 'react-native';
import {COLORS, SIZES} from '../styles/constants';
import {popular} from './popular';
export default function popularegories() {
  return (
    <View style={{paddingTop: 20}}>
      <Text
        style={{fontSize: SIZES.h1, fontWeight: 'bold', color: COLORS.white}}>
        Popular
      </Text>

      <View
        style={{
          marginTop: 0,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
        {popular.map((popular, idx) => (
          <View
            key={`popular ${idx}`}
            style={{
              width: '30%',
              height: 120,
              marginBottom: 20,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.gray,
              justifyContent: 'center',
              paddingLeft: 5,
              paddingRight: 5,
            }}>
            <TouchableNativeFeedback>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={{uri: popular.image}}
                  style={{width: 40, height: 40}}
                />
                <Text
                  style={{
                    fontSize: SIZES.h4,
                    color: COLORS.white,
                    marginTop: 10,
                    textAlign: 'center',
                  }}>
                  {popular.name}
                </Text>
                <Text
                  style={{
                    fontSize: SIZES.h4,
                    color: COLORS.primary,
                    marginTop: 10,
                    textAlign: 'center',
                  }}>
                  {popular.price}
                </Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        ))}
      </View>
    </View>
  );
}
