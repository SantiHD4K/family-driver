import React from 'react';
import { RectButton } from 'react-native-gesture-handler';  // Usamos RectButton directamente en lugar de RectButtonProperties

import economy from '../../assets/economy.png';
import luxury from '../../assets/luxury.png';
import family from '../../assets/family.png';

import * as S from './styles';

const carType = {
  economy,
  luxury,
  family,
};

const CarButton = ({ text, active, ...props }) => {
  return (
    <S.Container active={active}>
      <S.Button {...props}>
        <S.Image source={carType[text.toLowerCase()]} />
        <S.Title>{text}</S.Title>
      </S.Button>
    </S.Container>
  );
};

export default CarButton;
