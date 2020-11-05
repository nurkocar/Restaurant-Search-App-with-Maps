import MapView from 'react-native-maps';
import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { City, RestaurantDetail, SearchBar } from './components';

const Main = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <MapView
          style={{flex:1}}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        </MapView>
      </View>
    </SafeAreaView>
  );
};

export default Main;
