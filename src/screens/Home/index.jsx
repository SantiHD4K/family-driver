import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

import PhoneInput from '../../components/PhoneInput';
import Button from '../../components/Button';

import Cab from '../../assets/cab.png';
import * as S from './styles';

const Home = function() {
  const navigation = useNavigation();

  return (
    <S.Container>
      <StatusBar style="light" />
      <S.TopArea>
        <S.CabImg source={Cab} resizeMode="contain" />
      </S.TopArea>
      <S.BottomArea>
        <S.Title>
          <S.Title>Welcome to </S.Title>
          <S.TitleBold>Roxio</S.TitleBold>
        </S.Title>
        <PhoneInput placeholder="987 65 43" />
        <Button onPress={() => navigation.navigate('Verification')}>
          Get Started
        </Button>
      </S.BottomArea>
    </S.Container>
  );
};

export default Home;
