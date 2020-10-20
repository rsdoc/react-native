import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import MapView from 'react-native-maps';

// 4201738803816157

export default function MyMapView() {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [region, setRegion] = useState({
    longitude: -122,
    latitude: 32,
    longitudeDelta: 0.04,
    latitudeDelta: 0.09,
  });

  useEffect(() => setMapLoaded(true), []);

  if (!mapLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <StatusBar style="auto" />
        <ActivityIndicator size="large" />
        <Text style={{ fontSize: 32 }}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MapView region={region} style={styles.mapView} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  mapView: {
    flex: 1,
  },
});
