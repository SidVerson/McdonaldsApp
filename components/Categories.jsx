import React from 'react';
import {
  Image,
  Linking,
  View,
  TouchableNativeFeedback,
  Text,
} from 'react-native';
import {COLORS, SIZES} from '../styles/constants';
import {categories} from './categories';
export default function Categories() {
  const [active, setActive] = React.useState(null);
  return (
    <View style={{paddingTop: 60}}>
      <Text
        style={{fontSize: SIZES.h1, fontWeight: 'bold', color: COLORS.white}}>
        Hey,
      </Text>
      <Text style={{fontSize: SIZES.h2, color: COLORS.white}}>what's up</Text>

      <View
        style={{
          marginTop: 30,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
        {categories.map((cat, idx) => (
          <View
            key={`category ${idx}`}
            style={{
              width: '30%',
              height: 100,
              marginBottom: 20,
              borderRadius: SIZES.radius,
              backgroundColor: active === idx ? COLORS.secondary : COLORS.gray,
              justifyContent: 'center',
              paddingLeft: 5,
              paddingRight: 5,
            }}>
            <TouchableNativeFeedback onPress={() => setActive(idx)}>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={{uri: cat.image}}
                  style={{width: 40, height: 40}}
                />
                <Text
                  style={{
                    fontSize: SIZES.h4,
                    color: COLORS.white,
                    marginTop: 10,
                    textAlign: 'center',
                  }}>
                  {cat.name}
                </Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        ))}
      </View>
    </View>
  );
}
