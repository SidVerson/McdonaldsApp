import React from 'react';
import {View} from 'react-native';
import Header from './components/Header';
import Categories from './components/Categories';
import Popular from './components/Popular';
import {COLORS} from './styles/constants';

export default function App() {
  return (
    <View style={{padding:24,paddingTop: 55, backgroundColor: COLORS.BLACK, paddingBottom:75}}>
      <Header />
      <Categories />
      <Popular />
    </View>
  );
}
