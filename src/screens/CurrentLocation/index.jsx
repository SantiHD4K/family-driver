import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';


import MapButton from '../../components/MapButton';

import iconHome from '../../assets/home.png';
import iconHistory from '../../assets/history.png';
import iconCenter from '../../assets/map_center.png';
import marker from '../../assets/marker.png';
import customMapStyle from '../../mapstyle.json';

import * as S from './styles';

const Map = () => {
  const [latLng, setLatLng] = useState({
    latitude: 10.9184,  // Latitud de Soledad, Atlántico
    longitude: -74.7663, // Longitud de Soledad, Atlántico
  });

  const navigation = useNavigation();
  let mapRef = null;

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Error', 'Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });
      setLatLng({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);

  function centerMap() {
    mapRef?.animateToRegion(
      {
        ...latLng,
        latitudeDelta: 0.0143,
        longitudeDelta: 0.0134,
      },
      1000,
    );
  }

  return (
    <S.Container>
      <S.Map
        ref={map => {
          mapRef = map;
        }}
        region={{
          ...latLng,
          latitudeDelta: 0.0143,
          longitudeDelta: 0.0134,
        }}
        loadingEnabled
        showsCompass={false}
        showsPointsOfInterest={false}
        showsBuildings={false}
        customMapStyle={customMapStyle}
      >
        <Marker coordinate={latLng} image={marker} />
      </S.Map>
      <S.OptionsContainer>
        <S.LeftOptions>
          <MapButton icon={iconHome} />
          <MapButton icon={iconHistory} />
        </S.LeftOptions>
        <MapButton icon={iconCenter} noMargin onPress={centerMap} />
      </S.OptionsContainer>
      <S.WhereToContainer>
        <S.WhereToButton
          onPress={() => navigation.navigate('SelectDestination')}
        >
          <S.From>From: Wilson Terrace 219 W</S.From>
          <S.ToContainer>
            <S.GreenDot />
            <S.To>Where to?</S.To>
          </S.ToContainer>
        </S.WhereToButton>
      </S.WhereToContainer>
    </S.Container>
  );
};

export default Map;
