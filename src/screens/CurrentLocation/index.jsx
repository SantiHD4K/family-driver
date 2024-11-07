import React, { useEffect, useState } from 'react';
import { Alert, Text } from 'react-native';
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
    latitude: 0, 
    longitude: 0,
  });

  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0143, 
    longitudeDelta: 0.0134,
  });

  const [address, setAddress] = useState('');
  const [initialAddress, setInitialAddress] = useState('');

  const navigation = useNavigation();
  let mapRef = null;

  // Function to get the address from coordinates
  const getAddress = async (latitude, longitude) => {
    try {
      const result = await Location.reverseGeocodeAsync({ latitude, longitude });
      if (result && result.length > 0) {
        const address = result[0];
        const formattedAddress = `${address.name}, ${address.city}, ${address.country}`;
        
        if (initialAddress === '') {
          setInitialAddress(formattedAddress);
        }
        setAddress(formattedAddress);
      }
    } catch (error) {
      console.log('Error getting address: ', error);
    }
  };

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

      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0143,
        longitudeDelta: 0.0134,
      });

      getAddress(location.coords.latitude, location.coords.longitude);
    })();
  }, []);

  // Function to center the map on current location
  function centerMap() {
    mapRef?.animateToRegion(
      {
        ...latLng,
        latitudeDelta: 0.001, 
        longitudeDelta: 0.001,
      },
      1000,
    );
  }

  // Handle dragging marker
  const handleDragEnd = (e) => {
    const newCoordinate = e.nativeEvent.coordinate;
    setLatLng({
      latitude: newCoordinate.latitude,
      longitude: newCoordinate.longitude,
    });

    setRegion({
      latitude: newCoordinate.latitude,
      longitude: newCoordinate.longitude,
      latitudeDelta: 0.001, 
      longitudeDelta: 0.001,
    });

    getAddress(newCoordinate.latitude, newCoordinate.longitude);

    mapRef?.animateToRegion(
      {
        latitude: newCoordinate.latitude,
        longitude: newCoordinate.longitude,
        latitudeDelta: 0.001, 
        longitudeDelta: 0.001,
      },
      1000,
    );
  };

  return (
    <S.Container>
      <S.Map
        ref={map => {
          mapRef = map;
        }}
        region={region}
        loadingEnabled
        showsCompass={false}
        showsPointsOfInterest={false}
        showsBuildings={false}
        customMapStyle={customMapStyle}
      >
        {/* Draggable marker */}
        <Marker
          coordinate={latLng}
          image={marker}
          draggable  
          onDragEnd={handleDragEnd} 
        />
      </S.Map>

      <S.OptionsContainer>
        <S.LeftOptions>
          <MapButton icon={iconHome} />
          <MapButton icon={iconHistory} />
        </S.LeftOptions>
        <MapButton icon={iconCenter} noMargin onPress={centerMap} />
      </S.OptionsContainer>

      {address && (
        <S.WhereToContainer>
          <S.WhereToButton
            onPress={() => navigation.navigate('SelectDestination', {
              initialAddress: initialAddress, // Initial address (user's current location)
              address: address,               // Destination address (where the user dragged)
              startCoordinate: latLng,        // Start coordinates
              endCoordinate: { latitude: latLng.latitude, longitude: latLng.longitude }, // End coordinates
            })}
          >
            <S.From>
              <Text>From: {initialAddress || 'Fetching location...'}</Text>
            </S.From>
            <S.ToContainer>
              <S.GreenDot />
              <S.To>
                <Text>To: {address}</Text>
              </S.To>
            </S.ToContainer>
          </S.WhereToButton>
        </S.WhereToContainer>
      )}
    </S.Container>
  );
};

export default Map;
